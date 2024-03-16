import { useState, useEffect } from 'react';
import Logo from '../../assets/principal-image.png';
import './header.css'
import { Link } from 'react-router-dom';

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);

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

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const links = [
		{ id: 1, name: "Iniciar Sesion", to: "/login" },
		{ id: 2, name: "Registrarse", to: "/register" },
		{ id: 3, name: "¿Quienes somos?", to: "/about" },
		{ id: 4, name: "Soporte", to: "/support" },
	]

	const styles = {
		div: "flex items-center",
		links: "mr-4 cursor-pointer"
	}

	return (
		<header
			className={`fixed w-full top-0 z-50 flex items-center justify-between px-4 py-2 ${isScrolled ? 'bg-primary-color' : 'bg-transparent'
				}`}
		>
			<div className={styles.div}>
				<img src={Logo} alt="Logo" className="h-8 mr-2 cursor-pointer" />
			</div>
			<div className={styles.div}>
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
		</header>
	);
};

export default Header;
