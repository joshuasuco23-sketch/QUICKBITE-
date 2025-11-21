const express = require('express')
const router = express.Router()
const FoodItem = require('../models/FoodItem')

// Get all categories
router.get('/', async (req, res) => {
  try {
    const categories = await FoodItem.distinct('category')
    // Ensure all categories are present
    const allCategories = ['Snacks', 'Meal', 'Vegan', 'Dessert', 'Drinks']
    const existingCategories = categories.filter(cat => allCategories.includes(cat))
    const missingCategories = allCategories.filter(cat => !existingCategories.includes(cat))
    
    res.json([...existingCategories, ...missingCategories].sort())
  } catch (error) {
    // Return default categories if database error
    res.json(['Snacks', 'Meal', 'Vegan', 'Dessert', 'Drinks'])
  }
})

module.exports = router

