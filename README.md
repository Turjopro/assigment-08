# 📚 BookNest — Online Book Borrowing Platform

BookNest is a modern, full-stack web application that digitizes the traditional library experience. Users can explore a curated collection of books, filter by category, and borrow titles digitally — all through a clean, responsive interface.

## 🔗 Live URL

[https://your-live-url.vercel.app](https://your-live-url.vercel.app)

## ✨ Key Features

- 🔐 **Authentication** — Register/Login with Email & Password, plus Google Social Login (powered by BetterAuth)
- 🏠 **Home Page** — Hero banner, scrolling marquee, featured books, and category highlights
- 📖 **All Books Page** — Search books by title and filter by category (Story, Tech, Science) via sidebar
- 📘 **Book Details Page** *(Private Route)* — Full book information with a "Borrow This Book" action
- 👤 **My Profile Page** *(Private Route)* — View account info and update name/photo
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- 🎨 **Custom UI** — Built with Tailwind CSS and DaisyUI for a clean, modern look
- ✨ **Animations** — Smooth fade-in effects using Animate.css

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS, DaisyUI
- **Authentication:** BetterAuth (Email/Password + Google OAuth)
- **Database:** MongoDB Atlas
- **Deployment:** Vercel

## 📦 NPM Packages Used

- `next` — React framework
- `better-auth` — Authentication library
- `mongodb` — MongoDB driver
- `daisyui` — Tailwind CSS component library
- `animate.css` — CSS animation library

## 📁 Main Pages

| Route | Description |
|---|---|
| `/` | Home page with banner, featured books |
| `/all-books` | Browse and search all books |
| `/books/[id]` | Book details (Private) |
| `/login` | Login page |
| `/register` | Registration page |
| `/profile` | User profile (Private) |
| `/profile/update` | Update profile info (Private) |

## 🚀 Getting Started (Local Development)

\`\`\`bash
# Install dependencies
npm install

# Set up environment variables in .env.local
# (MONGODB_URI, BETTER_AUTH_SECRET, BETTER_AUTH_URL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET)

# Run development server
npm run dev
\`\`\`

## 👨‍💻 Author

Md. Tatrim Tafsir Turjo