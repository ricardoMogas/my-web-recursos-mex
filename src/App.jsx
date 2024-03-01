import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Recursos Naturales</a>
            </li>
            <li>
              <a href="/about">Desarrollo agropecuario</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
      </main>
      <footer>
      </footer>
    </>
  )
}

export default App
