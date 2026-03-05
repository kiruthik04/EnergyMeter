# ⚡ EnergyMeter — IoT-Based Prepaid EV Charging Platform

A next-generation **IoT-based prepaid energy metering** web platform for EV Charging Stations. Users can pre-purchase charging sessions online, connect to supported charging points instantly, and monitor real-time energy usage — all through a sleek, modern dashboard.

---

## 🚀 Features

- **Prepaid Charging** — Pre-purchase charging sessions via integrated **Razorpay** payment gateway
- **Real-Time IoT Sync** — Live charging session control via **Firebase Realtime Database**
- **EV Vehicle Support** — Separate pages for EV Cars and EV Bikes
- **Charging Dashboard** — Animated charging status page with battery fill animation
- **Energy Analytics** — Visual charts for charging trends and energy usage analytics
- **Transaction Logging** — Python script to fetch Razorpay payments and push data to GitHub
- **Responsive Design** — Glassmorphism UI with gradient accents, fully responsive layout

---

## 🗂️ Project Structure

```
EnergyMeter/
├── index.html          # Main dashboard (hero, charts, Razorpay button)
├── charging.html       # Active charging session page with battery animation
├── evcar.html          # EV Cars listing/info page
├── evbike.html         # EV Bikes listing/info page
├── firebase.js         # Firebase Realtime Database integration
├── main.js             # Clock, UI logic
├── razorpay.py         # Fetch transactions & push to GitHub (Python utility)
├── css/
│   ├── global.css      # Design system — variables, layout, components
│   └── style.css       # Additional page-specific styles
├── img/                # Icons, charts, logo assets
├── package.json        # Node.js dependencies
└── requirements.txt    # Python dependencies
```

---

## 🛠️ Tech Stack

| Layer        | Technology                              |
|--------------|-----------------------------------------|
| Frontend     | HTML5, CSS3 (Glassmorphism), JavaScript |
| IoT Backend  | Firebase Realtime Database              |
| Payments     | Razorpay Payment Gateway                |
| Utility      | Python 3, PyGithub, python-dotenv       |
| Icons        | Font Awesome 6                          |
| Node Backend | Express.js, firebase-admin              |

---

## ⚙️ Setup & Installation

### Prerequisites
- Node.js (v16+)
- Python 3.8+
- Firebase project with Realtime Database enabled
- Razorpay account (API keys)

### 1. Clone the Repository
```bash
git clone https://github.com/kiruthik04/EnergyMeter.git
cd EnergyMeter
```

### 2. Install Node Dependencies
```bash
npm install
```

### 3. Install Python Dependencies
```bash
pip install -r requirements.txt
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory:

```env
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
GITHUB_USERNAME=your_github_username
GITHUB_REPO=your_repo_name
GITHUB_TOKEN=your_github_personal_access_token
```

### 5. Run the Application

Open `index.html` directly in a browser, or serve it locally:
```bash
npx serve .
```

---

## 🔥 Firebase Setup

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable **Realtime Database**
3. Update your Firebase config in the HTML files (replace the SDK initialization config)
4. Set database rules to allow authenticated reads/writes

The `charging.html` page listens to the `ENERGYMETER` node in Firebase. To **stop charging**, enter confirmation code `1234` on the prompt — this sets `Condition: 0` in the database, signaling the IoT device to stop.

---

## 💳 Razorpay Integration

- The **Quick Recharge Setup** button on the dashboard is powered by a Razorpay Payment Button embedded via script.
- The Python script `razorpay.py` fetches all transactions from Razorpay and pushes them as a text file to a specified GitHub repository for record-keeping.

---


## 📄 License

This project is licensed under the **ISC License**.
