# IAM - Identity and Access Management System

A comprehensive Node.js-based Identity and Access Management system for user role management, authentication, and authorization.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Overview

This IAM system provides a robust solution for managing user identities, roles, permissions, and access control in web applications. It includes features for user management, role-based access control (RBAC), and comprehensive administrative panels.

## ✨ Features

- **User Management**: Complete CRUD operations for user accounts
- **Role-Based Access Control (RBAC)**: Hierarchical role and permission system
- **Authentication**: JWT-based authentication with session management
- **OAuth Integration**: Google OAuth 2.0 support
- **Administrative Panels**: Multiple specialized admin interfaces
- **Analytics & Reporting**: Built-in analytics and reporting capabilities
- **RESTful API**: Well-structured REST API endpoints
- **Security**: bcrypt password hashing, cookie parsing, and secure sessions

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT, Passport.js, Google OAuth 2.0
- **Security**: bcrypt, express-session, cookie-parser
- **Development**: Nodemon for hot reloading
- **Logging**: Morgan for HTTP request logging
- **Data Export**: fast-csv for CSV operations
- **Analytics**: WebDataRocks for data visualization

## 📁 Project Structure

```
IAM/
├── config/               # Database and configuration files
├── controller/           # Request handlers and business logic
│   ├── pages/           # Page-specific controllers
│   ├── pagesController.js
│   └── userController.js
├── enums/               # System enumerations
│   └── systemRole.js
├── middlewares/         # Custom middleware functions
├── model/               # MongoDB models and schemas
│   ├── schemas/         # Mongoose schemas
│   ├── groupModel.js
│   ├── roleModel.js
│   └── userModel.js
├── Router/              # API routes
│   ├── pages/          # Page-specific routes
│   ├── index.js
│   └── userRouter.js
├── utils/               # Utility functions
├── server.js           # Main application entry point
├── package.json        # Project dependencies and scripts
└── .env               # Environment variables
```

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/MostafaSafwatIS21/IAM.git
   cd IAM
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:

   ```env
   # Database
   MONGODB_URI=mongodb://localhost:27017/iam

   # JWT
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRES_IN=7d

   # Google OAuth
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret

   # Server
   PORT=3000
   NODE_ENV=development

   # Session
   SESSION_SECRET=your_session_secret
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **For production**
   ```bash
   npm run prod
   ```

## 🎯 Usage

### Development Server

The server will start on `http://localhost:3000` (or your specified PORT).

### Test Endpoint

Visit `http://localhost:3000/test` to verify the server is running.

### API Base URL

All API endpoints are prefixed with `/api/v1/app`

## 🔗 API Endpoints

### Authentication & Users

- `GET /api/v1/app/users` - Get all users
- `POST /api/v1/app/users` - Create new user
- `PUT /api/v1/app/users/:id` - Update user
- `DELETE /api/v1/app/users/:id` - Delete user

### Administrative Pages

- `GET /api/v1/app/pages/admin-panel` - Admin panel operations
- `GET /api/v1/app/pages/analytics` - Analytics dashboard
- `GET /api/v1/app/pages/dashboard` - Main dashboard
- `GET /api/v1/app/pages/documentation` - Documentation management
- `GET /api/v1/app/pages/feedback` - Feedback system
- `GET /api/v1/app/pages/help` - Help and support
- `GET /api/v1/app/pages/notifications` - Notification management
- `GET /api/v1/app/pages/profile` - User profile management
- `GET /api/v1/app/pages/reports` - Reporting system
- `GET /api/v1/app/pages/settings` - System settings
- `GET /api/v1/app/pages/support` - Support ticketing

Each page endpoint supports GET, POST, PUT, and DELETE operations for complete CRUD functionality.

## 🔧 Environment Variables

| Variable               | Description                          | Required |
| ---------------------- | ------------------------------------ | -------- |
| `MONGODB_URI`          | MongoDB connection string            | Yes      |
| `JWT_SECRET`           | Secret key for JWT tokens            | Yes      |
| `JWT_EXPIRES_IN`       | JWT token expiration time            | No       |
| `GOOGLE_CLIENT_ID`     | Google OAuth client ID               | Yes      |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret           | Yes      |
| `PORT`                 | Server port number                   | No       |
| `NODE_ENV`             | Environment (development/production) | No       |
| `SESSION_SECRET`       | Secret for session management        | Yes      |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mostafa Safwat**

- GitHub: [@MostafaSafwatIS21](https://github.com/MostafaSafwatIS21)

## 🆘 Support

If you encounter any issues or have questions, please feel free to:

- Open an issue on GitHub
- Contact the author directly

---

**Note**: Make sure to keep your `.env` file secure and never commit it to version control. The `.gitignore` file is already configured to exclude sensitive files.
