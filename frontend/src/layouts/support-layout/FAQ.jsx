import React from "react";
import PropTypes from "prop-types";

const FAQ = ({ setOpen }) => {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button onClick={handleClose} className="text-white">
                <p className="text-xl font-bold text-left text-white">
                    ¿Qué es Transmivencia?
                </p>
                <p className="text-base text-left text-white">
                    Transmivencia es una plataforma en línea diseñada para permitir a las personas compartir sus experiencias de vida de manera segura y sin prejuicios. Ya sea que quieras contar tu propia historia o simplemente escuchar las experiencias de los demás, Transmivencia ofrece un espacio inclusivo y acogedor para todos.
                </p>
                <br />
                <p className="text-xl font-bold text-left text-white">
                    ¿Cómo puedo compartir mi historia en Transmivencia?
                </p>
                <p className="text-base text-left text-white">
                    Para compartir tu historia en Transmivencia, simplemente crea una cuenta gratuita y haz clic en el botón "Cuentanos tu historia" en la página de inicio. Luego, sigue las instrucciones para escribir y publicar tu experiencia. Puedes elegir mantener tu historia anónima si lo deseas.
                </p>
                <br />
                <p className="text-xl font-bold text-left text-white">
                    ¿Qué tipo de historias puedo encontrar en Transmivencia?
                </p>
                <p className="text-base text-left text-white">
                    En Transmivencia, encontrarás una amplia variedad de historias y experiencias compartidas por personas de todo el mundo. Desde relatos personales sobre superar desafíos hasta testimonios inspiradores sobre logros y crecimiento personal, nuestra plataforma ofrece una diversidad de voces y perspectivas.
                </p>
                <br />
                <p className="text-xl font-bold text-left text-white">
                    ¿Es seguro compartir mis experiencias en Transmivencia?
                </p>
                <p className="text-base text-left text-white">
                    Sí, en Transmivencia nos tomamos muy en serio la seguridad y privacidad de nuestros usuarios. Todas las historias compartidas en nuestra plataforma se someten a moderación para garantizar que cumplan con nuestras pautas comunitarias y no violen los derechos de privacidad de ninguna persona. Además, ofrecemos opciones para mantener tu historia anónima si así lo prefieres.
                </p>
                <br />
                <p className="text-xl font-bold text-left text-white">
                    ¿Puedo interactuar con otras personas en Transmivencia?
                </p>
                <p className="text-base text-left text-white">
                    Sí, en Transmivencia fomentamos la interacción y la conexión entre nuestros usuarios. Puedes dejar comentarios en las historias de otras personas para mostrar apoyo, hacer preguntas o compartir tus propias experiencias relacionadas. Sin embargo, es importante recordar ser respetuoso y considerado en tus interacciones con los demás.
                </p>
                <br />
                <p className="text-xl font-bold text-left text-white">
                    ¿Cómo puedo encontrar historias sobre temas específicos en Transmivencia?
                </p>
                <p className="text-base text-left text-white">
                    Puedes utilizar nuestra función de búsqueda para encontrar historias sobre temas específicos que te interesen. Además, también puedes explorar nuestras categorías y etiquetas para descubrir historias relacionadas con temas particulares, como superación personal, relaciones, salud mental y más.
                </p>
                <br />
                <p className="text-xl font-bold text-left text-white">
                    ¿Hay algún costo asociado con el uso de Transmivencia?
                </p>
                <p className="text-base text-left text-white">
                    No, Transmivencia es completamente gratuito para todos los usuarios. No hay ningún costo asociado con la creación de una cuenta, la publicación de historias o la interacción con otras personas en la plataforma. Nuestro objetivo es proporcionar un espacio inclusivo y accesible para compartir y conectar experiencias de vida.
                </p>
                <br />
                <p className="text-xl font-bold text-left text-white">
                    ¿Cómo puedo obtener ayuda adicional o resolver otras dudas?
                </p>
                <p className="text-base text-left text-white">
                    Si tienes alguna pregunta adicional o necesitas ayuda con cualquier aspecto de Transmivencia, no dudes en ponerte en contacto con nuestro equipo de soporte. Estamos aquí para ayudarte y resolver cualquier inquietud que puedas tener. Puedes contactarnos enviando un correo electrónico a{" "}
                    <span className="text-[#dfffd4]">support@transmivencia.com</span>
                    {" "}
                    o completando el formulario de contacto en nuestra página de
                    {" "}
                    <span className="text-[#dfffd4]">Soporte</span>
                    . Nuestro equipo estará encantado de atenderte y brindarte la asistencia que necesites.
                </p>
            </button>
        </div>
    );
};

FAQ.propTypes = {
    setOpen: PropTypes.func,
};

export default FAQ;