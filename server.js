console.log("=== SERVER FILE LOADED ===");

require('dotenv').config();

const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date()}`);
  next();
});

app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.send(id);
});

app.get('/search', (req, res) => {
  const id = req.query.id;
  console.log(id);
  res.send(id);
});

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Try: http://localhost:${port}/user/123`);
});

server.on('error', (error) => {
  console.error('Server error:', error);
});

process.on('exit', (code) => {
  console.log(`Process exiting with code: ${code}`);
});