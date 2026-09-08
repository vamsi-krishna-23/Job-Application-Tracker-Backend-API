# 📋 Job Application Tracker Backend API

A simple REST API backend for managing and tracking job applications.

This project was built using **Node.js, Express.js, MongoDB, and Mongoose**. It provides APIs for user registration, login, creating job applications, updating applications, searching/filtering applications, and viewing application statistics.

---

## 🚀 Features

* 👤 User registration
* 🔐 User login with JWT
* 🔒 Password hashing using bcrypt
* 📝 Create job applications
* 📄 Get all job applications
* 🔍 Search applications
* 🏷️ Filter applications by status
* 💼 Filter applications by job type
* ✏️ Update applications
* 📊 View application statistics
* 🗄️ MongoDB database
* 🌐 REST API using Express.js

---

## 🛠️ Technologies Used

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **JWT**
* **bcrypt**
* **dotenv**
* **CORS**

---

## 📁 Project Structure

```text
Job-Application-Tracker-Backend-API/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── application.controller.js
│   └── auth.controller.js
│
├── models/
│   ├── application.model.js
│   └── user.model.js
│
├── routes/
│   ├── application.routes.js
│   └── auth.routes.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

### Folder Explanation

| Folder/File    | Purpose                                |
| -------------- | -------------------------------------- |
| `config/`      | MongoDB connection                     |
| `controllers/` | Contains application logic             |
| `models/`      | MongoDB/Mongoose schemas               |
| `routes/`      | API routes                             |
| `.env`         | Environment variables                  |
| `server.js`    | Main server file                       |
| `package.json` | Project dependencies and configuration |

---

# 📌 Requirements

Before running this project, install:

* [Node.js](https://nodejs.org/)
* npm
* MongoDB

You can use either a **local MongoDB installation** or **MongoDB Atlas**.

---

# 🔽 How to Clone the Project

Open your terminal and run:

```bash
git clone https://github.com/vamsi-krishna-23/Job-Application-Tracker-Backend-API.git
```

Then go inside the project:

```bash
cd Job-Application-Tracker-Backend-API
```

---

# 📦 Install Dependencies

Run:

```bash
npm install
```

This installs all the packages required by the project.

---

# 🔐 Create the `.env` File

The project needs some environment variables to connect to MongoDB and create JWT tokens.

Create a file named:

```text
.env
```

in the **root folder** of the project.

Your project should look like this:

```text
Job-Application-Tracker-Backend-API/
│
├── config/
├── controllers/
├── models/
├── routes/
├── .env
├── package.json
└── server.js
```

---

## ✏️ Add Environment Variables

Open `.env` and add:

```env
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/job_application_tracker

JWT_SECRET=my_secret_key
```

### What do these mean?

| Variable     | Meaning                                |
| ------------ | -------------------------------------- |
| `PORT`       | Port where the server runs             |
| `MONGO_URI`  | MongoDB database connection            |
| `JWT_SECRET` | Secret key used for JWT authentication |

---

# 🗄️ MongoDB Setup

## Using Local MongoDB

If MongoDB is installed on your computer, use:

```env
MONGO_URI=mongodb://127.0.0.1:27017/job_application_tracker
```

Make sure MongoDB is running before starting the server.

---

## Using MongoDB Atlas

If you use MongoDB Atlas, replace `MONGO_URI` with your Atlas connection string.

For example:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/job_application_tracker
```

Replace the username, password, and cluster information with your own details.

### ⚠️ Important

Never upload your `.env` file to GitHub.

Your `.gitignore` should contain:

```gitignore
node_modules/
.env
```

---

# ▶️ Run the Project

After setting up MongoDB and `.env`, run:

```bash
node server.js
```

If everything is working correctly, the server will start on:

```text
http://localhost:5000
```

You should see a message similar to:

```text
MongoDB Connected
Server running on port 5000
```

---

# 🧪 Test the API

You can test the API using:

* Postman
* Thunder Client
* Insomnia
* cURL

I recommend **Postman** if you're learning backend development.

---

# 🔑 Authentication APIs

## 1. Register User

### Request

```http
POST /api/auth/signup
```

### URL

```text
http://localhost:5000/api/auth/signup
```

### Body

Select **Body → raw → JSON** in Postman:

```json
{
  "fullname": "John Doe",
  "email": "john@example.com",
  "role": "user",
  "password": "password123"
}
```

Available roles:

```text
user
hr
admin
```

---

# 🔓 Login

### Request

```http
POST /api/auth/login
```

### URL

```text
http://localhost:5000/api/auth/login
```

### Body

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

After successful login, the API returns a JWT token.

---

# 💼 Job Application APIs

Base URL:

```text
http://localhost:5000/api/applications
```

---

## 1. Create Application

### Request

```http
POST /api/applications/createapplication
```

### Body

```json
{
  "companyName": "Google",
  "jobTitle": "Software Engineer",
  "location": "Bangalore",
  "jobType": "Full Time",
  "jobUrl": "https://example.com/job",
  "appliedDate": "2026-09-08",
  "salary": "15 LPA",
  "status": "Applied",
  "notes": "Applied through company website"
}
```

Required fields include:

```text
companyName
jobTitle
appliedDate
status
```

---

# 📄 Get All Applications

### Request

```http
GET /api/applications/getallapplications
```

### URL

```text
http://localhost:5000/api/applications/getallapplications
```

This returns all job applications stored in the database.

---

# 🔍 Search Applications

You can search by company name or job title.

Example:

```http
GET /api/applications/getallapplications?search=Google
```

---

# 🏷️ Filter by Status

Example:

```http
GET /api/applications/getallapplications?status=Interview
```

Available statuses:

```text
Saved
Applied
Screening
Interview
Offer
Rejected
Withdrawn
```

---

# 💻 Filter by Job Type

Example:

```http
GET /api/applications/getallapplications?jobType=Internship
```

Available job types:

```text
Full Time
Part Time
Internship
Contract
Freelance
```

---

# 🔎 Search + Filter

You can also combine filters.

Example:

```http
GET /api/applications/getallapplications?search=Software&status=Interview
```

---

# 📌 Get Application by ID

### Request

```http
GET /api/applications/:id
```

Example:

```text
http://localhost:5000/api/applications/64f123456789abcdef123456
```

Replace the ID with the actual MongoDB application ID.

---

# ✏️ Update Application

### Request

```http
PUT /api/applications/:id
```

Example:

```text
http://localhost:5000/api/applications/64f123456789abcdef123456
```

### Body

```json
{
  "status": "Interview",
  "notes": "Technical interview scheduled"
}
```

---

# 📊 Application Statistics

### Request

```http
GET /api/applications/count
```

### URL

```text
http://localhost:5000/api/applications/count
```

This gives the number of applications in different stages.

Example:

```json
{
  "message": "Count fetched Successfully",
  "total": 10,
  "applied": 4,
  "saved": 2,
  "screening": 1,
  "interview": 1,
  "offer": 1,
  "rejected": 1,
  "withdrawn": 0
}
```

---

# 📚 API Summary

| Method | Endpoint                                        | Purpose                    |
| ------ | ----------------------------------------------- | -------------------------- |
| `GET`  | `/`                                             | Check if server is running |
| `POST` | `/api/auth/signup`                              | Register user              |
| `POST` | `/api/auth/login`                               | Login                      |
| `POST` | `/api/applications/createapplication`           | Create application         |
| `GET`  | `/api/applications/getallapplications`          | Get applications           |
| `GET`  | `/api/applications/getallapplications?search=`  | Search                     |
| `GET`  | `/api/applications/getallapplications?status=`  | Filter by status           |
| `GET`  | `/api/applications/getallapplications?jobType=` | Filter by job type         |
| `GET`  | `/api/applications/:id`                         | Get one application        |
| `PUT`  | `/api/applications/:id`                         | Update application         |
| `GET`  | `/api/applications/count`                       | Application statistics     |

---

# 🔄 How the Project Works

The basic flow is:

```text
User
  │
  ▼
Postman / Frontend
  │
  ▼
Express.js Routes
  │
  ▼
Controllers
  │
  ▼
Mongoose Models
  │
  ▼
MongoDB
```

For authentication:

```text
User
  │
  ▼
Signup / Login
  │
  ▼
bcrypt Password Hashing
  │
  ▼
MongoDB
  │
  ▼
JWT Token
```

---

# 🔒 Security

This project uses:

### bcrypt

Passwords are hashed before being stored in MongoDB.

### JWT

JSON Web Tokens are generated after successful login.

### dotenv

Sensitive configuration is stored in `.env`.

For example:

```env
MONGO_URI=your_database_url
JWT_SECRET=your_secret_key
```

Do not share these values publicly.

---

# ⚠️ Current Limitations

This is a student project and there are some areas that can be improved.

### Authentication Middleware

The project generates JWT tokens during login, but the current application routes are not fully protected by JWT middleware.

### Delete Application

A delete controller exists, but the current routes do not expose a working delete endpoint, and the controller contains an incorrect model reference.

### Testing

Automated tests have not been added yet.

These can be improved in future versions.

---

# 🚀 Future Improvements

Some ideas for improving this project:

* 🔐 Add authentication middleware
* 👮 Add role-based authorization
* 🗑️ Add a working delete application API
* ✅ Add request validation
* 🧪 Add automated tests
* 📄 Add Swagger API documentation
* 📑 Add pagination
* 🔎 Improve search and filtering
* 📊 Add more analytics
* 📅 Add interview scheduling
* 🔔 Add application reminders
* 🐳 Add Docker support
* ☁️ Deploy the API online

---

# 🧑‍💻 Learning Outcomes

By building this project, you can learn:

* How Node.js works
* How to create an Express server
* How REST APIs work
* How to connect Node.js with MongoDB
* How Mongoose models work
* How authentication works
* How JWT works
* How passwords are hashed
* How to use environment variables
* How to structure a backend project
* How to test APIs using Postman

---

# 🤝 Contributing

If you want to improve this project:

1. Fork the repository
2. Clone your fork
3. Create a new branch
4. Make your changes
5. Commit your changes
6. Push the branch
7. Create a Pull Request

Example:

```bash
git clone <your-fork-url>

cd Job-Application-Tracker-Backend-API

git checkout -b feature/new-feature

git add .

git commit -m "Add new feature"

git push origin feature/new-feature
```

---

# ⭐ Support

If you found this project useful, consider giving the repository a ⭐ on GitHub.

If you find a bug or have an idea for improvement, feel free to create an issue.

---

## 👨‍💻 Author

**Vamsi Krishna**

GitHub:
https://github.com/vamsi-krishna-23

Project Repository:
https://github.com/vamsi-krishna-23/Job-Application-Tracker-Backend-API

---

## 📄 License

This project is created for learning and educational purposes.
