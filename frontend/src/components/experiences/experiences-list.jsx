import { useState, useEffect, useContext } from "react";
import axios from "axios";
import ExperiencePreview from "./experience-preview";
//import Image from "../../assets/principal-image.png";
import propTypes from "prop-types";
import "../community/community-list.css";

import AuthContext from "../../services/authcontext";

const ExperienceList = ({ backgroundColor }) => {
	const url = "http://localhost:3002/";
	const [experience, setExperience] = useState([]);
	const [comunity, setComunity] = useState([]);
	const { userId } = useContext(AuthContext);

	const [params, setParams] = useState({
		name: '',
	});

	const handleChange = (e) => {
		setParams({
			...params,
			[e.target.name]: e.target.value
		})
	};

	useEffect(() => {
		try {
			axios.get(url + "experience/", {
				params: {
					name: params.name
				}
			}).then((response) => {
				setExperience(response.data.docs);
				console.log(response.data.docs);
			}).catch((error) => {
				console.log(error);
			})
		} catch (error) {
			console.log(error);
		}
	}, [params]);

	useEffect(() => {
		try {
			axios.get(url + "comunity/", {
				params: {
					user_id: userId
				}
			}).then((response) => {
				setComunity(response.data.docs[0]);
				console.log(response.data.docs);
			}).catch((error) => {
				console.log(error);
			})
		} catch (error) {
			console.log(error);
		}
	}, [userId]);

	return (
		//este div es el contenedor de la lista de comunidades, se le pasa el color de fondo que se le quiera dar y toma todo el ancho de la pantalla
		<div
			className={`p-8 w-full h-fit ${backgroundColor} flex flex-col items-center`}
		>
			<div className={`flex flex-col justify-around`}>
				{/* Genera una grilla de 1 o 2 columnas dependiendo del tamaño de la pantalla */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{/* Se genera un ItemList por cada item que se le pase */}
					{Array.isArray(experience) && experience.map((item, index) => (
						<ExperiencePreview
							key={index}
							name={item.name}
							description={item.description}
							comunity_id={comunity._id}
							experience_id={item._id}
							state={item.state}
							reactions={item.reactions}
							comments={item.comments}
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
	backgroundColor: propTypes.string,
};

export default ExperienceList;
