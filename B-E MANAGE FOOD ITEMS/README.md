# Food Menu Backend

A Node.js/Express backend API for the Food Menu Management System with MongoDB database.

## Features

- RESTful API for food items management
- Category-based filtering
- Sorting by Popular, Price, or Rating
- MongoDB database integration
- CORS enabled for frontend integration

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)

## Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/foodmenu
```

For MongoDB Atlas, use:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/foodmenu
```

## Running the Application

### Development Mode (with auto-reload):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

The server will run on `http://localhost:5000`

## Seeding the Database

To populate the database with sample food items:
```bash
npm run seed
```

## API Endpoints

### Health Check
- `GET /api/health` - Check server status

### Categories
- `GET /api/categories` - Get all available categories

### Food Items
- `GET /api/food-items` - Get all food items
  - Query params: `category` (optional), `sortBy` (optional: Popular, Price, Rating)
- `GET /api/food-items/:id` - Get a single food item by ID
- `POST /api/food-items` - Create a new food item
- `PUT /api/food-items/:id` - Update a food item
- `DELETE /api/food-items/:id` - Delete a food item

## Example API Calls

```bash
# Get all food items
curl http://localhost:5000/api/food-items

# Get items by category
curl http://localhost:5000/api/food-items?category=Snacks

# Get items sorted by rating
curl http://localhost:5000/api/food-items?sortBy=Rating

# Create a new food item
curl -X POST http://localhost:5000/api/food-items \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Burger",
    "category": "Meal",
    "price": "P50.00",
    "rating": 4.5,
    "description": "Delicious burger",
    "popular": true
  }'
```

## Project Structure

```
backend/
├── models/
│   └── FoodItem.js
├── routes/
│   ├── foodItems.js
│   └── categories.js
├── scripts/
│   └── seedData.js
├── server.js
├── package.json
└── .env
```

## Database Schema

### FoodItem
- `name` (String, required)
- `category` (String, enum: ['Snacks', 'Meal', 'Vegan', 'Dessert', 'Drinks'])
- `price` (String, required)
- `rating` (Number, 0-5)
- `image` (String)
- `description` (String)
- `popular` (Boolean)
- `createdAt` (Date)
- `updatedAt` (Date)

