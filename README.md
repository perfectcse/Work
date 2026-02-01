Startup Benefits Platform – Full Stack Assignment

A full-stack application that allows startups to explore SaaS deals, claim eligible benefits, and track claim status.

Tech Stack
Frontend
Next.js (App Router)
TypeScript
Tailwind CSS
Framer Motion
................
Backend
Node.js
Express.js
MongoDB (Mongoose)
JWT Authentication
...................
Core Application Flow
User registers or logs in
User browses available deals
Locked deals require authentication
User claims a deal
Claimed deals appear in dashboard with status tracking
...................................................
Frontend Implementation
Landing Page (animated hero + CTA)
Deals Listing Page (search, filter, locked/unlocked)
Deal Details Page
User Dashboard (protected)
Login & Register pages
..............................
UI & Animation
Page transitions
Hover and micro-interactions
Loading and empty states
Smooth layout transitions
.....................
Backend Implementation
Core Entities
User
Deal
Claim
........................
API Responsibilities
User registration & login
Fetch all deals
Fetch single deal
Claim a deal (JWT protected)
Fetch claimed deals for a user
..................
Security
JWT-based authentication
Protected routes using middleware
Locked deals cannot be claimed without authentication