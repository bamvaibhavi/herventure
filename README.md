<img width="1918" height="1026" alt="1" src="https://github.com/user-attachments/assets/dc2e76bc-080e-4d81-89ed-b91643564b39" />
<img width="1918" height="1017" alt="2" src="https://github.com/user-attachments/assets/ab42ae34-191f-4b89-b5e1-09b470c4aeb3" />
<img width="1918" height="1018" alt="3" src="https://github.com/user-attachments/assets/608ab462-28e1-4e9d-9885-4d2dd48ef750" />
<img width="1919" height="1017" alt="Screenshot 2026-04-14 143025" src="https://github.com/user-attachments/assets/638ec7b7-3c02-4567-850c-db46c4245e2d" />
<img width="1919" height="1020" alt="Screenshot 2026-04-14 143131" src="https://github.com/user-attachments/assets/55b0a904-c405-43d8-9755-5a2270579b82" />
<img width="1919" height="1022" alt="Screenshot 2026-04-14 143210" src="https://github.com/user-attachments/assets/86b4c9cd-554a-4f86-9d70-e5f03866a8d0" />

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
```

### 2. Backend Setup
Open a terminal and navigate to the backend directory:
```bash
cd backend
npm install
node index.js
```
*(The backend server will start running, usually on port 5000 or 3001)*

### 3. Frontend Setup
Open a **new** terminal and navigate to the frontend directory:
```bash
cd frontend
npm install
npm start
```
*(The React app will launch automatically in your browser at http://localhost:3000)*

---

## 👩‍💻 Developed By
**Information Technology (Semester IV) - SIES GST**
- Vaibhavi Manohar Bam
- Arul Malar Dhinagaran
- Bhavika Shivkumar
