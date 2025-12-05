const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const { categories, items } = require("./data");

// Get all categories
app.get("/api/categories", (req, res) => {
  res.json(categories);
});

// Get items by category
app.get("/api/items/:category", (req, res) => {
  const cat = req.params.category;
  if (!items[cat]) {
    return res.status(404).json({ message: "Category not found" });
  }
  res.json(items[cat]);
});

// Sorting — Top Rated
app.get("/api/sort/top-rated", (req, res) => {
  res.json({
    sort: "Top Rated",
    stars: 5
  });
});

app.get("/", (req, res) => {
  res.send("Filter API is running...");
});

app.listen(5000, () => console.log("Backend running on port 5000"));
