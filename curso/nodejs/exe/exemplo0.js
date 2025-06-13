// npm install express cors mysql2 dotenv multer
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const pool = mysql.createPool({
  host: '200.17.199.251',
  user: 'usucursonode',
  password: 'ma52wsy1ael%6s&nHa12345',
  database: 'cursonode'
});
console.log(process.env.DB_PASSWORD);

app.get( '/cursosufpr', async (req, res) => {
  try {
      const [[results]] = await pool.query("CALL cursosel()"); // Use pool.query directly
      const jsonResults = results.map(result => ({ id: result.ID, descricao2: result.CursoCampus }));
      res.json(jsonResults);
  } catch (err) {
      console.error('Erro ao buscar cursos UFPR:', err);
      res.status(500).json({ error: 'Erro ao buscar cursos UFPR' });
  }
});

app.listen(5002, '0.0.0.0', () => {
    console.log('Server is running at port 5002');
  });


