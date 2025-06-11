// npm install express cors mysql2 dotenv multer
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});
console.log(process.env.DB_PASSWORD);

app.get( '/cursosufpr', async (req, res) => {
  try {
      const [[results]] = await pool.query("CALL cursosel()"); // Use pool.query directly
      const jsonResults = results.map(result => ({ id: result.ID, descricao: result.CursoCampus }));
      res.json(jsonResults);
  } catch (err) {
      console.error('Erro ao buscar cursos UFPR:', err);
      res.status(500).json({ error: 'Erro ao buscar cursos UFPR' });
  }
});

app.listen(5002, '0.0.0.0', () => {
    console.log('Server is running at port 5002');
  });


