import propTypes from "prop-types";
const Politics = ({ setOpen }) => {

	const handleClose = () => {
		setOpen(false);
	}
	return (
		<div>
			<button onClick={handleClose}>
			<div className="text-white">
          <p className="text-xl font-bold">
            Esta Política de Privacidad describe cómo Transmivencia recopila, utiliza y protege la información personal que nos proporcionas cuando utilizas nuestros servicios. Nos comprometemos a proteger tu privacidad y a garantizar el manejo adecuado de tus datos personales de acuerdo con las leyes de protección de datos aplicables. Al utilizar nuestros servicios, aceptas esta Política de Privacidad.
          </p>
          <p className="text-xl">
            <br />
            <br />
            <span className="text-lg font-bold">
              1. Recopilación de Información:
            </span>
            <br />
            <span className="text-xl">
              - Recopilamos información personal que nos proporcionas voluntariamente al registrarte en nuestra plataforma, crear un perfil de usuario, interactuar con otros usuarios o utilizar nuestras funciones y servicios.
            </span>
            <br />
            <span className="text-xl">
              - Esta información puede incluir tu nombre, dirección de correo electrónico, edad, género, ubicación geográfica, intereses, fotografías y cualquier otra información que elijas compartir.
            </span>
            <br />
            <br />
            <span className="text-lg font-bold">
              2. Uso de la Información:
            </span>
            <br />
            <span className="text-xl">
              - Utilizamos la información recopilada para proporcionar, mantener y mejorar nuestros servicios, así como para personalizar tu experiencia en nuestra plataforma.
            </span>
            <br />
            <span className="text-xl">
              - Podemos utilizar tu información para comunicarnos contigo, responder a tus consultas, proporcionarte actualizaciones sobre nuestros servicios y enviar información relevante relacionada con tu cuenta.
            </span>
            <br />
            <br />
            <span className="text-lg font-bold">
              3. Divulgación de Información:
            </span>
            <br />
            <span className="text-xl">
              - No compartimos tu información personal con terceros sin tu consentimiento, excepto en las circunstancias permitidas por la ley o según sea necesario para proporcionar nuestros servicios.
            </span>
            <br />
            <span className="text-xl">
              - Es importante tener en cuenta que si eliges publicar contenido de manera anónima en nuestra plataforma, otras personas podrán ver y acceder a ese contenido sin conocer tu identidad.
            </span>
            <br />
            <br />
            <span className="text-lg font-bold">
              4. Seguridad de la Información:
            </span>
            <br />
            <span className="text-xl">
              - Tomamos medidas para proteger tu información personal contra accesos no autorizados, uso indebido, divulgación o destrucción.
            </span>
            <br />
            <span className="text-xl">
              - Sin embargo, es importante tener en cuenta que ninguna medida de seguridad es completamente infalible y que no podemos garantizar la seguridad absoluta de tus datos.
            </span>
            <br />
            <br />
            <span className="text-lg font-bold">
              5. Cambios en la Política de Privacidad:
            </span>
            <br />
            <span className="text-xl">
              - Nos reservamos el derecho de actualizar o modificar esta Política de Privacidad en cualquier momento sin previo aviso.
            </span>
            <br />
            <span className="text-xl">
              - Te recomendamos que revises periódicamente esta Política de Privacidad para estar al tanto de cualquier cambio. El uso continuado de nuestros servicios después de la publicación de cambios constituye tu aceptación de dichos cambios.
            </span>
            <br />
            <br />
            <span className="text-lg font-bold">
              6. Contacto:
            </span>
            <br />
            <span className="text-xl">
              - Si tienes alguna pregunta o inquietud sobre esta Política de Privacidad, por favor contáctanos a través de la página de{" "}
            </span>
            <a href="/#/support" className="text-[#dfffd4] hover:underline">Soporte</a>
            <span className="text-xl">.</span>
            <br />
            <br />
            <span className="text-xl font-bold">
              Al utilizar nuestros servicios, aceptas esta Política de Privacidad y el tratamiento de tu información personal según lo descrito aquí. Gracias por confiar en Transmivencia.
            </span>
          </p>
        </div>
			</button>
		</div>
	)
}

Politics.propTypes = {
	setOpen: propTypes.func
}

export default Politics
