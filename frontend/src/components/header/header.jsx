import { useState, useEffect } from "react";
import Logo from "../../assets/principal-image.png";
import "./header.css";
import UserLogin from "../dialog/user-login";
import UserRegister from "../dialog/user-register";

const Header = () => {
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
	}, []);

	const styles = {
		div: "flex items-center",
		links: "mr-4 cursor-pointer",
	};

	return (
		<header
			className={`fixed w-full top-0 z-50 flex items-center justify-between px-4 py-2 ${
				isScrolled ? "bg-primary-color" : "bg-transparent"
			}`}
		>
			<div className={styles.div}>
				<img src={Logo} alt="Logo" className="h-8 mr-2 cursor-pointer" />
			</div>
			<div className={styles.div}>
				<button className={styles.links} onClick={openLoginModal}>
					Iniciar sesión
				</button>
				<button className={styles.links} onClick={openRegisterModal}>Registrarse</button>
				<button className={styles.links}>Quiénes somos</button>
				<button className={styles.links}>Soporte</button>
			</div>
			<UserRegister isOpen={isRegisterModal} onClose={closeRegisterModal} />
			<UserLogin isOpen={isLoginModal} onClose={closeLoginModal} />
		</header>
	);
};

export default Header;
