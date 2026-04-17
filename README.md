---
title: QuickGrocery - Smart Delivery AI
emoji: 🚀
colorFrom: green
colorTo: blue
sdk: docker
pinned: false
---

<div align="center">

# 🚀 QuickGrocery

### *"Freshness delivered to your doorstep in minutes."*
#### A modern, high-performance grocery e-commerce platform built with React and optimized for user-centric delivery logic.

[![React](https://img.shields.io/badge/React-2023%2B-61DAFB?logo=react&logoColor=white)](https://reactjs.org)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black)](https://javascript.com)
[![CSS3](https://img.shields.io/badge/CSS3-Bento--Box-1572B6?logo=css3&logoColor=white)](https://w3.org)
[![Inter](https://img.shields.io/badge/Typography-Inter%20%26%20DM%20Sans-000000)](https://fonts.google.com)
[![UI/UX](https://img.shields.io/badge/UI/UX-Modern%20Grocery-16A34A)](https://v0.dev)
[![Deployment](https://img.shields.io/badge/Status-Ready%20to%20Deploy-success)](https://github.com)
[![License](https://img.shields.io/badge/License-MIT-gray)](LICENSE)
[![Internship](https://img.shields.io/badge/UpskillCampus-Full--Stack%20Development-8A2BE2)](https://learn.upskillcampus.com)
[![GitHub](https://img.shields.io/badge/GitHub-QuickGrocery-181717?logo=github&logoColor=white)](https://github.com/pujakumari73567-ops/upskillcampus-Full-Stack-Development-)

</div>

---

## 🛒 The Problem

In a fast-paced world, **manual grocery shopping is time-consuming and inefficient.** Users often struggle with complex interfaces and slow delivery estimations.

**QuickGrocery** solves this by offering a "Bento-box" style clean interface, smart category filtering, and a predictive delivery slot system — making the shopping experience as fresh as the products.

---

## 🌟 What Makes This Research-Grade

| Feature | Why it matters |
|---|---|
| **Bento-box UI** | High visual clarity and organized product discoverability. |
| **Dynamic State** | Real-time cart updates and inventory tracking (useState/useEffect). |
| **Predictive Slots** | User-centric delivery scheduling (Today/Tomorrow slots). |
| **Responsive Grid** | Seamless experience from mobile screens to 4K desktops. |
| **Bento Aesthetics** | Rounded corners (`40px`) and subtle shadows for a premium feel. |
| **Referrer Security** | `no-referrer` policy for secure external image fetching. |

---

## 🎯 How It Works

User visits QuickGrocery
│
▼
Browses Catalog (Filtered by Category)
Fruits · Dairy · Bakery · Meat · Snacks · Beverages
│
▼
Smart Search Interaction
Real-time filtering as the user types.
│
▼
Cart Logic (Local Persistence)
Basket calculates subtotals + Delivery charges dynamic.
│
▼
Delivery Slot selection
[ Today: Express ]     [ Tomorrow: Standard ]
│
▼
Secure Checkout Process
UPI · Card · COD options with validation.
│
▼
Order Confirmation
Confetti animation + Order summary generation.

---

## ⚡ Quickstart & Installation

### 🐳 Running with Docker
```bash
# Build the image
docker build -t quickgrocery-app .

# Run the container
docker run -p 3000:3000 quickgrocery-app

# Install dependencies
npm install

# Start development server
npm start


QuickGrocery/
│
├── 📁 public/
│   ├── 📁 images/          # Local product assets (Banana, Apple, etc.)
│   └── 📄 index.html       # Entry point
│
├── 📁 src/
│   ├── 📄 App.js           # Core App logic & State Management
│   ├── 📄 index.css        # Bento-box styling & Animations
│   ├── 📁 components/      # Reusable UI (Card, Hero, Navbar)
│   └── 📄 data.js          # Product & Slot constants
│
├── 📄 package.json         # Dependency manifest
└── 📄 README.md            # This documentation


Tech Stack Spec
Framework: React 18+

Design: Custom CSS Grid (Mobile-First)

Architecture: Component-Based Architecture

Images: Unsplash API + Local optimized assets

Optimization: Smooth scale-down transitions (active:scale-95)

Phase,Status,Goal
1 — MVP,✅ Complete,"Static catalog, Cart logic, Payment UI"
2 — Backend,🔲 In Progress,Firebase Auth & Firestore data syncing
3 — Analytics,🔲 Planned,Admin Dashboard with sales charts (Recharts)
4 — Deployment,🔲 Planned,PWA support for offline shopping

## 👩‍💻 Developed By

* **Student Name:** Pooja Kumari
* **Institution:** Amity University, Noida
* **Mentored By:** upskill Campus & UniConverge Technologies Pvt Ltd (UCT).

