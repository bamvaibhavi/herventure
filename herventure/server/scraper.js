const puppeteer = require('puppeteer');

async function fetchAllSchemes({ searchKeyword }) {
    console.log("🚀 Launching DuckDuckGo Auto-Fill Scraper...");
    
    const browser = await puppeteer.launch({ 
        headless: true, 
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-blink-features=AutomationControlled'] 
    });
    
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  // one 'Helper Function' that can run any query and get data 
    async function scrapeDuckDuckGo(query) {
        try {
            const url = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`;
            console.log(`🌍 Live Searching: ${query}`);
            
            await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });

            return await page.evaluate(() => {
                const results = [];
                const elements = document.querySelectorAll('.result'); 

                elements.forEach(el => {
                    const titleElement = el.querySelector('.result__title a');
                    const descElement = el.querySelector('.result__snippet');

                    if (titleElement) {
                        let link = titleElement.href;
                        // decoding DuckDuckGo tracking link 
                        if(link.includes('//duckduckgo.com/l/?uddg=')){
                            const urlParams = new URLSearchParams(link.split('?')[1]);
                            link = decodeURIComponent(urlParams.get('uddg'));
                        }

                        //  (Ad Blocker)
                        // allow only government website(.gov or .nic)
                        const safeLink = link.toLowerCase();
                        if (safeLink.includes('.gov') || safeLink.includes('.nic')) {
                            results.push({ 
                                title: titleElement.innerText, 
                                description: descElement ? descElement.innerText : "Click Apply Now to view official government details.", 
                                link: link 
                            });
                        }
                    }
                });
                return results;
            });
        } catch (error) {
            console.log("⚠️ Search timeout or error.");
            return [];
        }
    }

    try {
        // STEP 1: search for specific skill
        const specificQuery = `site:gov.in "scheme" OR "yojana" for women ${searchKeyword}`;
        let finalSchemes = await scrapeDuckDuckGo(specificQuery);

        // STEP 2: if result is less than 5 then search for universal schemes 
        if (finalSchemes.length < 5) {
            console.log(`⚠️ Found only ${finalSchemes.length} schemes. Fetching generic universal schemes to make it 5...`);
            
            // second query for women entrepreneur (MSME, Startup India)
            const generalQuery = `site:gov.in women entrepreneur business MSME yojana scheme`;
            const generalSchemes = await scrapeDuckDuckGo(generalQuery);

            // removing duplicate links
            for (let scheme of generalSchemes) {
                // if link is not present in previous one then add it
                if (!finalSchemes.find(s => s.link === scheme.link)) {
                    finalSchemes.push(scheme);
                }
                // when 5 schemes completed stop the loop
                if (finalSchemes.length >= 5) break; 
            }
        }

        await browser.close();
        
        console.log(`✅ SUCCESS! Returning exactly ${finalSchemes.slice(0, 5).length} LIVE schemes.`);
        return finalSchemes.slice(0, 5); // 5 schemes

    } catch (error) {
        console.error("❌ Scraping Logic Failed:", error);
        await browser.close();
        return [];
    }
}

module.exports = { fetchAllSchemes };