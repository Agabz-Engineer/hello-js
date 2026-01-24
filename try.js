require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Custom logging middleware 
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date()}`);
  next();
});

// GET
app.get('/', (req, res) => {
  res.send('My Week 2 API');
});

// POST 
app.post('/user', (req, res) => {
  const { name, email } = req.body;
  
  // Error handle
  if (!name || !email) {
    return res.status(400).json({ 
      error: 'Missing required fields: name and email are required' 
    });
  }
  
  res.json({ message: `Hello, ${name}!` });
});

// GET /user/:id - "User [id] profile"
app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  res.send(`User ${id} profile`);
});

// Serve static HTML page at /
app.use(express.static('public'));

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
