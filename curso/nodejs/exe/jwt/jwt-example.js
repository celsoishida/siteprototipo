// npm install express jsonwebtoken
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const SECRET_KEY = 'mysecretkey'; // Use env var in production

// Simulated user
const user = { id: 1, username: 'admin', password: 'senha' };

// Login route - returns JWT
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === user.username && password === user.password) {
    const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });
    return res.json({ token });
  }
  res.status(401).json({ error: 'Invalid credentials' });
});

// Middleware to verify JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Protected route
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'É uma área protegida só mostra esta frase se authenticateToken verificar o token com sucesso!', user: req.user });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
