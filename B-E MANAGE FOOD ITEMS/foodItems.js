const express = require('express')
const router = express.Router()
const FoodItem = require('../models/FoodItem')

// Get all food items or filter by category
router.get('/', async (req, res) => {
  try {
    const { category, sortBy } = req.query
    let query = {}

    if (category && category !== 'all') {
      query.category = category
    }

    let sortOptions = {}
    if (sortBy === 'Popular') {
      sortOptions = { popular: -1, rating: -1 }
    } else if (sortBy === 'Price') {
      sortOptions = { price: 1 }
    } else if (sortBy === 'Rating') {
      sortOptions = { rating: -1 }
    } else {
      sortOptions = { popular: -1, rating: -1 }
    }

    const foodItems = await FoodItem.find(query).sort(sortOptions)
    res.json(foodItems)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Get a single food item by ID
router.get('/:id', async (req, res) => {
  try {
    const foodItem = await FoodItem.findById(req.params.id)
    if (!foodItem) {
      return res.status(404).json({ error: 'Food item not found' })
    }
    res.json(foodItem)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Create a new food item
router.post('/', async (req, res) => {
  try {
    const foodItem = new FoodItem(req.body)
    await foodItem.save()
    res.status(201).json(foodItem)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// Update a food item
router.put('/:id', async (req, res) => {
  try {
    const foodItem = await FoodItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )
    if (!foodItem) {
      return res.status(404).json({ error: 'Food item not found' })
    }
    res.json(foodItem)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// Delete a food item
router.delete('/:id', async (req, res) => {
  try {
    const foodItem = await FoodItem.findByIdAndDelete(req.params.id)
    if (!foodItem) {
      return res.status(404).json({ error: 'Food item not found' })
    }
    res.json({ message: 'Food item deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router

