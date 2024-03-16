import React from "react";
import { Transition } from "@headlessui/react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import AuthContext from "../../services/authcontext";
import "./user-login.css";
import Image from "../../assets/principal-image.png";

const UserLogin = ({ isOpen, onClose }) => {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const { setToken } = useContext(AuthContext);
	const { setUserId } = useContext(AuthContext);

	const handleChange = (event) => {
		setUser({
			...user,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		try {
			axios
				.post("http://localhost:3001/auth/login", user)
				.then((response) => {
					Swal.fire({
						title: "Login Correcto",
						text: "Has iniciado sesion",
						icon: "success",
						confirmButtonText: "Ok",
					});
					const token = response.data.token;
					const user_id = response.data.user_id;
					setToken(token);
					setUserId(user_id);
					navigate("/");
				})
				.catch((error) => {
					Swal.fire({
						title: "Error",
						text: "Email o contraseña incorrectos",
						icon: "error",
						confirmButtonText: "Ok",
					});
					console.log(error);
				});
		} catch (error) {
			console.log(error);
		}
	};

	const styles = {
		input:
			"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
		links: "mr-4 cursor-pointer",
	};

	return (
		<Transition
			show={isOpen}
			enter="transition-opacity duration-300"
			enterFrom="opacity-0"
			enterTo="opacity-100"
			leave="transition-opacity duration-300"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
		>
			<div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
				<div className="bg-contrast-color p-6 rounded-xl w-5/12">
					<div className="flex justify-center">
						<img src={Image} alt="Imagen de tu Landing" className="max-h-40" />
					</div>
					<form className="space-y-6" action="#" method="POST">
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 text-white"
							>
								Correo
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									required
									className={styles.input}
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 text-white"
								>
									Contraseña
								</label>
								<div className="text-sm">
									<a
										href="#"
										className="font-semibold text-background-color hover:text-indigo-500"
									>
										Olvidaste tu contraseña?
									</a>
								</div>
							</div>
							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className={styles.input}
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-secondary-color px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Entra!
							</button>
						</div>
					</form>

					<button
						className=" text-white px-4 py-2 rounded-md"
						onClick={onClose}
					>
						Cerrar
					</button>
				</div>
			</div>
		</Transition>
	);
};
export default UserLogin;
