import ExperiencePreview from "./experience-preview";
//import Image from "../../assets/principal-image.png";
import propTypes from "prop-types";
import "../community/community-list.css";

const ExperienceList = ({ items, backgroundColor }) => {
	return (
		//este div es el contenedor de la lista de comunidades, se le pasa el color de fondo que se le quiera dar y toma todo el ancho de la pantalla
		<div
			className={`p-8 w-full h-fit ${backgroundColor} flex flex-col items-center`}
		>
			<div className={`flex flex-col justify-around`}>
				{/* Genera una grilla de 1 o 2 columnas dependiendo del tamaño de la pantalla */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{/* Se genera un ItemList por cada item que se le pase */}
					{items.map((item, index) => (
						<ExperiencePreview
							key={index}
							{...item}
							userName="Anonimous"
							time={new Date()}
							userImg=""
							text="Les cuento mi experiencia, era un día soleado y bla bla bla..."
							hashtags={["#discriminación", "#superación"]}
							comments={true}
						/>
					))}
				</div>
			</div>
			<div className="mt-8 flex flex-col items-center">
				<button className="bg-secondary-color text-xl font-medium text-white py-2 px-16 rounded-full hover:bg-opacity-80 transition duration-300 uppercase">
					Leer mas experiencias
				</button>

			</div>
		</div>
	);
};

ExperienceList.propTypes = {
	items: propTypes.array.isRequired,
	backgroundColor: propTypes.string,
};

export default ExperienceList;
