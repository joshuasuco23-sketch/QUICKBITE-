import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const getCategories = async () => {
  try {
    const response = await api.get('/categories')
    return response.data
  } catch (error) {
    console.error('Error fetching categories:', error)
    return ['Snacks', 'Meal', 'Vegan', 'Dessert', 'Drinks']
  }
}

export const getFoodItems = async (category = 'all') => {
  try {
    const response = await api.get(`/food-items?category=${category}`)
    return response.data
  } catch (error) {
    console.error('Error fetching food items:', error)
    return []
  }
}

export const getFoodItemById = async (id) => {
  try {
    const response = await api.get(`/food-items/${id}`)
    return response.data
  } catch (error) {
    console.error('Error fetching food item:', error)
    return null
  }
}

export default api

