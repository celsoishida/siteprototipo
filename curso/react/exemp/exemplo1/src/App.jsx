import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Contador() {
  const [valor, setValor] = useState(0);

  const isMultiploDe10 = valor !== 0 && valor % 10 === 0;

  return (
    <div className="contador">
      <h2>Contador</h2>
      <div style={{ fontSize: '2rem', margin: '1rem 0' }}>{valor}</div>
      <button
        className="contador-btn"
        onClick={() => setValor(valor + 1)}
      >
        +
      </button>
      <button
        className="contador-btn"
        onClick={() => setValor(valor - 1)}
        disabled={valor === 0}
        style={{ marginLeft: '0.5rem' }}
      >
        −
      </button>
      <button
        className="contador-btn"
        onClick={() => setValor(0)}
        style={{ marginLeft: '0.5rem' }}
      >
        Zerar
      </button>
      {isMultiploDe10 && (
        <div style={{ marginTop: '1rem', color: 'green', fontWeight: 'bold' }}>
          Você chegou a um múltiplo de 10!
        </div>
      )}
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Contador />
    </>
  )
}

export default App
