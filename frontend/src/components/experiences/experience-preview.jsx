import { useEffect, useState } from "react";
import propTypes from "prop-types";
import userDefault from "../../assets/user-default.png";
import './experiences.css';
import axios from "axios";
import AudioPlay from "../../services/audio.play";

const ExperiencePreview = ({
	user_id,
	comunity_id,
	comment_id = [],
	reactions = [],
	name,
	description,
	experience_image,
	audio,
	limit,
	anonimo,
	hashtags = [],
}) => {
	const [user, setUser] = useState({});
	const [comunity, setComunity] = useState({});
	const [comment, setComment] = useState({});
	const [reaction, setReaction] = useState({});
	const [leyendo, setLeyendo] = useState(false);

	const handleChange = (e) => {
		e.preventDefault();
		setLeyendo(!leyendo);
	}

	useEffect(() => {
		axios
			.get(`http://localhost:3002/user/?_id=${user_id}`)
			.then((response) => {
				setUser(response.data.docs[0]);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [user_id]);

	useEffect(() => {
		axios
			.get(`http://localhost:3002/comunity/`)
			.then((response) => {
				const communities = response.data.docs;
				// Buscar la comunidad con el ID que coincide con comunity_id
				const matchingCommunity = communities.find(community => community._id === comunity_id);
				// Actualizar el estado con la comunidad encontrada
				setComunity(matchingCommunity);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [comunity_id]);

	return (
		<div className="m-4">
			<div className={`w-fit flex flex-row mb-4`}>
				<div className={`col-2 relative`}>
					<img
						src={"http://localhost:3002/" + experience_image}
						alt="Imagen"
						className="w-16 h-16 rounded-full object-cover"
					/>
				</div>
				<div className={`w-full col-4 px-2`}>
					<div className="flex flex-col justify-between items-center">
						<h3 className=" text-lg font-medium mr-4 text-white">
							{name}
						</h3>
						<p className="text-white">Creado por: {anonimo ? "Anónimo" : user.name}</p>
						<p className=" text-sm text-white">Comunidad: {comunity.name}</p>
						<p className="text-white">Edad mínima para ver: {limit}</p>
						{leyendo &&
							<>
								<p className="text-white">{description}</p>
								<p className="text-white">Comentarios: {comment_id.length}</p>
								<p className="text-white">Reacciones: {reactions.length}</p>
								<p className="text-white">Hashtags: {hashtags.length}</p>
								<AudioPlay audioUrl={`http://localhost:3002/audio/${audio}`} />
							</>
						}
					</div>
					<button onClick={handleChange} className="bg-primary-color text-white py-1 px-4 mt-2 rounded-full flex items-center">
						{leyendo ? "Ocultar detalles" : "Seguir leyendo"}
					</button>
					<div className="flex justify-start mr-4 items-center">
					</div>
				</div>
			</div>
			<div className={`w-full flex flex-row justify-between`}>

			</div>
		</div>
	);
};

const commentsImage = () => {
	return (
		<div className={`w-fit flex flex-row`}>
			<img
				src={userDefault}
				alt="Imagen"
				className="w-5 h-5 rounded-full object-cover"
			/>
			<img
				src={userDefault}
				alt="Imagen"
				className="w-5 h-5 rounded-full object-cover"
			/>
			<img
				src={userDefault}
				alt="Imagen"
				className="w-5 h-5 rounded-full object-cover"
			/>
		</div>
	);
};

ExperiencePreview.propTypes = {
	user_id: propTypes.string,
	comunity_id: propTypes.string,
	comment_id: propTypes.array,
	reactions: propTypes.array,
	name: propTypes.string,
	description: propTypes.string,
	experience_image: propTypes.string,
	audio: propTypes.string,
	limit: propTypes.number,
	anonimo: propTypes.bool,
	hashtags: propTypes.array,
};

export default ExperiencePreview;
