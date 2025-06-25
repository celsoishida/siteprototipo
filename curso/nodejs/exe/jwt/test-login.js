// Test script for /login and /protected endpoints with user input
// Run: node test-login.js
const http = require('http');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function callProtected(token, label = 'Protected') {
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/protected',
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };
  const reqProtected = http.request(options, res => {
    let body = '';
    res.on('data', chunk => {
      body += chunk;
    });
    res.on('end', () => {
      console.log(`${label} Status:`, res.statusCode);
      console.log(`${label} Response:`, body);
    });
  });
  reqProtected.on('error', error => {
    console.error(error);
  });
  reqProtected.end();
}

// Step 1: Call /protected with no token
callProtected('', 'Protected (no token)');

// Step 2: Ask for password and login
rl.question('Digite a senha para fazer login: ', (senha) => {
  const data = JSON.stringify({
    username: 'admin',
    password: senha
  });
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/login',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  };
  const req = http.request(options, res => {
    let body = '';
    res.on('data', chunk => {
      body += chunk;
    });
    res.on('end', () => {
      console.log('Login Status:', res.statusCode);
      console.log('Login Response:', body);
      try {
        const json = JSON.parse(body);
        if (json.token) {
          console.log('JWT Hash:', json.token);
          // Step 3: Call /protected with token
          // o proximo código deveria estar arqui
          //callProtected(json.token, 'Protected (with token)');
        }
        callProtected(json.token, 'Protected (with token)'); // está aqui para mostrar quando acerta a senha ou não
      } catch (e) {
        // Not JSON or no token
        console.log('Not JSON or no token', );
      }
      rl.close();
    });
  });
  req.on('error', error => {
    console.error('Erro: ', error);
    rl.close();
  });
  req.write(data);
  req.end();
});
