
🌐 Live Demo: netflix-gemini-theta.vercel.app

# 🎬 Netflix-Gemini  

> A Next-Gen Netflix Clone Powered by Gemini AI  

> Built by [VINAYAK777CODER](https://github.com/VINAYAK777CODER)

---

## 🌟 Overview

**Netflix-Gemini** is a fully responsive React.js application that replicates Netflix-like features while integrating **AI-powered movie search and recommendations** using **Google's Gemini API**.

The project showcases advanced frontend skills using **React**, **Redux Toolkit**, **Tailwind CSS**, **Firebase Authentication**, and **TMDB Movie API**, combined with a smooth AI-based user experience.

---

## 🚀 Live Features

- ⚛️ **Modern React.js architecture**
- 🎨 **Styled with Tailwind CSS**
- 🔐 **Firebase Authentication**
  - Sign Up / Sign In / Sign Out
  - Auto-login session detection
- 🧠 **Gemini API Integration**
  - Smart movie recommendations
  - AI-powered search bar
- 📽️ **TMDB API Integration**
  - Now Playing & Popular Movies
  - YouTube Trailer Embeds
- 🔄 **Redux Toolkit**
  - Manage user and movie states
- 🌐 **Multi-language Support**
- 📱 **Fully Responsive Design** for all devices

---

## 🧱 Tech Stack

| Frontend      | State Management | Authentication | APIs Used            | AI Integration |
|---------------|------------------|-----------------|----------------------|----------------|
| React.js      | Redux Toolkit    | Firebase Auth   | TMDB, YouTube Embed  | Gemini API     |
| Tailwind CSS  | React Router DOM |                 |                      |                |

---

## 📁 Project Structure Highlights

### 🔐 Authentication
- Firebase Sign-Up / Sign-In
- Real-time auth detection using `onAuthStateChanged`
- Protected routes with automatic redirection

### 🎞️ Movie Display (Browse Page)
- Dynamic banner for Now Playing Movies
- Auto-playing YouTube trailers
- Horizontal carousels for movie lists
- TMDB Image CDN integration for Movie Cards

### 🤖 Netflix Gemini (AI Movie Search)
- AI suggestions using Gemini API
- Smart search results from user prompts
- Fully styled, responsive search interface

### 🌍 Language Support
- Multi-language dropdown in header
- Extendable content translation system

---

## 📌 Key Features Implemented

- ✅ Firebase setup and configuration  
- ✅ Form validation using `useRef`  
- ✅ Redux store with `userSlice` & `movieSlice`  
- ✅ TMDB API token integration  
- ✅ Embedded YouTube trailer support  
- ✅ Gemini API integration for AI recommendations  
- ✅ Protected routing with auto-redirect  
- ✅ Constants file for better management  
- ✅ Cleanup: event unsubscription and optimizations

---

## 🧠 Learning Goals Achieved

- Clean, scalable React architecture  
- Practical usage of Firebase Authentication  
- Working with external APIs (TMDB, Gemini)  
- Responsive UI with Tailwind CSS  
- State management with Redux  
- Real-world AI feature integration using Gemini

---

## ⚙️ Installation & Setup

```bash
git clone https://github.com/VINAYAK777CODER/netflix-gemini.git
cd netflix-gemini
npm install

- Configure Firebase in /utils/firebase.js

- Set TMDB API Key and constants in /utils/constants.js

- Add Gemini API credentials as needed

npm start
