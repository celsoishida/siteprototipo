import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Titulo() {
  return <h1>Olá, React!</h1>;
}

function Cabecalho() {
  return (
    <div className="cabecalho">
      <h1>Meu Aplicativo React</h1>
      <h2>Desenvolvido com carinho</h2>
    </div>
  );
}

function Contador() {
  const [count, setCount] = useState(0)
  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  )
}

function App() {
  const nome = 'React';
  const mensagem = <h1>Bem-vindo ao {nome}!</h1>;
  
  return (
    <div className="container">
      <Cabecalho />
      <Titulo />
      {mensagem}
      <h3>Vite + React</h3>
      <Contador />
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App
