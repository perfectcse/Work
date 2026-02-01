# Work
A full-stack web application that allows startups to browse, claim, and track startup benefits.
Built using Next.js (App Router) on the frontend and Node.js + Express + MongoDB on the backend with JWT authentication.

📌 Features
🔐 Authentication
User Registration
User Login
JWT-based authentication
Protected dashboard routes

🏷️ Startup Deals
View all available startup deals
View single deal details
Locked & unlocked deals support
Eligibility information per deal

🧾 Claims System

Authenticated users can claim deals

Claim status tracking (pending, approved)

User dashboard shows claimed deals

Duplicate claims prevented

📊 Dashboard

Protected dashboard (login required)

Displays claimed deals

Shows claim status clearly

🧱 Tech Stack
Frontend
Next.js 16 (App Router)
React
TypeScript
Tailwind CSS
Framer Motion
Backend
Node.js
Express.js
MongoDB + Mongoose
JWT Authentication
bcrypt (password hashing)

🔐 Authentication Flow
User registers / logs in
Backend returns JWT token
Token stored in localStorage
Token sent via Authorization: Bearer <token>
Protected routes validated via middleware