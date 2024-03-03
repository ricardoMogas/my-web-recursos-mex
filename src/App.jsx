import { useState, useEffect } from 'react'
import './App.css'
import imagenN1 from './assets/recursosN1.png'

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


  return (
    <>
      <div className='fondo'>
        <header>
          <a href="#" class="logo">
            Recursos y necesidades de Mexico
          </a>
          <nav>
            <ul>
              <li><a href="#recursos-naturales">Recursos naturales</a></li>
              <li><a href="#desarrollo-agropecuario">Desarrllo Agropecuario</a></li>
            </ul>
          </nav>
        </header>
        <main className='grid'>

          <h1 id="recursos-naturales">1. RECURSOS NATURALES</h1>
          <div className='row'>
            <section className='card'>

              <h2>Recursos naturales</h2>
              <p>Los recursos naturales son elementos que se encuentran en la naturaleza y se utilizan en su estado natural o después de procesarse. Estos recursos pueden clasificarse en recursos renovables y no renovables.</p>
              <h4>Recursos Renovables</h4>
              <p>Los recursos renovables son aquellos que pueden regenerarse por medios naturales, como el agua, el aire, la luz solar, los bosques, entre otros.</p>
              <h4>Recursos No Renovables</h4>
              <p>Los recursos no renovables son aquellos que no pueden regenerarse por medios naturales, como los minerales, los combustibles fósiles, entre otros.</p>

              <h2> Problemas Ambientales </h2>
              <ul>
                <li><strong>Contaminación del aire:</strong>
                  <p>
                    Las ciudades mexicanas enfrentan desafíos significativos relacionados con la contaminación del aire y del agua debido a la industrialización y el crecimiento urbano.
                  </p>
                </li>
                <li><strong>Deforestación:</strong>
                  <p>
                    La deforestación es un problema importante en algunas regiones de México, especialmente debido a la tala ilegal y la expansión de la agricultura y la ganadería.
                  </p>
                </li>
                <li><strong>Deforestación:</strong>
                  <p>
                    La desertificación, especialmente en el norte de México, es un problema que amenaza la biodiversidad y la productividad de la tierra.
                  </p>
                </li>
                <li><strong>Deforestación:</strong>
                  <p>
                    El manejo inadecuado de los residuos sólidos es una preocupación importante en muchas áreas urbanas de México.
                  </p>
                </li>
              </ul>

            </section>
            <img src={imagenN1} alt="Image Description" />
          </div>

          <h1 id="desarrollo-agropecuario">2. DESARROLLO AGROPECUARIO</h1>
          <div className='row'>
            <section className='card'>
              <h2>Desarrollo Agropecuario</h2>
              <h3>Desarrollo Industrial</h3>
              <p>Contenido sobre desarrollo industrial.</p>
              <h3>Desarrollo de Servicios</h3>
              <p>Contenido sobre desarrollo de servicios.</p>
              <h3>Educación</h3>
              <p>Información sobre educación.</p>
              <h3>Salud</h3>
              <p>Información sobre salud.</p>
              <h3>Vivienda y Servicios Públicos</h3>
              <p>Información sobre vivienda, agua potable y alcantarillado.</p>
            </section>
          </div>

          <section className='card' id='"otro-contenido'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </section>
        </main>
      </div>
      <footer>
        <p>Este es el pie de página.</p>
      </footer>
      {/*
        https://www.gob.mx/semarnat
         https://www.bancomundial.org/es/country/mexico/overview
          https://www.inegi.org.mx/
      */}
    </>
  )
}

export default App
