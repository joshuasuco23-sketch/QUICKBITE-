const mongoose = require('mongoose')
require('dotenv').config()

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/foodmenu'

console.log('Testing MongoDB connection...')
console.log('Connection string:', MONGODB_URI.replace(/:[^:@]+@/, ':****@')) // Hide password

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('✅ SUCCESS: Connected to MongoDB!')
    console.log('Database:', mongoose.connection.name)
    console.log('Host:', mongoose.connection.host)
    process.exit(0)
  })
  .catch((error) => {
    console.error('❌ ERROR: MongoDB connection failed!')
    console.error('Error details:', error.message)
    console.log('\nTroubleshooting tips:')
    console.log('1. Check your connection string in .env file')
    console.log('2. Make sure MongoDB Atlas IP whitelist includes 0.0.0.0/0')
    console.log('3. Verify username and password are correct')
    console.log('4. Check your internet connection')
    process.exit(1)
  })

