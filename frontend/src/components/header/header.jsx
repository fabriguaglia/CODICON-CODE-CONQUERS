import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/principal-image.png";
import "./header.css";
import UserLogin from "../dialog/user-login";
import UserRegister from "../dialog/user-register";
import propTypes from "prop-types";
import AuthContext from "../../services/authcontext";
import axios from "axios";
import Swal from "sweetalert2";

const Header = ({ green }) => {
	const [isScrolled, setIsScrolled] = useState(false);

	const { userId, setToken, setUserId } = useContext(AuthContext);
	const [isLoginModal, setIsLoginModal] = useState(false);
	const [isRegisterModal, setIsRegisterModal] = useState(false);

	const navigate = useNavigate();

	const openRegisterModal = () => {
		setIsRegisterModal(true);
	};

	const closeRegisterModal = () => {
		setIsRegisterModal(false);
	};

	const openLoginModal = () => {
		setIsLoginModal(true);
	};

	const closeLoginModal = () => {
		setIsLoginModal(false);
	};

	// Detectar el scroll del usuario
	useEffect(() => {
		if (green) { setIsScrolled(true) }
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			if (scrollTop > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
		// eslint-disable-next-line
	}, []);

	const handleLogout = () => {
		try {
			axios.post("http://localhost:3002/auth/logout");
			setToken(null);
			setUserId(null);
			Swal.fire({
				icon: "success",
				title: "Sesión cerrada",
				showConfirmButton: false,
				timer: 2000
			})
			navigate("/");
		} catch (error) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Algo salio mal",
			})
		}
	}

	const links = [
		{
			id: 1,
			to: "/about",
			name: "¿Quienes somos?",
		},
		{
			id: 2,
			to: "/support",
			name: "Soporte",
		}
	]

	const styles = {
		div: "flex items-center",
		links: "mr-4 cursor-pointer",
	};

	return (

		<header
			className={`fixed w-full top-0 z-50 flex items-center justify-between px-4 py-2 ${isScrolled ? "bg-primary-color" : "bg-transparent"
				}`}
		>
			{!userId && (
				<>
					<Link className={styles.div} to="/">
						<img src={Logo} alt="Logo" className="h-8 mr-2 cursor-pointer" />
					</Link>
					<div className={styles.div}>
						<button className={styles.links} onClick={openLoginModal}>
							Iniciar sesión
						</button>
						<button className={styles.links} onClick={openRegisterModal}>Registrarse</button>
						{links.map((link) => (
							<Link
								key={link.id}
								to={link.to}
								className={styles.links}
							>
								{link.name}
							</Link>
						))}
					</div>
				</>
			)}	{userId && (
				<>
					<Link className={styles.div} to="/">
						<img src={Logo} alt="Logo" className="h-8 mr-2 cursor-pointer" />
					</Link>
					<div className={styles.div}>
						<button
							className={styles.links}
							onClick={handleLogout}
						>
							Cerrar sesión
						</button>
					</div>
				</>
			)}
			<UserRegister isOpen={isRegisterModal} onClose={closeRegisterModal} />
			<UserLogin isOpen={isLoginModal} onClose={closeLoginModal} />
		</header>
	);
};

Header.propTypes = {
	green: propTypes.bool,
};


export default Header;
