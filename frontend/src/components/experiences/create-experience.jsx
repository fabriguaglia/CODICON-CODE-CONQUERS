import { useEffect, useState, useContext } from "react";
import AuthContext from "../../services/authcontext";
import Image from "../../assets/principal-image.png";
import Header from "../header/header";
import axios from "axios";
import Swal from "sweetalert2";

const CreateExperience = () => {

	const url = "http://localhost:3002/comunity";
	const [user, setUser] = useState([]);
	const [comunity, setComunity] = useState([]);
	const [params, setParams] = useState({
		name: '',
	});

	const [experience, setExperience] = useState({
		user_id: "",
		community_name: "",
		description: "",
		comunity_image: null,
		limit: 0,
		state: false,
		reactions: [],
	});
	const { userId } = useContext(AuthContext);

	const handleChange = (e) => {
		if (e.target.name === 'comunity_image' && e.target.files) {
			setExperience({
				...experience,
				[e.target.name]: e.target.files[0] // Asume que es un solo archivo
			});
		} else {
			setExperience({
				...experience,
				[e.target.name]: e.target.value,
			});
		}
	};

	useEffect(() => {
		try {
			axios.get(url, {
				params: {
					name: params.name
				}
			}).then((response) => {
				setComunity(response.data.docs);
				console.log(response.data.docs);
			}).catch((error) => {
				console.log(error);
			})
		} catch (error) {
			console.log(error);
		}
	}, [params]);

	useEffect(() => {
		axios
			.get(`http://localhost:3002/user/?_id=${userId}`)
			.then((response) => {
				setUser(response.data.docs);
				console.log(response.data.docs[0]);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [userId]);

	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("community_name", experience.comunity_image);
		formData.append("user_id", userId);
		formData.append("name", experience.name);
		formData.append("description", experience.description);
		formData.append("limit", experience.limit);
		formData.append("state", experience.state);

		axios.post("http://localhost:3002/comunity/", formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
			.then((response) => {
				console.log(response);
				Swal.fire({
					icon: "success",
					title: "Comunidad creada correctamente",
					showConfirmButton: false,
					timer: 1500,
				})
			})
			.catch((error) => {
				console.log(error);
				Swal.fire({
					icon: "error",
					title: "Comunidad no creada",
					text: error.response.data.message,
					showConfirmButton: false,
					timer: 1500,
				})
			});
	};

	const styles = {
		input:
			"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
		links: "mr-4 cursor-pointer",
	};

	return (
		<div>
			<div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50">
				<Header green={true} />
				<div className="bg-contrast-color w-full h-full flex flex-col justify-center items-center">
					<div className="flex justify-center">
						<img src={Image} alt="Imagen de tu Landing" className="max-h-40" />
					</div>
					<form className="space-y-6 w-8/12" onSubmit={handleSubmit} >
						<h1 className="text-5xl text-white mb-8 text-center">
							Transmite tu experiencia
						</h1>
						<div className="flex flex-col justify-center w-full">
							<div className="mt-2">
								<label
									htmlFor="user_id"
									className="block text-sm font-medium text-gray-700"
								>
									Usueario
								</label>
								<select className={styles.input} name="user_id" id=" user_id">
									{user.map((user) => (
										<option key={user._id} value={userId}>
											{userId === user._id ? user.username : null}
										</option>
									))}
								</select>
							</div>
							
							<div className="mt-2">
								<label
									htmlFor="experienceName"
									className="block text-sm font-medium text-gray-700"
								>
									Nombre de la comunidad
								</label>
								<SelectorComponent
									options={comunity.map((comunity) => ({ label: comunity.name, value: comunity.name }))}
									selectedOption={experience.community_name}
									onChange={handleChange}
								/>
							</div>
							<div className="mt-4">
								<label
									htmlFor="description"
									className="block text-sm font-medium text-gray-700"
								>
									Tu experiencia:
								</label>
								<textarea
									type="text"
									id="description"
									placeholder="Comparte tu experiencia..."
									name="description"
									className="block w-full rounded-lg py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									onChange={handleChange}
								/>
							</div>
							<div className="mt-4">
								<label
									htmlFor="comunity_image"
									className="block text-sm font-medium text-gray-700"
								>
									Comparte una foto:
								</label>
								<input
									type="file"
									id="comunity_image"
									name="comunity_image"
									className="block w-full py-2 px-3 rounded-lg border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
									onChange={handleChange}
								/>
							</div>
						</div>
					
						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-lg bg-primary-color px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Transmite!
							</button>
						</div>
					</form>
					{/*

					<button
						className=" text-white px-4 py-2 rounded-md"
						onClick={onClose}
					>
						Cerrar
					</button>*/}
				</div>
			</div>
		</div>
	);
};

const SelectorComponent = ({ options, selectedOption, onChange }) => {
	return (
	  <select
		value={selectedOption}
		onChange={(e) => onChange(e.target.value)}
		className="block w-full rounded-lg py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
	  >
		{options.map((option, index) => (
		  <option key={index} value={option.value}>
			{option.label}
		  </option>
		))}
	  </select>
	);
  };

export default CreateExperience;
