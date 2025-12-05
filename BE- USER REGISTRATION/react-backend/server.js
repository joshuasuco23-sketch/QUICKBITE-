const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Mock database
let users = [];

// Sign-up route
app.post('/api/signup', (req, res) => {
  const { fullName, password, email, mobile, birthDate } = req.body;

  if (!fullName || !password || !email || !mobile || !birthDate) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const exists = users.find((u) => u.email === email);
  if (exists) return res.status(409).json({ message: 'Email already exists' });

  users.push({ fullName, password, email, mobile, birthDate });
  return res.status(201).json({ message: 'Account created successfully!' });
});

// Default route
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
