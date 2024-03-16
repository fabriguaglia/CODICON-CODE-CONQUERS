import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="parent">
                <div className="row">
                    <div className="column-2">
                        <div className="container">
                            <h2>Enlace utiles</h2>
                            <a href="#">Términos de servicio</a>
                            <a href="#">Política de privacidad</a>
                            <a href="#">Preguntas frecuentes (FAQ)</a>
                            <a href="#">Blog</a>
                        </div>
                        <div className="container">
                            <h2>Redes sociales</h2>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <h2>Copyright © 2024 Transmivencia. Todos los derechos reservados.</h2>
                </div>
            </div>
        </footer>
    );
};

export default Footer;