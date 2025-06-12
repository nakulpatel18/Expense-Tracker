# 💰 Expense Tracker App (MERN Stack)

A modern and responsive Expense & Income Tracking application built using the **MERN Stack** (MongoDB, Express, React, Node.js). This app helps users manage their finances efficiently by tracking daily incomes and expenses with categorized data and visual insights.

---

## ✨ Features

- ✅ Add both **income** and **expense** entries
- 📆 Assign a **date** to each transaction
- 🗂️ Use **predefined** or **custom categories**
- 🔍 View **incomes and expenses separately**
- 📊 Visualize monthly expense summary via **bar chart**
- 📅 Filter transactions based on **calendar date**
- 🧾 **Edit** or **delete** existing entries
- 💡 Clean, intuitive, and **responsive** UI layout

---

## 🛠 Tech Stack

| Tech           | Description                 |
|----------------|-----------------------------|
| React          | Frontend framework          |
| Node.js        | JavaScript runtime          |
| Express.js     | Backend framework           |
| MongoDB        | NoSQL database              |
| Axios          | For API requests            |
| Recharts       | Chart rendering library     |
| React Calendar | Date selection UI           |
| CSS Flexbox    | Responsive layout styling   |

---

## 📁 Folder Structure

```
expense-tracker/
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
├── expense-tracker-backend/                  # Express Backend
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
- MongoDB (cloud or local)

---

### 📥 Clone the Repository

```bash
git clone https://github.com/nakulpatel18/Expense-Tracker.git
cd Expense-Tracker
```

---

### ⚙️ Backend Setup

```bash
cd expense-tracker-backend
npm install
```

Create a `.env` file inside the `/expense-tracker-backend` folder:

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

The frontend will start at `http://localhost:3000` and the backend at `http://localhost:5000`.

---

## 📌 Usage Instructions

1. Start both the **frontend** and **backend** servers.
2. Select a date using the calendar.
3. Add income or expense with title, amount, category, and date.
4. Edit or delete any entry using the respective buttons.
5. View the **monthly summary** and **category-wise expense chart**.

---

## 📡 API Endpoints

| Method | Endpoint             | Description                 |
|--------|----------------------|-----------------------------|
| GET    | `/api/expenses`      | Fetch all transactions      |
| POST   | `/api/expenses`      | Add a new income/expense    |
| PUT    | `/api/expenses/:id`  | Update an entry             |
| DELETE | `/api/expenses/:id`  | Delete a transaction        |
