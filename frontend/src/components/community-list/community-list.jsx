import React from "react";
import ItemList from "./item-list";
import Image from "../../assets/principal-image.png";

const CommunityList = ({ title, items, backgroundColor }) => {
	return (
		//este div es el contenedor de la lista de comunidades, se le pasa el color de fondo que se le quiera dar y toma todo el ancho de la pantalla
		<div className={`max-w-full mx-auto px-4 py-8 ${backgroundColor} flex flex-col items-center`}>
			<h2 className="text-2xl font-bold mb-4">{title}</h2>
			<div className={`flex flex-col justify-around`}>
			{/* Genera una grilla de 1 o 2 columnas dependiendo del tamaño de la pantalla */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{/* Se genera un ItemList por cada item que se le pase */}
					{items.map((item, index) => (
						<ItemList
							number={index + 1}
							imageSrc={Image}
							title="Titulo"
							subtitle="1 subtitulo"
						/>
					))}
				</div>
			</div>
			<div className="mt-8">
				<button className="bg-secondary-color text-white py-2 px-4 rounded-full hover:bg-opacity-80 transition duration-300">
					Ver más
				</button>
			</div>
		</div>
	);
};

export default CommunityList;
