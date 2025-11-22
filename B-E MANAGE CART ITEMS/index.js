const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "quickbite_db"
});

db.connect(err => {
    if (err) throw err;
    console.log("MySQL Connected!");
});

app.get('/cart', (req, res) => {
    db.query("SELECT * FROM cart", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

app.post('/cart', (req, res) => {
    const { name, description, price } = req.body;
    db.query(
        "INSERT INTO cart (name, description, price) VALUES (?, ?, ?)",
        [name, description, price],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ id: result.insertId, name, description, price });
        }
    );
});

app.put('/cart/:id', (req, res) => {
    const id = req.params.id;
    const { name, description, price } = req.body;
    db.query(
        "UPDATE cart SET name=?, description=?, price=? WHERE id=?",
        [name, description, price, id],
        err => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ success: true });
        }
    );
});

app.delete('/cart/:id', (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM cart WHERE id=?", [id], err => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ success: true });
    });
});

const PORT = 4000;
app.listen(PORT, () => console.log("MySQL backend running on port " + PORT));
