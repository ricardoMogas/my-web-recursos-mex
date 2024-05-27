import React from 'react';
import sectoragro from '../assets/sectoragro.jpg';
import imagePortada from '../assets/socioeconomicos.jpg';
import imageBalanza from '../assets/balanzaPagoImage.png';
import diagramagro from '../assets/diagramagro.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import diagramindus from '../assets/diagramindus.png';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faStore } from '@fortawesome/free-solid-svg-icons'
function SecondPart() {
    return (
        <>
            <h1 id='aspectos-socioeconómicos'>Aspectos socioeconómicos</h1>
            <div className='row' style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={imagePortada} alt='Imagen de portada' style={{ borderRadius: "20px", objectFit: 'cover', height: '300px' }} />
            </div>
            <div className='row'>
                <section className='card'>
                    <h2>Comerción exterior</h2>
                    <p>
                        En este apartado se estudian las importaciones y exportaciones de mercancías, que se
                        registran en la balanza en cuenta corriente (balanza comercial); ésta tiene signo nega-
                        tivo en todos los años, lo cual significa que es deficitaria: representa salida de divisas
                        del país.
                        La balanza comercial de México tradicionalmente ha sido deficitaria, ya que se
                        importa más de lo que se exporta. Entre 1950 y 1970 dicha balanza registró déficit en
                        todos los años, que creció de 1 326.2 millones de pesos en 1950 a 12 969.7 millones
                        en 1970, es decir, fue de déficit creciente en dicho periodo.
                        El valor de las importaciones creció 6.6 veces entre 1950 y 1970, en tanto que en
                        el mismo periodo las exportaciones sólo aumentaron 3.7 veces. Esto se debe en buena
                        medida a que el país depende de la importación de materias primas y bienes de capital
                        necesarios para el funcionamiento de la planta productiva.
                    </p>
                    <FontAwesomeIcon icon={faStore} size="5x" style={{ marginTop: "20px", display: 'block', margin: 'auto', color: "#a01541" }} />
                </section>
                <section className='card'>
                    <h2>Balanza de pago</h2>
                    <p>
                        En primer lugar es necesario definir qué es <strong>balanza de pagos</strong>:
                    </p>
                    <blockquote>
                        Documento en que se registran sistemáticamente las transacciones econó-
                        micas de un país con el exterior, representadas por compras y ventas de mer-
                        cancías, movimientos de capital y transferencias de tecnología.
                    </blockquote>
                    <img src={imageBalanza} alt="Imagen de balanza" />
                </section>
                <section className='card'>
                    <h2>Gasto Gubernamental</h2>
                    <p>
                        <li>
                            <li>
                                Gasto Corriente: Incluye los gastos en salarios de empleados públicos, bienes y servicios, subsidios y transferencias, y el pago de intereses de la deuda pública.
                            </li>
                            <li>
                                Gasto de Capital: Destinado a inversiones en infraestructura, como carreteras, hospitales, escuelas, y otros proyectos que buscan mejorar la capacidad productiva del país.
                            </li>
                        </li>
                    </p>
                    <h2>Déficit Gubernamental</h2>
                    <p>
                        El déficit gubernamental ocurre cuando el gasto del gobierno excede sus ingresos en un período fiscal determinado. Se calcula restando los ingresos totales del gobierno (como impuestos, derechos y contribuciones) del gasto total.
                    </p>
                </section>
                <section className='card'>
                    <h2>Inflación y Deflación</h2>
                    <p>
                        La inflación y la deflación son conceptos económicos que describen los cambios en el nivel general de precios de bienes y servicios en una economía. A continuación, se explica cada uno de estos fenómenos, sus causas, efectos y cómo se gestionan.
                    </p>
                    <h2>Deuda externa y Crisis Económica</h2>
                    <p>
                        La deuda externa y las crisis económicas en México han sido temas recurrentes en la historia económica del país, reflejando los desafíos que enfrenta la economía mexicana en términos de sostenibilidad fiscal y estabilidad financiera.
                    </p>
                </section>

            </div>

            <h1 id='sector-agropecuario'>Sector agropecuario</h1>
            <div className='row'>
                <div className='card'>
                    <img src={sectoragro} alt="Imagen del sector agropecuario" />
                    <p>El sector agropecuario en México es una parte vital de la economía nacional, influyendo significativamente en la producción de alimentos, el empleo rural y las exportaciones. Aquí se proporciona una descripción detallada del sector agropecuario en México:</p>
                </div>
                <img src={diagramagro} alt="Diagrama" />
            </div>

            <h1 id='sector-industrial'>Sector industrial</h1>
            <div className='row'>
                <div className='card'>
                    <h2> Crecimiento del sector </h2>
                    <p>
                        El sector industria es el:
                        <blockquote>
                            conjunto de actividades económicas que tiene como finalidad la transforma-
                            ción y adaptación de recursos naturales y materias primas semielaboradas
                            en productos acabados de consumo final o intermedio, que son los bienes
                            materiales o mercancías.
                        </blockquote>
                    </p>
                    <p>
                        Este conjunto de actividades económicas que se realiza en empresas
                        industriales forma el sector secundario de la economía, que en la actua-
                        lidad se conoce como sector industrial y se divide a su vez en dos subsec-
                        tores: la industria extractiva y la industria de la transformación
                    </p>
                    <h2>Industria extractiva</h2>
                    <p>
                        La <strong>industria extractiva</strong> es el conjunto de actividades que se efectúan
                        para extraer del subsuelo recursos naturales que se utilizan en la economía,
                        sobre todo minerales y petróleo.
                    </p>
                    <h2>Industria de la transformación</h2>
                    <p>
                        La <strong>industria de la transformación</strong> es el conjunto de actividades económicas que
                        se realizan para producir bienes materiales o mercancías que han tenido algún cambio
                        durante el proceso productivo. Está conformada por todas las ramas de la
                        economía que se dedican a la transformación de recursos naturales y ma-
                        terias primas.
                    </p>
                </div>
                <img src={diagramindus} alt="diagrama" />
            </div>

            <h1 id='presidentes-mexico'>Presidentes de mexico</h1>
            <div className='row-4'>
                <div className='card'>
                    <h2>Lázaro Cárdenas del Río (1934-1940)</h2>
                    <p>Aporte Principal: Expropiación petrolera en 1938 y la creación de Petróleos Mexicanos (PEMEX).</p>
                </div>
                <div className='card'>
                    <h2>Manuel Ávila Camacho (1940-1946)</h2>
                    <p>Aporte Principal: Fundación del Instituto Mexicano del Seguro Social (IMSS) en 1943.</p>
                </div>
                <div className='card'>
                    <h2>Miguel Alemán Valdés (1946-1952)</h2>
                    <p>Aporte Principal: Industrialización y modernización del país, incluyendo la construcción de infraestructura como la Ciudad Universitaria de la UNAM.</p>
                </div>
                <div className='card'>
                    <h2>Adolfo Ruiz Cortines (1952-1958)</h2>
                    <p>Aporte Principal: Reformas sociales y políticas, incluyendo el voto de las mujeres en 1953.</p>
                </div>
                <div className='card'>
                    <h2>Adolfo López Mateos (1958-1964)</h2>
                    <p>Aporte Principal: Nacionalización de la industria eléctrica en 1960 y creación del Instituto Nacional de Protección a la Infancia (INPI).</p>
                </div>
                <div className='card'>
                    <h2>Gustavo Díaz Ordaz (1964-1970)</h2>
                    <p>Aporte Principal: Movimiento estudiantil de 1968 y Juegos Olímpicos de México 1968.</p>
                </div>
                <div className='card'>
                    <h2>Luis Echeverría Álvarez (1970-1976)</h2>
                    <p>Aporte Principal: Reformas políticas y sociales, incluyendo la nacionalización de la banca en 1975.</p>
                </div>
                <div className='card'>
                    <h2>José López Portillo (1976-1982)</h2>
                    <p>Aporte Principal: Nacionalización de la banca en 1982 y la explotación de los yacimientos petroleros.</p>
                </div>
                <div className='card'>
                    <h2>Miguel de la Madrid Hurtado (1982-1988)</h2>
                    <p>Aporte Principal: Implementación de políticas de austeridad y liberalización económica, además de enfrentar el terremoto de 1985.</p>
                </div>
                <div className='card'>
                    <h2>Carlos Salinas de Gortari (1988-1994)</h2>
                    <p>Aporte Principal: Firma del Tratado de Libre Comercio de América del Norte (TLCAN) en 1994.</p>
                </div>
                <div className='card'>
                    <h2>Ernesto Zedillo Ponce de León (1994-2000)</h2>
                    <p>Aporte Principal: Manejo de la crisis económica de 1994-1995 (Efecto Tequila) y la creación del Instituto Federal Electoral (IFE).</p>
                </div>
                <div className='card'>
                    <h2>Vicente Fox Quesada (2000-2006)</h2>
                    <p>Aporte Principal: Primer presidente de oposición en 71 años, impulsó la alternancia democrática.</p>
                </div>
                <div className='card'>
                    <h2>Felipe Calderón Hinojosa (2006-2012)</h2>
                    <p>Aporte Principal: Guerra contra el narcotráfico y la implementación de reformas en seguridad y salud.</p>
                </div>
                <div className='card'>
                    <h2>Enrique Peña Nieto (2012-2018)</h2>
                    <p>Aporte Principal: Implementación de reformas estructurales en sectores como la educación, energía y telecomunicaciones.</p>
                </div>
                <div className='card'>
                    <h2>Andrés Manuel López Obrador (2018-2024)</h2>
                    <p>Aporte Principal: Implementación de programas sociales como "Jóvenes Construyendo el Futuro" y "Sembrando Vida", además de impulsar proyectos de infraestructura como el Tren Maya y la Refinería Dos Bocas.</p>
                </div>
            </div>
        </>
    );
}

export default SecondPart;