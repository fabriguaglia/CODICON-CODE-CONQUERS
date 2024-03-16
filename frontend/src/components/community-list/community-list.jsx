import ItemList from "./item-list";
import Image from "../../assets/principal-image.png";
import propTypes from "prop-types";
import './community-list.css';

const CommunityList = ({ items, backgroundColor }) => {
	return (
		//este div es el contenedor de la lista de comunidades, se le pasa el color de fondo que se le quiera dar y toma todo el ancho de la pantalla
		<div className={`max-w-full mx-auto px-4 py-8 ${backgroundColor} flex flex-col items-center`}>
			<div className={`flex flex-col justify-around`}>
				{/* Genera una grilla de 1 o 2 columnas dependiendo del tamaño de la pantalla */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{/* Se genera un ItemList por cada item que se le pase */}
					{items.map((item, index) => (
						<ItemList
							key={index}
							number={index + 1}
							imageSrc={Image}
							title="Titulo"
							subtitle="1 subtitulo"
							isLocked={false}
						/>
					))}
				</div>
			</div>
			<div className="mt-8 flex flex-col items-center">
				<button className="bg-secondary-color text-xl font-medium text-white py-2 px-16 rounded-full hover:bg-opacity-80 transition duration-300 uppercase">
					Ver más comunidades...
				</button>
				<h2 className="text-lg mb-4">¿No encuentras tu comunidad? <a className="color-primary">Crea una nueva.</a></h2>
			</div>
		</div>
	);
};

CommunityList.propTypes = {
	title: propTypes.string.isRequired,
	items: propTypes.array.isRequired,
	backgroundColor: propTypes.string
}

export default CommunityList;
