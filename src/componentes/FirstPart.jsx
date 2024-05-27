import imagenN1 from '../assets/recursosN1.png'
import agropecuarioN1 from '../assets/agropecuarioN1.png'

export default function FirstPart() {
    return (
        <>
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
        </>
    )
}