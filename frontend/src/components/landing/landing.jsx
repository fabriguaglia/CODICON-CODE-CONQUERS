import React from "react";
import BackgroundImage from "../../assets/bg-image.png";
import Image from "../../assets/principal-image.png";

const Landing = () => {
	return (
		<div className="relative h-screen">
			{/* Fondo de pantalla completa */}
			<div
				className="absolute inset-0 bg-cover bg-center"
				style={{ backgroundImage: `url(${BackgroundImage})` }}
			></div>

			{/* Contenedor principal */}
			<div className="relative z-10 flex items-center justify-around h-full">
				{/* Columna izquierda */}
				<div className="flex flex-col items-center justify-center text-gray px-8">
					<h1 className="text-4xl font-bold mb-4">Título de tu Landing</h1>
					<p className="text-lg mb-6">Subtítulo de tu Landing</p>
					<button className="bg-primary-color text-white py-2 px-20 rounded-full mb-4 hover:bg-opacity-80 transition duration-300">
						¡Acción!
					</button>
					<a href="#" className="flex flex-col items-center">
                        Icono de enlace
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="80"
							height="80"
							viewBox="0 0 129 128"
							fill="none"
						>
							<path
								d="M101.833 58.6666L64.5 90.6666L27.1667 58.6666"
								stroke="#76007A"
								stroke-width="8"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								opacity="0.5"
								d="M101.833 37.3333L64.5 69.3333L27.1667 37.3333"
								stroke="#76007A"
								stroke-width="8"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</a>
				</div>

				{/* Columna derecha */}
				<div className="flex justify-center">
					<img src={Image} alt="Imagen de tu Landing" className="max-h-96" />
				</div>
			</div>
		</div>
	);
};

export default Landing;
