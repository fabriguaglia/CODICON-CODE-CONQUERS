import { useState } from "react";

import Image from "../../assets/principal-image.png";
import Header from "../../components/header/header";

const CreateCommunity = () => {
	const [communityName, setCommunityName] = useState("");
	const [communityDescription, setCommunityDescription] = useState("");

	const handleNameChange = (e) => {
		setCommunityName(e.target.value);
	};

	const handleDescriptionChange = (e) => {
		setCommunityDescription(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Add your logic to create the community here
		console.log("Creating community:", communityName, communityDescription);
		// Reset the form
		setCommunityName("");
		setCommunityDescription("");
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
					<form className="space-y-6 w-8/12" onSubmit={handleSubmit}>
						<h1 className="text-5xl text-white mb-8 text-center">
							Crea tu comunidad
						</h1>
						<div className="flex flex-col justify-center w-full">
							<div className="mt-2">
								<input
									id="communityName"
									name="communityName"
									type="text"
									placeholder="Nombre de la comunidad"
									required
									className="block w-full rounded-full py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
							<div class="mt-4">
								<label
									for="fileInput"
									class="block text-sm font-medium text-gray-700"
								>
									Seleccionar archivos:
								</label>
								<input
									type="file"
									id="fileInput"
									name="fileInput"
									class="block w-full py-2 px-3 rounded-full border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								/>
							</div>
							<div class="mt-4">
								<label
									for="videoInput"
									class="block text-sm font-medium text-gray-700"
								>
									Seleccionar video:
								</label>
								<input
									type="file"
									id="videoInput"
									name="videoInput"
									accept="video/*"
									class="block w-full py-2 px-3 rounded-full border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								/>
							</div>
						</div>

						<div>
							<div className="mt-2">
								<textarea
									id="communityDescription"
									name="communityDescription"
									type="text"
									placeholder="Descripcion de la comunidad"
									required
									className="block w-full rounded-full py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-full bg-primary-color px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Entra!
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
