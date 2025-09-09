
````md
# ConnectLive

[ConnectLive Live Demo](https://connect-live-theta.vercel.app/)

ConnectLive is a real-time web application designed to enable seamless video and audio communication between users. Built using the MERN stack, this project demonstrates modern web technologies, including WebRTC for video streaming and Socket.io for real-time communication.

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Project Structure](#project-structure)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Features

- Real-time video and audio calls  
- Screen sharing functionality  
- User authentication and authorization  
- Responsive and user-friendly interface  
- Secure connection with JWT-based authentication  

---

## Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Real-time Communication:** Socket.io, WebRTC  
- **Deployment:** Vercel  

---

## Installation

1. **Clone the repository:**

```bash
git clone git@github.com:komal-kumawat/connectLive.git
````

2. **Navigate into the project folder:**

```bash
cd connectLive
```

3. **Install dependencies for frontend and backend:**

```bash
# For backend
cd backend
npm install

# For frontend
cd ../frontend
npm install
```

4. **Create a `.env` file** in the backend folder with the following variables:

```env
MONGO_URL=<Your MongoDB URI>
PORT=3000
JWT_SECRET=<Your Secret Key>
CLIENT_URL=https://connect-live-theta.vercel.app
```

---

## Usage

### Backend

```bash
cd backend
npm run dev
```

### Frontend

```bash
cd frontend
npm run dev
```

* Open your browser at `http://localhost:5173` (or the Vite dev server port) to access ConnectLive locally.

---

## Project Structure

```
connectLive/
├─ backend/
│  ├─ Controllers/
│  ├─ schema/
│  ├─ server.ts
│  └─ .env
├─ frontend/
│  ├─ src/
│  ├─ public/
│  └─ vite.config.ts
└─ README.md
```

---

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Make your changes
4. Commit your changes (`git commit -m "Description"`)
5. Push to the branch (`git push origin feature-name`)
6. Create a pull request

---

```
