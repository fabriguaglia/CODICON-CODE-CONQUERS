import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../components/authcontext";

const UserRegister = () => {

	const navigate = useNavigate();
	const [user, setUser] = useState({
		"email": "",
		"password": "",
		"username": "",
		"age": 0
	})

	const { setToken } = useContext(AuthContext);
	const { setUserId } = useContext(AuthContext);

	const handleChange = (event) => {
		setUser({
			...user,
			[event.target.name]: event.target.value
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		try {
			axios.post("http://localhost:3001/auth/register", user)
				.then((response) => {
					Swal.fire({
						title: 'Registro Correcto',
						text: 'Has registrado',
						icon: 'success',
						confirmButtonText: 'Ok'
					})
					const token = response.data.token;
					const user_id = response.data.user_id;

					setToken(token);
					setUserId(user_id);

					navigate("/");
				}).catch((error) => {
					Swal.fire({
						title: 'Error',
						text: 'Email o contraseña incorrectos',
						icon: 'error',
						confirmButtonText: 'Ok'
					})
					console.log(error);
				})
		} catch (error) {
			console.log(error);
		}
	}

	const styles = {
		form: "",
		h1: "",
		input: "",
		submit: ""
	}

	return (
		<form action="" className={styles.form} onSubmit={handleSubmit}>
			<h1 className={styles.h1}>Registrate y Transmite tu Experiencia</h1>
			<input
				className={styles.input}
				type="text"
				name="username"
				placeholder="Nombre de usuario"
				onChange={handleChange}
			/>
			<input
				className={styles.input}
				type="email"
				name="email"
				placeholder="Correo Electronico"
				onChange={handleChange}
			/>
			<input
				className={styles.input}
				type="password"
				name="password"
				placeholder="Contraseña"
				onChange={handleChange}
			/>
			<input
				className={styles.input}
				type="number"
				name="age"
				placeholder="Edad"
				onChange={handleChange}
			/>

			<input className={styles.submit} type="submit" value="Registrarse" />
		</form>
	)
}

export default UserRegister
