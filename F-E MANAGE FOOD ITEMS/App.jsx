import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import CategoryBar from './components/CategoryBar'
import FoodList from './components/FoodList'
import BottomNav from './components/BottomNav'
import { getFoodItems, getCategories } from './services/api'
import './App.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Snacks')
  const [foodItems, setFoodItems] = useState([])
  const [categories, setCategories] = useState([])
  const [cartCount, setCartCount] = useState(8)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadData()
  }, [])

  useEffect(() => {
    loadFoodItems()
  }, [selectedCategory])

  const loadData = async () => {
    try {
      const [categoriesData, itemsData] = await Promise.all([
        getCategories(),
        getFoodItems(selectedCategory)
      ])
      setCategories(categoriesData)
      setFoodItems(itemsData)
    } catch (error) {
      console.error('Error loading data:', error)
    } finally {
      setLoading(false)
    }
  }

  const loadFoodItems = async () => {
    try {
      const items = await getFoodItems(selectedCategory)
      setFoodItems(items)
    } catch (error) {
      console.error('Error loading food items:', error)
    }
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  return (
    <div className="app">
      <Header cartCount={cartCount} />
      <CategoryBar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <FoodList
        foodItems={foodItems}
        loading={loading}
        category={selectedCategory}
      />
      <BottomNav />
    </div>
  )
}

export default App

