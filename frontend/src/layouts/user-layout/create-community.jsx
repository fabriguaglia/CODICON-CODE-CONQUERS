import { useEffect, useState, useContext } from "react";
import AuthContext from "../../services/authcontext";
import Image from "../../assets/principal-image.png";
import Header from "../../components/header/header";
import axios from "axios";
import Swal from "sweetalert2";

const CreateCommunity = () => {
	const [user, setUser] = useState([]);
	const [community, setCommunity] = useState({
		user_id: "",
		name: "",
		description: "",
		image_url: null,
		limit: 0,
		state: false,
		reactions: [],
	});
	const { userId } = useContext(AuthContext);

	const handleChange = (e) => {
		if (e.target.name === 'image_url' && e.target.files) {
			setCommunity({
				...community,
				[e.target.name]: e.target.files[0] // Asume que es un solo archivo
			});
		} else {
			setCommunity({
				...community,
				[e.target.name]: e.target.value,
			});
		}
	};


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
		formData.append("image_url", community.image_url);
		formData.append("user_id", userId);
		formData.append("name", community.name);
		formData.append("description", community.description);
		formData.append("limit", community.limit);
		formData.append("state", community.state);

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
							Crea tu comunidad
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
									htmlFor="communityName"
									className="block text-sm font-medium text-gray-700"
								>
									Nombre de la comunidad
								</label>
								<input
									id="communityName"
									name="name"
									type="text"
									placeholder="Nombre de la comunidad"
									required
									className="block w-full rounded-lg py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									onChange={handleChange}
								/>
							</div>
							<div className="mt-4">
								<label
									htmlFor="fileInput"
									className="block text-sm font-medium text-gray-700"
								>
									Descripcion:
								</label>
								<textarea
									type="text"
									id="description"
									name="description"
									className="block w-full rounded-lg py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									onChange={handleChange}
								/>
							</div>
							<div className="mt-4">
								<label
									htmlFor="image_url"
									className="block text-sm font-medium text-gray-700"
								>
									Seleccionar imagen:
								</label>
								<input
									type="file"
									id="image_url"
									name="image_url"
									className="block w-full py-2 px-3 rounded-lg border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="mt-2">
							<label
								htmlFor="limit"
								className="block text-sm font-medium text-gray-700"
							>
								Edad minima:
							</label>
							<input
								type="number"
								id="limit"
								name="limit"
								placeholder="Edad Minima"
								required
								className="block w-full py-2 px-3 rounded-lg border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								onChange={handleChange}
							/>
						</div>
						<div className="mt-2">
							<label
								htmlFor="limit"
								className="block text-sm font-medium text-gray-700"
							>
								Publico o Privado:
							</label>
							<select name="state" id="">
								<option value="true">Privado</option>
								<option value="false">Publico</option>
							</select>
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

export default CreateCommunity;
