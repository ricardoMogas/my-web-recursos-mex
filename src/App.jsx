import { useState, useEffect } from 'react'
import './App.css'
import imagenN1 from './assets/recursosN1.png'
import agropecuarioN1 from './assets/agropecuarioN1.png'
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
            <img src={agropecuarioN1} alt="Imagen de campo" />
            <section className='card'>
              <h2>Desarrollo Agropecuario</h2>
              <p>
                El desarrollo agropecuario en México está influenciado por políticas gubernamentales, inversión en tecnología agrícola, y programas de apoyo a los agricultores y ganaderos.
              </p>

              <h3>Desarrollo Industrial</h3>
              <p>
                México tiene una economía industrializada, con sectores como el automotriz, electrónico, manufacturero, entre otros, que contribuyen significativamente al desarrollo económico del país.
              </p>

              <h3>Desarrollo de Servicios</h3>
              <p>
                El sector servicios en México incluye una amplia gama de actividades, como el turismo, la banca, la educación, la salud, entre otros, que desempeñan un papel importante en la economía del país.
              </p>
              <h3>Educación</h3>
              <p>
                México cuenta con un sistema educativo que abarca desde la educación básica hasta la educación superior, con diversos programas y políticas para mejorar la calidad y el acceso a la educación.
              </p>
              <h3>Salud</h3>
              <p>
                El sistema de salud mexicano incluye tanto instituciones públicas como privadas, con programas de atención médica, prevención de enfermedades y acceso a servicios de salud para la población.
              </p>
              <h3>Vivienda y Servicios Públicos</h3>
              <p>
                El acceso a vivienda adecuada y servicios públicos, como agua potable y alcantarillado, es una prioridad en México, con programas gubernamentales para mejorar la infraestructura y garantizar el acceso a estos servicios.
              </p>
            </section>
          </div>

        </main>
      </div>
      <footer>
        <h1>Fuentes</h1>
        <blockquote>
          <p>Secretaría de Medio Ambiente y Recursos Naturales [SEMARNAT].</p>
          <cite>(s.f.). Recuperado de <a href="https://www.gob.mx/semarnat" target="_blank">https://www.gob.mx/semarnat</a></cite>
        </blockquote>
        <blockquote>
          <p>Banco Mundial. (s.f.). México - Overview. Recuperado de <a href="https://www.bancomundial.org/es/country/mexico/overview" target="_blank">https://www.bancomundial.org/es/country/mexico/overview</a></p>
        </blockquote>
        <blockquote>
          <p>Instituto Nacional de Estadística y Geografía (INEGI). (s.f.). INEGI - Instituto Nacional de Estadística y Geografía. Recuperado de <a href="https://www.inegi.org.mx/" target="_blank">https://www.inegi.org.mx/</a></p>
        </blockquote>
        <blockquote>
          <p>Gobierno de México. (s.f.). Recuperado de <a href="https://www.gob.mx" target="_blank">https://www.gob.mx</a></p>
        </blockquote>
      </footer>
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
