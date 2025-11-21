const mongoose = require('mongoose')
require('dotenv').config()
const FoodItem = require('../models/FoodItem')

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/foodmenu'

const sampleFoodItems = [
  // Snacks
  {
    name: 'Hotdog With Bun',
    category: 'Snacks',
    price: 'P25.00',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400',
    description: 'Classic hotdog served in a soft bun with your choice of toppings',
    popular: true
  },
  {
    name: 'Bread',
    category: 'Snacks',
    price: 'P10.00',
    rating: 4.0,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400',
    description: 'Freshly baked bread, perfect for any meal',
    popular: false
  },
  // Meals
  {
    name: 'Longganisa With Rice Egg',
    category: 'Meal',
    price: '$15.00',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=400',
    description: 'Traditional Filipino longganisa served with fried egg and steamed rice',
    popular: true
  },
  {
    name: 'CORNSILOG',
    category: 'Meal',
    price: 'P60.00',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=400',
    description: 'Corned beef with sinangag (garlic rice) and itlog (fried egg)',
    popular: true
  },
  // Vegan
  {
    name: 'Ampalaya',
    category: 'Vegan',
    price: 'P30.00',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400',
    description: 'Bitter melon stir-fried with eggs, a healthy and nutritious dish',
    popular: true
  },
  {
    name: 'PINAKBET',
    category: 'Vegan',
    price: 'P30.00',
    rating: 4.0,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400',
    description: 'Traditional Filipino vegetable stew with okra, bitter melon, squash, and green beans',
    popular: false
  },
  // Desserts
  {
    name: 'Chocolate Brownie',
    category: 'Dessert',
    price: 'P15.00',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400',
    description: 'Rich and fudgy chocolate brownie topped with nuts',
    popular: true
  },
  {
    name: 'Pancake',
    category: 'Dessert',
    price: 'P12.00',
    rating: 4.0,
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400',
    description: 'Fluffy pancakes with your choice of filling',
    popular: false
  },
  // Drinks
  {
    name: 'Fresh Orange Juice',
    category: 'Drinks',
    price: 'P20.00',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400',
    description: 'Freshly squeezed orange juice',
    popular: true
  },
  {
    name: 'Iced Coffee',
    category: 'Drinks',
    price: 'P25.00',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400',
    description: 'Cold brewed coffee served over ice',
    popular: true
  }
]

async function seedDatabase() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Connected to MongoDB')

    // Clear existing data
    await FoodItem.deleteMany({})
    console.log('Cleared existing food items')

    // Insert sample data
    await FoodItem.insertMany(sampleFoodItems)
    console.log('Sample food items inserted successfully')

    // Display inserted items
    const count = await FoodItem.countDocuments()
    console.log(`Total food items in database: ${count}`)

    process.exit(0)
  } catch (error) {
    console.error('Error seeding database:', error)
    process.exit(1)
  }
}

seedDatabase()

