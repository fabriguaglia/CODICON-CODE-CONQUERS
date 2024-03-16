import React from "react";
import "./footer.css";

const Footer = () => {
	return (
		<footer className="bg-secondary-color text-gray-300 py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					<div>
						<h3 className="text-lg font-semibold mb-4">Contacto</h3>
						<p>Correo electrónico: info@example.com</p>
						<p>Teléfono: +1234567890</p>
						<p>Dirección: 123 Calle Principal, Ciudad</p>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Redes Sociales</h3>
						<ul>
							<li>
								<a href="#" className="hover:text-white">
									Facebook
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white">
									Twitter
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white">
									Instagram
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">
							Términos y Condiciones
						</h3>
						<ul>
							<li>
								<a href="#" className="hover:text-white">
									Términos de Servicio
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white">
									Política de Privacidad
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">FAQ</h3>
						<ul>
							<li>
								<a href="#" className="hover:text-white">
									Preguntas Frecuentes
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="mt-8 border-t border-gray-600 pt-8 text-center">
					<p>
						&copy; 2024 Nombre de la Empresa. Todos los derechos reservados.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
