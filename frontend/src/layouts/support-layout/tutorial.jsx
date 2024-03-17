import React from 'react';
import propTypes from 'prop-types';
import CrearCuentaImg from "./image-26.png";
import FeedImage from "./image-27.png";
import ExperienciaImg from "./image-28.png";
import InicioImg from "./image-29.png";
import TransmiteImg from "./image-30.png";
import ComunidadListaImg from "./image-31.png";
import ComunidadImg from "./image-32.png";
import EventsImage from "./image-33.png";

const Tutorial = ({ setOpen }) => {

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div>
            <button onClick={handleClose}>
                <div className="text-white">
                    <p className="text-4xl font-bold">
                        Tutorial
                    </p>
                    <p className="text-xl">
                        <br />
                        <br />
                        <span className="text-lg font-bold">
                            1. Creación de tu Perfil:
                        </span>
                        <br />
                        <span className="text-xl">
                            - Para comenzar, haz clic en el botón "Registrarse" en la página de inicio y completa el
                            formulario de registro con tu nombre, dirección de correo electrónico y una contraseña segura.
                        </span>
                        <br />
                        <span className="text-xl">
                            - Después de registrarte, podrás completar tu perfil añadiendo información adicional, como tu
                            foto de perfil e intereses.
                        </span>
                    </p>
                    <div className="flex justify-center gap-4 mt-4">
                        <img
                            src={CrearCuentaImg}
                            className="w-[400px] h-[258px] object-cover rounded-md"
                            alt="Creación de tu Perfil"
                        />
                    </div>
                    <br />
                    <br />
                    <span className="text-lg font-bold">
                        2. Explorando la Plataforma:
                    </span>
                    <br />
                    <span className="text-xl">
                        - Una vez que hayas creado tu perfil, explora la plataforma navegando por las diferentes
                        secciones, como el feed de eventos, las comunidades y las experiencias destacadas.
                    </span>
                    <br />
                    <span className="text-xl">
                        - Para aquellos con problemas de visión, la plataforma ofrece una opción de accesibilidad
                        única: presiona el botón con forma de altavoz para escuchar las experiencias en formato de
                        audio, lo que permite una experiencia más inclusiva.
                    </span>
                    <br />
                    <div className="flex justify-center gap-4 mt-4">
                        <img
                            src={FeedImage}
                            className="w-[350px] h-[513px] object-cover rounded-md"
                            alt="Explorando la Plataforma"
                        />
                        <img
                            src={ExperienciaImg}
                            className="w-[350px] h-[340px] object-cover rounded-md"
                            alt="Explorando la Plataforma"
                        />
                    </div>
                    <br />
                    <br />
                    <span className="text-lg font-bold">
                        3. Transmitir Contenido:
                    </span>
                    <br />
                    <span className="text-xl">
                        - Para transmitir contenido, haz clic en el botón "Cuéntanos tu historia" en tu feed de
                        noticias y escribe tu mensaje o comparte una foto o video.
                    </span>
                    <br />
                    <span className="text-xl">
                        - Utiliza hashtags para etiquetar tus publicaciones y que los usuarios sepan de que va a
                        tratar tu experiencia.
                    </span>
                    <br />
                    <div className="flex justify-center gap-4 mt-4">
                        <img
                            src={InicioImg}
                            className="w-[400px] h-[200px] object-cover rounded-md"
                            alt="Transmitir Contenido"
                        />
                        <img
                            src={TransmiteImg}
                            className="w-[400px] h-[200px] object-cover rounded-md"
                            alt="Transmitir Contenido"
                        />
                    </div>
                    <br />
                    <br />
                    <span className="text-lg font-bold">
                        4. Participando en Comunidades:
                    </span>
                    <br />
                    <span className="text-xl">
                        - Únete a comunidades relacionadas con tus intereses haciendo clic en el botón “Seguir” o
                        “Unirme” de las Comunidades, explorando las opciones disponibles.
                    </span>
                    <br />
                    <span className="text-xl">
                        - Participa en discusiones, comparte recursos y conoce a otros miembros de la comunidad que
                        comparten tus pasiones.
                    </span>
                    <br />
                    <div className="flex justify-center gap-4 mt-4">
                        <img
                            src={ComunidadImg}
                            className="w-[350px] h-[191px] object-cover rounded-md"
                            alt="Participando en Comunidades"
                        />
                        <img
                            src={ComunidadListaImg}
                            className="w-[350px] h-[180px] object-cover rounded-md"
                            alt="Participando en Comunidades"
                        />
                    </div>
                    <br />
                    <br />
                    <span className="text-lg font-bold">
                        5. Aprovechando las Funciones Avanzadas:
                    </span>
                    <br />
                    <span className="text-xl">
                        - Explora las funciones avanzadas de la plataforma, como la organización de eventos y la
                        participación en encuestas y votaciones.
                    </span>
                    <br />
                    <span className="text-xl">
                        - Personaliza tu experiencia ajustando la configuración de privacidad y otras preferencias
                        según tus necesidades y preferencias.
                    </span>
                    <br />
                    <div className="flex justify-center gap-4 mt-4">
                        <img
                            src={EventsImage}
                            className="w-[500px] h-[204px] object-cover rounded-md"
                            alt="Aprovechando las Funciones Avanzadas"
                        />
                    </div>
                    <br />
                    <br />
                    <span className="text-xl font-bold">
                        ¡Esperamos que este tutorial te haya sido útil para comenzar tu experiencia en Transmivencia!
                    </span>
                    <br />
                    <span className="text-xl">
                        Si tienes alguna pregunta o necesitas ayuda adicional, no dudes en consultar nuestras
                        Preguntas frecuentes (FAQ) o ponerse en contacto con nuestro equipo de Soporte. ¡Disfruta
                        explorando y conectando en nuestra plataforma!
                    </span>
                </div>
            </button>
        </div>
    );
}

Tutorial.propTypes = {
    setOpen: propTypes.func
}

export default Tutorial;