# Leave Management System – Frontend

This is the frontend application for the **Employee Leave Management System**, built using **React.js**, **Material UI**, and **Tailwind CSS**. It connects to a Spring Boot backend via REST APIs to provide role-based features for both employees and admin users.

---

## 🌟 Features

### 👤 Employee
- Login & registration
- Apply for leave
- View leave history
- View remaining leave balance

### 🛠️ Admin
- Admin dashboard
- View all employee leave records
- Approve or reject leave requests
- Add new employees and departments
- Download leave reports (Excel)
- Send reports to admin email

---

## 🛠️ Tech Stack

| Layer     | Technology                            |
|-----------|---------------------------------------|
| Frontend  | React.js                              |
| UI        | Material UI, Tailwind CSS             |
| Routing   | React Router                          |
| State     | useState, useEffect                   |
| HTTP      | Axios                                 |
| Backend   | [Spring Boot API](https://github.com/Ajinkya7777/Leave-Management-Backend)

---

## 📦 Getting Started

### Prerequisites

- Node.js (v16 or above)
- npm or yarn

### Setup & Run

1. Clone the repository:

   ```bash
   git clone https://github.com/Ajinkya7777/ReactJs-Projects.git
   cd "35 leave-management-frontend"
   ````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment (if needed):

   Create a `.env` file in the root (optional):

   ```
   REACT_APP_API_BASE_URL=http://localhost:8080
   ```

4. Start the app:

   ```bash
   npm start
   ```

   App will run at: [http://localhost:3000](http://localhost:3000)

---

## 🔗 Related Projects

* **Backend (Spring Boot)**: [Leave-Management-Backend](https://github.com/Ajinkya7777/Leave-Management-Backend)

---

## 🚀 Future Improvements

* Password reset / forgot password flow
* Pagination and filtering in admin dashboard
* Toast notifications for better UX
* Docker support for full-stack deployment

---

## 🙋 About Me

I'm a Java Full Stack Developer with experience in React.js, Spring Boot, and RESTful APIs. This project was built to manage employee leave workflows with secure authentication and automation features.

* GitHub: [Ajinkya7777](https://github.com/Ajinkya7777)
* LinkedIn: www.linkedin.com/in/ajinkya-shinde-56a231228


