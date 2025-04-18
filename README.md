# 💰 Expense Tracker App (MERN Stack)

A modern Expense and Income Tracking application built with the **MERN stack** (MongoDB, Express, React, Node.js). The app allows users to:

- Add and categorize expenses or incomes
- Track transactions date-wise
- View expenses and incomes separately
- Use predefined or custom categories
- Enjoy a clean and responsive UI divided into 3 sections

---

## 📸 Preview

![App Preview](./preview.png)

---

## 🛠 Tech Stack

| Tech         | Description                    |
|--------------|--------------------------------|
| React        | Frontend framework             |
| Node.js      | JavaScript runtime             |
| Express.js   | Backend framework              |
| MongoDB      | NoSQL database                 |
| Axios        | API requests                   |
| CSS Flexbox  | Responsive layout styling      |

---

## 🚀 Features

- 🧾 Add income or expense entries
- 🗃️ Choose from predefined categories or add your own
- 📅 Attach a date to every transaction
- 📊 View expenses & incomes listed separately, date-wise
- 🧱 Structured layout with left, middle, and right panels
- 🧹 Clean and intuitive UI

---

## 📁 Project Structure

```bash
.
├── client               # React frontend
│   ├── public
│   └── src
│       ├── App.js
│       ├── App.css
│       └── index.js
├── server               # Node/Express backend
│   ├── models
│   │   └── Expense.js
│   ├── routes
│   │   └── expenses.js
│   ├── server.js
│   └── .env
├── README.md
└── package.json

🔧 Installation & Setup
1. Clone the repository
bash
Copy code
git clone https://github.com/yourusername/mern-expense-tracker.git
cd mern-expense-tracker

2. Setup Backend (Node/Express)
bash
Copy code
cd server
npm install
Create a .env file in the /server directory:
env
Copy code
PORT=5000
MONGO_URI=your_mongo_connection_string
Then run the server:

bash
Copy code
npm start

3. Setup Frontend (React)
bash
Copy code
cd client
npm install
npm start

📬 API Endpoints
Method	Endpoint	        Description
GET	    /api/expenses	    Get all transactions
POST	/api/expenses	    Add new expense/income
DELETE	/api/expenses/:id	Delete a transaction