const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const dbFile = path.join(__dirname, 'users.db');
const db = new sqlite3.Database(dbFile);

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fullName TEXT,
    email TEXT UNIQUE,
    password TEXT,
    mobile TEXT,
    dob TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
});

app.post('/api/register', async (req, res) => {
  try {
    const { fullName, email, password, mobile, dob } = req.body;
    if (!email || !password) return res.json({ success: false, message: 'Email and password required' });
    const hashed = await bcrypt.hash(password, 10);
    const stmt = db.prepare('INSERT INTO users (fullName, email, password, mobile, dob) VALUES (?,?,?,?,?)');
    stmt.run(fullName, email, hashed, mobile, dob, function(err) {
      if (err) {
        if (err.message && err.message.includes('UNIQUE')) {
          return res.json({ success: false, message: 'Email already registered' });
        }
        return res.status(500).json({ success: false, message: err.message });
      }
      return res.json({ success: true, userId: this.lastID });
    });
    stmt.finalize();
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.json({ success: false, message: 'Email and password required' });
  db.get('SELECT * FROM users WHERE email = ?', [email], async (err, row) => {
    if (err) return res.status(500).json({ success:false, message: err.message });
    if (!row) return res.json({ success:false, message: 'User not found' });
    const ok = await bcrypt.compare(password, row.password);
    if (!ok) return res.json({ success:false, message: 'Invalid credentials' });
    // NOTE: no real session or token here — for demo only
    return res.json({ success:true, user: { id: row.id, fullName: row.fullName, email: row.email }});
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log('Server running on', PORT));
