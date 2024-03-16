import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from "../../components/authcontext";

const UserLogin = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		"email": "",
		"password": "",
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
			axios.post("http://localhost:3001/auth/login", user)
				.then((response) => {
					Swal.fire({
						title: 'Login Correcto',
						text: 'Has iniciado sesion',
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
		<form className={styles.form} method="post" onSubmit={handleSubmit}>
			<h1>Inicia Sesion</h1>
			<input type="text" name="email" onChange={handleChange} placeholder="Correo Electronico" />
			<input type="password" name="password" onChange={handleChange} placeholder="Contraseña" />
			<input type="submit" value="Iniciar Sesion" />
		</form>
	)
}

export default UserLogin
