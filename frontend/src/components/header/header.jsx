import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/principal-image.png";
import "./header.css";
import UserLogin from "../dialog/user-login";
import UserRegister from "../dialog/user-register";
import propTypes from "prop-types";

const Header = ({ green }) => {
	const [isScrolled, setIsScrolled] = useState(false);

	const [isLoginModal, setIsLoginModal] = useState(false);
	const [isRegisterModal, setIsRegisterModal] = useState(false);

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

				<Link className={styles.links} to="/about">Quiénes somos</Link>
				<button className={styles.links}>Soporte</button>

			</div>
			<UserRegister isOpen={isRegisterModal} onClose={closeRegisterModal} />
			<UserLogin isOpen={isLoginModal} onClose={closeLoginModal} />
		</header>
	);
};

Header.propTypes = {
	green: propTypes.bool,
};


export default Header;
