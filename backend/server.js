const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Path to the JSON file
const dataFilePath = path.join(__dirname, 'data.json');

// Read data from JSON file
const readData = () => {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading data file', err);
    return [];
  }
};

// Write data to JSON file
const writeData = (data) => {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing data file', err);
  }
};

// Dummy user for login
const dummyUser = {
  username: 'testuser',
  password: 'testpassword',
};

// Authentication middleware
const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader === `Bearer ${dummyUser.username}:${dummyUser.password}`) {
    return next();
  }
  res.status(403).json({ message: 'Forbidden' });
};

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === dummyUser.username && password === dummyUser.password) {
    return res.json({ message: 'Login Successful', token: `Bearer ${username}:${password}` });
  } else {
    return res.status(401).json({ message: 'Invalid username or password' });
  }
});

// Retrieve all routes
app.get('/routes', (req, res) => {
  const routes = readData();
  const sorted_routes = routes.sort((a, b) => (a.id > b.id ? -1 : 1))
  res.json(sorted_routes);
});

// Retrieve a specific route
app.get('/routes/:id', (req, res) => {
  const { id } = req.params;
  const routes = readData();
  const route = routes.find(r => r.id === id);
  if (!route) {
    return res.status(404).json({ message: 'Route not found' });
  }
  res.json(route);
});

// Create a new route
app.post('/routes', authenticate, (req, res) => {
  const { name} = req.body;
  if (!name) {
    return res.status(400).json({ message: 'Required fields are missing' });
  }

  let id = Math.floor(new Date().getTime()/1000.0);
  const routes = readData();
  const newRoute = { id, name, "available_cars": [] };
  routes.push(newRoute);
  writeData(routes);
  res.status(201).json(newRoute);
});

// Update a route
app.put('/routes/:id', authenticate, (req, res) => {
  const { id } = req.params;
  const { name, available_cars } = req.body;
  const routes = readData();
  const routeIndex = routes.findIndex(r => r.id === id);

  if (routeIndex === -1) {
    return res.status(404).json({ message: 'Route not found' });
  }

  if (!name || !available_cars) {
    return res.status(400).json({ message: 'Name and available_cars are required' });
  }

  routes[routeIndex] = { id, name, available_cars };
  writeData(routes);
  res.json(routes[routeIndex]);
});

// Delete a route
app.delete('/routes/:id', authenticate, (req, res) => {
  const { id } = req.params;
  const routes = readData();
  const routeIndex = routes.findIndex(r => r.id == id);

  if (routeIndex == -1) {
    return res.status(404).json({ message: 'Route not found' });
  }

  routes.splice(routeIndex, 1);
  writeData(routes);
  res.status(200).json({message: "Deleted!"});
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});