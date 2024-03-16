import BackgroundImage from "../../assets/bg-image.png";
import Image from "../../assets/principal-image.png";

const Landing = ({ userLogged }) => {
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
					<h1 className="text-6xl mb-4">Transmivencia</h1>
					<p className="text-xl mb-6">Transmite tu experiencia</p>
					<button className="text-2xl bg-primary-color text-white py-6 px-20 rounded-full mb-4 hover:bg-opacity-80 transition duration-300">
						
						{userLogged ? "Cuentanos tu historia" : "Crea tu comunidad"}
					</button>
					<a href="#" className="text-lg flex flex-col items-center">
						{userLogged ? "o descubre una" : "o unete a una"}
							
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
					<img src={Image} alt="Imagen de tu Landing" className="max-h-100" />
				</div>
			</div>
		</div>
	);
};

export default Landing;
