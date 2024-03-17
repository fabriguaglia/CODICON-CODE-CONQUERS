import propTypes from "prop-types";

const TermsConditions = ({ setOpen }) => {

	const handleClose = () => {
		setOpen(false);
	}

	return (
		<div>
			<button onClick={handleClose}>
			<div className="text-white"> 
          <p className="text-xl font-bold">
            Por favor, lee atentamente los siguientes términos y condiciones antes de utilizar los servicios proporcionados por Transmivencia. Al acceder y utilizar nuestra plataforma, aceptas cumplir con estos términos y condiciones en su totalidad. Si no estás de acuerdo con alguno de estos términos, te solicitamos que no utilices nuestros servicios.
          </p>
          <p className="text-xl">
            <br />
            <br />
            <span className="text-lg font-bold">
              1. Uso de la Plataforma:
            </span>
            <br />
            <span className="text-xl">
              - Nuestra plataforma es una red social diseñada para promover la inclusión y la diversidad en línea. Al utilizar nuestros servicios, te comprometes a respetar a todos los usuarios y a no participar en comportamientos discriminatorios, abusivos o de acoso.
            </span>
            <br />
            <span className="text-xl">
              - No se permite el uso de nuestra plataforma con fines ilegales o que violen los derechos de terceros.
            </span>
            <br />
            <br />
            <span className="text-lg font-bold">
              2. Responsabilidad del Usuario:
            </span>
            <br />
            <span className="text-xl">
              - Eres responsable de mantener la confidencialidad de tu cuenta y de cualquier actividad que ocurra bajo tu nombre de usuario.
            </span>
            <br />
            <span className="text-xl">
               - No compartas tu contraseña con terceros y notifícanos de inmediato si sospechas de un acceso no autorizado a tu cuenta.
            </span>
            <br />
            <br />
            <span className="text-lg font-bold">
              3. Contenido del Usuario:
            </span>
            <br />
            <span className="text-xl">
							- Al publicar contenido en nuestra plataforma, garantizas que tienes el derecho legal de hacerlo y que dicho contenido no infringe los derechos de propiedad intelectual de terceros.
            </span>
            <br />
            <span className="text-xl">
 							- Nos reservamos el derecho de eliminar cualquier contenido que consideremos inapropiado o que viole estos términos y condiciones.
            </span>
            <br />
            <br />
            <span className="text-lg font-bold">
              4. Privacidad:
            </span>
            <br />
            <span className="text-xl">
 							- Respetamos tu privacidad y nos comprometemos a proteger tus datos personales de acuerdo con nuestra política de privacidad.
            </span>
            <br />
            <span className="text-xl">
							- Al utilizar nuestros servicios, aceptas nuestra recopilación, uso y divulgación de tus datos personales según lo establecido en nuestra política de privacidad.
            </span>
            <br />
            <br />
            <span className="text-lg font-bold">
              5. Modificaciones de los Términos y Condiciones:
            </span>
            <br />
            <span className="text-xl">
						  - Nos reservamos el derecho de actualizar o modificar estos términos y condiciones en cualquier momento sin previo aviso.
            </span>
            <br />
            <span className="text-xl">
							- Te recomendamos que revises periódicamente estos términos y condiciones para estar al tanto de cualquier cambio. El uso continuado de nuestros servicios después de la publicación de cambios constituye tu aceptación de dichos cambios.
            </span>
            <br />
            <br />
            <span className="text-lg font-bold">
              6. Contacto:
            </span>
            <br />
            <span className="text-xl">
							- Si tienes alguna pregunta o inquietud sobre estos términos y condiciones, por favor contáctanos a través de la página de Soporte.
            </span>
            <span className="text-xl">.</span>
            <br />
            <br />
            <span className="text-xl font-bold">
						Al utilizar nuestros servicios, aceptas cumplir con estos términos y condiciones. Gracias por ser parte de nuestra comunidad y contribuir a crear un entorno inclusivo y respetuoso para todos.            </span>
          </p>
        </div>
		</button>
    </div>
	)
}

TermsConditions.propTypes = {
	open: propTypes.bool,
	setOpen: propTypes.func
}

export default TermsConditions
