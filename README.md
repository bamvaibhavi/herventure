# 🚀 HerVenture: Dynamic Web Aggregator for Women Entrepreneurs

## 📌 Project Overview
**HerVenture** is a robust, crash-proof web platform designed to empower women entrepreneurs by connecting them with verified government schemes, grants, and financial aid. 

Unlike traditional static scrapers that fail due to frequent UI changes on government portals, HerVenture utilizes a **Dynamic SERP Routing Engine**. By combining Headless Chromium (Puppeteer) with a strict `site:gov.in` filter, the platform successfully bypasses anti-bot firewalls and fake private consultant ads to deliver 100% authentic government data.

## ✨ Key Features
- **Dynamic SERP Aggregation:** Live extraction of data via search engine routing, making the system immune to government UI/CSS updates.
- **Data Sanitization (Ad-Blocker Logic):** Strictly filters URLs to display only official `.gov.in` and `.nic.in` destination links.
- **Intelligent Fallback Mechanism:** Automatically appends broader women-centric schemes if niche skill searches yield fewer results, ensuring no user is left empty-handed.
- **Responsive UI:** Clean, intuitive, and distraction-free interface built with React.js.

## 🛠️ Technology Stack
- **Frontend:** React.js, CSS / Tailwind
- **Backend:** Node.js, Express.js
- **Scraping Engine:** Puppeteer (Headless Browser)
- **Routing Source:** DuckDuckGo Search Index

## ⚙️ Installation & Setup Guide
Follow these steps to run the project locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your system.

### 1. Clone the Repository
```bash
git clone [https://github.com/YourUsername/HerVenture.git](https://github.com/YourUsername/HerVenture.git)
cd HerVenture
 2. Backend Setup
Open a terminal and navigate to the backend directory:
```bash
cd backend
npm install
node index.js
(The backend server will start running, usually on port 5000 or 3001)

3. Frontend Setup
Open a new terminal and navigate to the frontend directory:

```bash
cd frontend
npm install
npm start
(The React app will launch automatically in your browser at http://localhost:3000)
👩‍💻 Developed By
Information Technology (Semester IV) - SIES GST

Vaibhavi Manohar Bam

Arul Malar Dhinagaran

Bhavika Shivkumar
