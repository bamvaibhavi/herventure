const express = require('express');
const cors = require('cors');
const { fetchAllSchemes } = require('./scraper'); 

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/match', async (req, res) => {
    try {
        // taking skills
        const { skill } = req.body;
        
        /// Sharpshooter Keywords 
        let searchKeyword = ""; 
        
        if (skill === 'IT' || skill === 'Freelancing') {
            searchKeyword = "IT OR Technology OR Computer"; 
        } else if (skill === 'Beauty' || skill === 'Salon') {
            searchKeyword = "parlour OR salon OR beauty"; 
        } else if (skill === 'Cooking') {
            searchKeyword = "food processing OR catering"; 
        } else if (skill === 'Tuition' || skill === 'Coaching') {
            searchKeyword = "education OR training OR coaching"; 
        } else if (skill === 'Tailoring') {
            searchKeyword = "tailoring OR boutique OR apparel"; 
        }

        console.log(`🔍 User Skill: ${skill} | 🤖 Sniper Keywords: ${searchKeyword}`);
        //searchKeyword
        let schemes = await fetchAllSchemes({ searchKeyword });

        if (!schemes || schemes.length === 0) {
            console.log("⚠️ No live schemes found.");
            return res.json([]); 
        }

        console.log(`✅ Success! Sent ${schemes.length} LIVE schemes.`);
        res.json(schemes);

    } catch (error) {
        console.log("❌ Server Error:", error.message);
        res.json([]);
    }
});

app.listen(5000, () => {
    console.log("🚀 Server running on port 5000");
});