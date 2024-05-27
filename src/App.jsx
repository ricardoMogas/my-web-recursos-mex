import { useState, useEffect } from 'react'
import './App.css'
import './css/Dropdown.css'
import Footer from './componentes/Footer'
import FirstPart from './componentes/FirstPart'
import SecondPart from './componentes/SecondPart'
function App() {
  const [isExpanded, setIsExpanded] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      header.classList.toggle("abajo", window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // El array vacío significa que este useEffect se ejecuta solo una vez al montar el componente

  const [isOpenOne, setIsOpenOne] = useState(false);

  const toggleDropdownOne = () => {
    setIsOpenOne(!isOpenOne);
  };
  const [isOpenTwo, setIsOpenTwo] = useState(false);

  const toggleDropdownTwo = () => {
    setIsOpenTwo(!isOpenTwo);
  };
  return (
    <>
      <div className='fondo'>
        <header>
          <a href="#" class="logo">
            Recursos y necesidades de Mexico
          </a>
          <nav>
            <div className="dropdown">
              <button onClick={toggleDropdownOne} className="dropdown-toggle">
                Primer parcial
              </button>
              {isOpenOne && (
                <ul className="dropdown-menu">
                  <li><a href="#recursos-naturales">Recursos naturales</a></li>
                  <li><a href="#desarrollo-agropecuario">Desarrollo Agropecuario</a></li>
                </ul>
              )}
            </div>
            <div className="dropdown">
              <button onClick={toggleDropdownTwo} className="dropdown-toggle">
                Segundo parcial
              </button>
              {isOpenTwo && (
                <ul className="dropdown-menu">
                  <li><a href="#aspectos-socioeconómicos">Aspectos socioeconómicos</a></li>
                  <li><a href="#sector-agropecuario">Sector agropecuario</a></li>
                  <li><a href="#sector-industrial">Sector industrial</a></li>
                  <li><a href="#presidentes-mexico">Presidentes de mexico</a></li>
                </ul>
              )}
            </div>
          </nav>
        </header>
        <main className='grid'>

          <FirstPart />

          <SecondPart />

        </main>
      </div>
      <Footer />

      {/*
        https://www.gob.mx/semarnat
        https://www.bancomundial.org/es/country/mexico/overview
        https://www.inegi.org.mx/

        https://www.gob.mx/agricultura
        https://www.gob.mx/conagua
        https://www.gob.mx/salud
        http://www.fao.org/mexico
        https://www.imss.gob.mx/
      */}
    </>
  )
}

export default App
