# 💰 Expense Tracker App (MERN Stack)

A modern and user-friendly Expense & Income Tracking application built using the **MERN Stack** (MongoDB, Express, React, Node.js). It allows users to track day-to-day financial transactions categorized by type, view summaries, and gain insights through charts — all in a clean and responsive interface.

---

## ✨ Features

- ✅ Add both **income** and **expense** transactions
- 📅 Select transaction date via **calendar**
- 🗃️ Use predefined or **custom categories**
- 🔄 **Edit** or **delete** transactions
- 🧮 View **daily** entries and **monthly summaries**
- 📊 See **category-wise monthly expense charts**
- 🧱 Responsive layout: Calendar, Form, Lists & Charts
- 🦾 Clean dashboard UI with header and footer

---

## 🛠 Tech Stack

| Tech           | Description                 |
|----------------|-----------------------------|
| React          | Frontend framework          |
| Node.js        | JavaScript runtime          |
| Express.js     | Backend framework           |
| MongoDB        | NoSQL database              |
| Axios          | HTTP requests               |
| Recharts       | Chart rendering             |
| React Calendar | Calendar component          |
| CSS Flexbox    | Layout styling              |

---

## 📁 Folder Structure

```
Expense-Tracker/
├── expense-tracker-frontend/                  # React Frontend
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── CalendarSelector.js
│       │   ├── ExpenseForm.js
│       │   ├── ExpenseList.js
│       │   ├── IncomeList.js
│       │   └── ExpenseChart.js
│       ├── App.js
│       ├── App.css
│       └── index.js
│
├── expense-tracker-backend/                  # Node + Express Backend
│   ├── models/
│   │   └── Expense.js
│   ├── routes/
│   │   └── expenses.js
│   ├── server.js
│   └── .env
│
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js & npm
- MongoDB Atlas or Local MongoDB

---

### 📥 Clone the Repository

```bash
git clone https://github.com/nakulpatel18/Expense-Tracker.git
cd expense-tracker
```

---

### ⚙️ Backend Setup

```bash
cd expense-tracker-backend
npm install
```

Create a `.env` file in the `expense-tracker-backend` directory:

```env
PORT=5000
MONGO_URI=your_mongo_connection_string
```

Start the backend server:

```bash
npm start
```

---

### 🎨 Frontend Setup

```bash
cd expense-tracker-frontend
npm install
npm start
```

Frontend runs at `http://localhost:3000`  
Backend runs at `http://localhost:5000`

---

## 🧑‍💻 Usage Instructions

1. Start the backend and frontend servers.
2. Use the **calendar** to select a specific date.
3. Fill out the **form** to add a new income or expense.
4. Choose a category or add a **custom category** if needed.
5. View your **daily entries** and **monthly summaries**.
6. Use **Edit** and **Delete** to manage your entries.
7. Visual insights appear through a **monthly expense bar chart**.

---

## 📡 API Endpoints

| Method | Endpoint             | Description                 |
|--------|----------------------|-----------------------------|
| GET    | `/api/expenses`      | Fetch all transactions      |
| POST   | `/api/expenses`      | Add a new entry             |
| PUT    | `/api/expenses/:id`  | Update an existing entry    |
| DELETE | `/api/expenses/:id`  | Delete an entry             |