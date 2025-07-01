# 💰 Expense Tracker App (MERN Stack)

A modern and user-friendly **Expense & Income Tracking** application built using the **MERN Stack** (MongoDB, Express, React, Node.js). Users can securely manage their financial transactions, visualize their spending, and access profile and admin features in a responsive interface.

[ Live Link : https://expense-tracker-beige-beta-14.vercel.app/ ]

---

## ✨ Features

### 💼 Core Functionality
- ✅ Add, edit, and delete **income** and **expense** transactions  
- 📅 Select transaction date with an interactive **calendar**  
- 🗃️ Choose from predefined or **custom categories**  
- 📆 See **daily entries** and **monthly summaries**  
- 📊 View **category-wise monthly bar charts**  
- 📈 Track spending trends with a **yearly line chart**

### 🧑‍💼 User Experience
- 🔐 **Authentication system** (Register/Login with token-based access)  
- 🔁 Forgot Password & Secure Reset via **email (Nodemailer)**  
- 🔒 Protected routes for dashboard, profile, and admin areas  
- 🧾 Responsive UI with **form, calendar, list, and charts in one view**  
- 🌐 Glassmorphism-style **Login/Register modals** on landing page  
- 🧑 View and update **user profile** and change password  

### 🛡️ Admin Features
- 🧑‍⚖️ Admin access to **view and manage all users**  
- 🗂️ Admin dashboard to **view/delete all transactions**  
- 🛠️ Promote/demote users between 'user' and 'admin' roles  
- ❌ Prevents self-deletion of admin from admin panel  

---

## 🛠 Tech Stack

| Tech               | Description                                          |
|--------------------|------------------------------------------------------|
| React              | Frontend library for building UI                     |
| React Router DOM   | Routing between pages in React                       |
| Axios              | Promise-based HTTP client for API requests           |
| React Modal        | For Login/Register modals with accessibility         |
| React Calendar     | Calendar component for date selection                |
| Recharts           | Data visualization for bar and line charts           |
| Node.js            | JavaScript runtime environment                       |
| Express.js         | Lightweight backend web framework                    |
| MongoDB            | NoSQL database for storing user and transaction data |
| Mongoose           | ODM for MongoDB, modeling application data           |
| JWT (jsonwebtoken) | Token-based authentication                           |
| Bcrypt             | Password hashing and validation                      |
| Nodemailer         | Email sending for password reset links               |
| CSS Flexbox/Grid   | Responsive layout styling                            |
| Custom CSS         | Component-specific and global styling                |

---

## 📁 Folder Structure

```
expense-tracker-main/
├── expense-tracker-backend/ # Backend codebase
│   ├── controllers/
│   │   ├── authControllers.js
│   │   └── profileController.js
│   ├── middlewares/
│   │   ├── adminAuth.middleware.js
│   │   └── auth.middleware.js
│   ├── models/
│   │   ├── Expense.js
│   │   └── User.js
│   ├── routes/
│   │   ├── adminRoutes.js
│   │   ├── authRoutes.js
│   │   ├── expenses.js
│   │   └── userRoutes.js
│   ├── utils/
│   │   └── sendEmail.js
│   ├── .env                 # Contains MONGO_URI, JWT_SECRET, Email/Frontend URLs
│   ├── package.json         
│   └── server.js            # Main backend server file
│
├── expense-tracker-frontend/ # Frontend codebase
│   ├── src/
│   │   ├── api/
│   │   │   └── api.js      # Axios instance for API calls
│   │   ├── components/
│   │   │   ├── CalendarSelector.js    
│   │   │   ├── ExpenseChart.js
│   │   │   ├── ExpenseForm.js
│   │   │   ├── ExpenseLineChart.js
│   │   │   ├── ExpenseList.js
│   │   │   ├── IncomeList.js
│   │   │   └── component.css      
│   │   ├── pages/
│   │   │   ├── AdminDashboard.js
│   │   │   ├── AllExpenses.js
│   │   │   ├── ChangePassword.js
│   │   │   ├── Dashboard.js
│   │   │   ├── ForgotPassword.js
│   │   │   ├── Landing.js
│   │   │   ├── Login.js
│   │   │   ├── Profile.js
│   │   │   ├── Register.js
│   │   │   ├── ResetPassword.js
│   │   │   ├── UpdateProfile.js
│   │   │   ├── UserManagement.js
│   │   │   ├── Admin.css
│   │   │   ├── dashboard.css
│   │   │   ├── Landing.css
│   │   │   ├── Login.css
│   │   │   ├── ProfileAuthForms.css
│   │   │   └── Register.css
│   │   ├── App.js             # Main React application component     
│   │   └── App.css 
│   └── package.json           
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
npm install express mongoose cors dotenv jsonwebtoken bcrypt nodemailer
```

Create a `.env` file in the `expense-tracker-backend` directory:

```env
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@example.com     # email address 
EMAIL_PASS=your_email_password        # email password or app-specific password 
EMAIL_HOST=smtp.example.com           # SMTP host (e.g., smtp.gmail.com for Gmail)
EMAIL_PORT=587                        # SMTP port (e.g., 587 for TLS, 465 for SSL)
FRONTEND_URL=http://localhost:3000    # Frontend URL for password reset links  

#for JWT_SECRET key run this code in terminal 
" $bytes = New-Object byte[] 64; [System.Security.Cryptography.RandomNumberGenerator]::Create().GetBytes($bytes); -join ($bytes | ForEach-Object { $_.ToString('x2') }) "
```
                            
Start the backend server:

```bash
npm start
```

---

### 🎨 Frontend Setup

```bash
cd expense-tracker-frontend
npm install react-router-dom axios react-calendar recharts react-icons react-modal
npm start
```

Frontend runs at `http://localhost:3000`  
Backend runs at `http://localhost:5000`

---

## 🧑‍💻 Usage Instructions

- Start both **backend** and **frontend** servers.
- Visit `/` to explore the **Landing Page** with feature highlights.
- Use the **Login** or **Register** buttons in the navbar to open modals.
- Create an account or log in using your registered **email** and **password**.
- Use **Forgot Password?** to receive a reset link via email.
- After logging in, you’ll be redirected to your **Dashboard**.

### 🧭 Dashboard:

- 📅 Select a date using the **calendar** to filter transactions.
- 📝 Add **income** or **expense** entries using the form.
- 🗃️ Choose a predefined or enter a **custom category**.
- 📆 View **daily transactions** filtered by selected date.
- 📈 See **monthly summaries** of income and expenses.
- ✏️ Click **Edit** to update a transaction.
- ❌ Click **Delete** to remove a transaction.
- 📊 Analyze data with:
  - **Monthly bar chart** by expense categories.
  - **Yearly line chart** for long-term trends.

### 👤 Profile Management:

- View your **profile** details from the top-right icon.
- Update your **name** or **email** from the profile page.
- Change your **password** from the dedicated section.

### 🛡️ Admin Features (for admins only):

- Access the **Admin Panel** to manage platform-wide data.
- 👥 Manage all registered **users**:
  - Promote/demote between `admin` and `user` roles.
  - Delete users and their associated data.
- 💼 View and manage **all recorded transactions**.


---

## 📡 API Endpoints

### 🔐 Authentication

| Method | Endpoint                    | Description                          |
|--------|-----------------------------|--------------------------------------|
| POST   | /api/auth/register          | Register a new user                  |
| POST   | /api/auth/login             | Login and get token                  |
| POST   | /api/auth/forgot-password   | Send password reset link via email  |
| POST   | /api/auth/reset-password/:token | Reset user password using token |

### 👤 User Profile

| Method | Endpoint                | Description                        |
|--------|-------------------------|------------------------------------|
| GET    | /api/users/profile      | Get current user's profile         |
| PUT    | /api/users/profile      | Update user profile (name/email)   |
| PUT    | /api/users/change-password | Change user password              |

### 💵 Expense/Income

| Method | Endpoint              | Description                         |
|--------|-----------------------|-------------------------------------|
| GET    | /api/expenses         | Fetch all user's transactions       |
| POST   | /api/expenses         | Add a new transaction (income/expense) |
| PUT    | /api/expenses/:id     | Update a specific transaction       |
| DELETE | /api/expenses/:id     | Delete a specific transaction       |

### 🛡️ Admin Routes

| Method | Endpoint                          | Description                        |
|--------|-----------------------------------|------------------------------------|
| GET    | /api/admin/users                  | Get list of all users              |
| PUT    | /api/admin/users/:id/role         | Update a user's role               |
| DELETE | /api/admin/users/:id              | Delete a user and their data       |
| GET    | /api/admin/expenses               | Get all users' transactions        |
| DELETE | /api/admin/expenses/:id           | Delete a specific user transaction |

