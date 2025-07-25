# 🔐 MERN Authentication System with Email Verification

A full-stack authentication system built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring secure user registration, login, and email verification functionality.

## 🌟 Features

- **User Registration & Login**: Secure user authentication with JWT tokens
- **Email Verification**: Email confirmation system for new user accounts
- **Password Security**: Bcrypt password hashing and validation
- **Protected Routes**: Frontend and backend route protection
- **Responsive Design**: Mobile-friendly user interface
- **Error Handling**: Comprehensive error handling and user feedback
- **Session Management**: Secure token-based session handling
- **Password Reset**: Forgot password functionality with email recovery

## 🚀 Demo

Check out the live demo: [Demo Video](https://www.linkedin.com/posts/monish-mondal-web_mernstack-reactjs-nodejs-activity-7331724290439974913-aLl2)

## 🛠️ Tech Stack

**Frontend:**
- React.js
- React Router DOM
- Axios
- CSS3/Styled Components
- React Context API

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT (JSON Web Tokens)
- Bcrypt.js
- Nodemailer

**Additional Tools:**
- Dotenv for environment variables
- CORS for cross-origin requests
- Validator for input validation

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn package manager
- Email service credentials (Gmail, SendGrid, etc.)

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mern-auth-project.git
   cd mern-auth-project
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Variables**
   
   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/mern-auth
   JWT_SECRET=your_jwt_secret_key
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_password
   CLIENT_URL=http://localhost:3000
   ```

5. **Start the Application**
   
   Backend (Terminal 1):
   ```bash
   cd backend
   npm start
   ```
   
   Frontend (Terminal 2):
   ```bash
   cd frontend
   npm start
   ```

## 📁 Project Structure

```
mern-auth-project/
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   └── userController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── validation.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── users.js
│   ├── utils/
│   │   ├── sendEmail.js
│   │   └── generateToken.js
│   ├── config/
│   │   └── db.js
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Auth/
│   │   │   ├── Dashboard/
│   │   │   └── Common/
│   │   ├── context/
│   │   │   └── AuthContext.js
│   │   ├── pages/
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── Dashboard.js
│   │   │   └── VerifyEmail.js
│   │   ├── utils/
│   │   │   └── api.js
│   │   └── App.js
│   └── public/
└── README.md
```

## 🔑 API Endpoints

### Authentication Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | User login |
| POST | `/api/auth/verify-email` | Verify email address |
| POST | `/api/auth/forgot-password` | Send password reset email |
| POST | `/api/auth/reset-password` | Reset password |
| GET | `/api/auth/profile` | Get user profile (protected) |

### User Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users/profile` | Get current user profile |
| PUT | `/api/users/profile` | Update user profile |
| DELETE | `/api/users/account` | Delete user account |

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: Bcrypt for password security
- **Email Verification**: Prevents fake account creation
- **Input Validation**: Server-side validation for all inputs
- **CORS Protection**: Configured for secure cross-origin requests
- **Environment Variables**: Sensitive data protection

## 🎨 UI Components

- **Login Form**: User authentication interface
- **Registration Form**: New user signup with validation
- **Dashboard**: Protected user dashboard
- **Email Verification**: Email confirmation interface
- **Password Reset**: Forgot password flow
- **Loading States**: User feedback during API calls
- **Error Messages**: Clear error handling and display

## 📧 Email Configuration

The project uses Nodemailer for sending verification emails. Configure your email service in the `.env` file:

**For Gmail:**
```env
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_app_password
```

**For SendGrid:**
```env
SENDGRID_API_KEY=your_sendgrid_api_key
```

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile devices
- Various screen sizes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

**Monish Mondal**
- LinkedIn: [Monish Mondal](https://www.linkedin.com/in/monish-mondal-web/)
- GitHub: [Monish Mondal](https://github.com/monish-mondal-web/)

## 🙏 Acknowledgments

- MongoDB for the database solution
- Express.js for the web framework
- React.js for the frontend library
- Node.js for the runtime environment
- JWT for secure authentication
- Nodemailer for email functionality
---

⭐ **Star this repository if you found it helpful!** ⭐
