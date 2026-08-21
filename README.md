# 🎬 NetReview (React + TMDB API)

A responsive Netflix alike UI built with React.js, Tailwind CSS, and Axios. This application fetches real-time movie and TV show data from the TMDB API, allows users to watch trailers, view detailed movie information, and manage a personal watchlist stored in `localStorage`.

---

## ✨ Features

- **Hero Banner:** Displays a featured trending movie/show with its overview and quick action buttons.
- **Categorized Movie Rows:** Browse movies across multiple genres (Trending, Action, Comedy, Horror, Romance, Documentaries).
- **Movie Trailers:** Integrated YouTube trailer playback on movie card click using `react-youtube`.
- **View Details Page:** Detailed movie page showcasing runtime, release date, ratings, budget, revenue, and production details.
- **My List (Watchlist):** Add or remove movies from a personal list saved locally in `localStorage` without duplicates.
- **Search Functionality:** Filter and search movies by query.

---

## 🛠️ Tech Stack

- **Frontend:** React.js, React Router DOM (v6)
- **Styling:** Tailwind CSS, CSS
- **API:** TMDB (The Movie Database) via Axios
- **State & Storage:** React Hooks (`useState`, `useEffect`), Browser `localStorage`
- **Icons & Media:** `react-icons`, `react-youtube`

---

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your machine.

- [Node.js](https://nodejs.org/) (v14+ recommended)

