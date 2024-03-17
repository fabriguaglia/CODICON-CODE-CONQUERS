import { useEffect, useState } from "react";
import propTypes from "prop-types";
import userDefault from "../../assets/user-default.png";
import './experiences.css';
import axios from "axios";

const ExperiencePreview = ({
	user_id,
	comunity_id,
	comment_id,
	reactions,
	name,
	description,
	experience_image,
	audio,
	limit,
	anonimo,
	hashtags,
}) => {

	const [user, setUser] = useState({});
	const [comunity, setComunity] = useState({});
	const [comment, setComment] = useState({});
	const [reaction, setReaction] = useState({});

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
			.get(`http://localhost:3002/comunity/?_id=${comunity_id}`)
			.then((response) => {
				setComunity(response.data.docs[0]);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [comunity_id]);

	useEffect(() => {
		const arr = Array.isArray(comment_id) ? comment_id : [];
		axios
			.get(`http://localhost:3002/comment/?_id=${arr[0]}`)
			.then((response) => {
				setComment(response.data.docs[0]);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [comment_id]);

	return (
		<div className="m-4">
			<div className={`w-fit flex flex-row mb-4`}>
				<div className={`col-2 relative`}>
					<img
						src={userDefault}
						alt="Imagen"
						className="w-16 h-16 rounded-full object-cover"
					/>
					<div className="line"></div>
				</div>
				<div className={`w-full col-4 px-2`}>
					<div className="flex justify-between items-center">
						<h3 className="col-span-2 text-md font-medium mr-4 text-white">
							{ }
						</h3>
						<p className="col-span-2 text-sm text-white">
							{ }
						</p>
					</div>
					<p className="col-span-2 text-white">{ }</p>
					<button className="bg-primary-color text-white py-1 px-4 mt-2 rounded-full flex items-center ">
						Seguir leyendo
					</button>
					<div className="flex justify-start mr-4 items-center">
						{hashtags.map((hashtag, index) => (
							<span key={index} className="text-white font-bold">
								{hashtag}
							</span>
						))}
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

const tools = () => {
	return (
		<div className={`w-fit flex flex-row gap-4`}>
			<span className="material-symbols-outlined text-white">favorite</span>
			<span className="material-symbols-outlined text-white">chat_bubble</span>
			<span className="material-symbols-outlined text-white">volume_up</span>
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
