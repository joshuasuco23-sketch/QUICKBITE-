# Food Menu Frontend

A React.js frontend application for a food menu management system.

## Features

- Category-based food browsing (Snacks, Meal, Vegan, Dessert, Drinks)
- Food item display with images, ratings, and prices
- Search functionality
- Shopping cart integration
- Responsive mobile-first design
- Sort by Popular, Price, or Rating

## Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Building for Production

```bash
npm run build
```

## Environment Variables

Create a `.env` file in the frontend directory:
```
VITE_API_URL=http://localhost:5000/api
```

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── CategoryBar.jsx
│   │   ├── FoodList.jsx
│   │   └── BottomNav.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── index.html
```

