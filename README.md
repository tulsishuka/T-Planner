# ✈️ VoyageAI

An AI-powered travel itinerary planner built with the MERN stack. Users can upload travel booking documents (PDFs or images), extract booking details using AI, and automatically generate a personalized travel itinerary.

<img width="1521" height="692" alt="Screenshot 2026-06-26 143057" src="https://github.com/user-attachments/assets/bfabbea6-707e-421d-a5cc-9db1174dc19a" />

<img width="1521" height="688" alt="Screenshot 2026-06-26 143212" src="https://github.com/user-attachments/assets/f1eb9875-20a4-4a9f-b881-80a5c2d5c48e" />



## 🚀 Live Demo

🌐 Live Application: https://t-planner-2-fro.onrender.com/

## 📂 GitHub Repository

🔗 https://github.com/tulsishuka/T-Planner

---

## ✨ Features

### 🔐 Authentication
- JWT-based Authentication
- User Registration
- Secure Login
- Protected Routes

### 📄 Travel Document Upload
- Upload Flight Tickets
- Upload Hotel Bookings
- Upload Travel Documents
- Supports PDF and Image files

### 🤖 AI-Powered Data Extraction
- Extracts important travel details from uploaded documents
- Uses Google Gemini AI for intelligent processing

### 🗺️ AI Itinerary Generation
- Automatically creates a structured travel itinerary
- Organizes travel information in an easy-to-read format

### 📚 Itinerary Management
- Stores generated itineraries in MongoDB
- View previous itinerary history
- User-specific saved itineraries

### 📤 Share Feature
- Share generated itineraries
- Easy access to travel plans

### 📱 Responsive Design
- Fully responsive UI
- Optimized for Desktop, Tablet, and Mobile

---

# 🛠️ Tech Stack

## Frontend

- React.js
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Axios
- React Hot Toast
- Lucide React

## Backend

- Node.js
- Express.js
- TypeScript
- JWT Authentication
- Multer
- PDF Parser
- Google Gemini AI

## Database

- MongoDB
- Mongoose

---

# 📁 Project Structure

```
T-Planner
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── src
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── utils
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/tulsishuka/T-Planner.git
```

Move into project

```bash
cd T-Planner
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file

```env
PORT=3000

MONGODB_URI=your_mongodb_connection

JWT_SECRET=your_secret

GEMINI_API_KEY=your_api_key
```

Run backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file

```env
VITE_API_URL=http://localhost:3000
```

Run frontend

```bash
npm run dev
```

---

# 📸 Screenshots

> Add screenshots of your application here.

- Home Page
- Login
- Register
- Upload Document
- AI Generated Itinerary
- History Page

---

# 🌟 Future Improvements

- Drag & Drop Upload
- AWS S3 Storage
- Email Sharing
- Calendar Integration
- Multi-language Support
- Dark Mode

---

# 👨‍💻 Author

**Tulasi Shukla**

- GitHub: https://github.com/tulsishuka
- LinkedIn: https://www.linkedin.com/in/tulsishukla/

---

# 📄 License

This project was developed as part of the **Junior Full Stack Developer (MERN + AI)** technical assignment.
