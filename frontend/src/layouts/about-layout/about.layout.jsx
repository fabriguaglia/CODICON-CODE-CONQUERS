import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./about.layout.css"
import Codicon from "../../assets/codicon.png";
import Logo from "../../assets/principal-image.png";
import Gabo from "../../assets/gabo.png";
import Gabo2 from "../../assets/gabo2.png";
import carlos from "../../assets/carlos.png";
import carlos2 from "../../assets/carlos2.png";
import fabrizio from "../../assets/fabrizio.png";
import Ciro from "../../assets/Ciro.png";
import pc1 from "../../assets/pc1.png";
import pc2 from "../../assets/pc2.png";
import { FaPeopleGroup, FaPeopleRoof } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";



const AboutLayout = () => {

	const object = [
		{
			id: 1,
			title: "¿Quiene somos?",
			description: "En Transmivencia, creemos en la creación de un mundo más inclusivo y accesible para todos. Nuestra historia comenzó como una idea nacida durante un concurso de programación, la CODICON 2024, donde nos propusimos encontrar soluciones innovadoras para promover la inclusión y la diversidad en la tecnología. La palabra clave del concurso fue TRANSMISION.",
			icon: <img src={Codicon} alt="" />
		},
		{
			id: 2,
			title: "Plantear una misión",
			description: "Nos dimos cuenta de que muchos sectores de la sociedad, incluyendo a la comunidad LGBT y personas con discapacidad, enfrentan barreras en el acceso a la tecnología y la participación en la comunidad en línea.",
			icon: <FaPeopleGroup fontSize={60} />
		},
		{
			id: 3,
			title: "Nuestra misión",
			description: "Inspirados por esta realidad, surgió nuestra misión: utilizar la tecnología como una herramienta para fomentar la inclusión y brindar oportunidades equitativas para todos.",
			icon: <HiOutlineLightBulb fontSize={60} />
		},
		{
			id: 4,
			title: "Nuestra visión",
			description: "En Transmivencia, nos esforzamos por crear productos y servicios que sean accesibles, inclusivos y respetuosos con la diversidad de la humanidad. Nos enorgullece trabajar en colaboración con organizaciones y comunidades que comparten nuestros valores de igualdad y justicia social.",
			icon: <FaPeopleRoof fontSize={60} />
		},
		{
			id: 5,
			title: "Dedicacion",
			description: "Nuestra dedicación a la inclusión va más allá de nuestras palabras; nos comprometemos a actuar y crear un impacto positivo en la vida de las personas. A medida que avanzamos, seguimos trabajando para construir un mundo donde cada individuo sea valorado y respetado por quien es.			",
			icon: <FaHandHoldingHeart fontSize={60} />
		}
	]

	const team = [
		{
			id: 1,
			name: "Gabriel",
			img_profile: <img src={Gabo} className="h-[125px] w-[125px] rounded-full" alt="" />,
			role: "Full Stack Developer",
			description: "Soy un experto en desarrollo de software con experiencia en JavaScript, React, Node.js y Threejs. En este proyecto me encargué del backend.",
			instagram: "",
			linkdin: "",
			github: ""
		},
		{
			id: 2,
			name: "Carlos",
			img_profile: <img src={carlos} className="h-[125px] w-[125px] rounded-full" alt="" />,
			role: "Full Stack Developer",
			description: "Soy un experto en desarrollo de software con experiencia en JavaScript, React, Node.js y Threejs.",
			instagram: "",
			linkdin: "",
			github: ""
		},
		{
			id: 3,
			name: "Fabrizio",
			img_profile: <img src={fabrizio} className="h-[125px] w-[125px] rounded-full" alt="" />,
			role: "Full Stack Developer",
			description: "Desarrollador Web Fullstack y Desarrollador de Videojuegos. En este proyecto me encargué de diseñar la red social.",
			instagram: "",
			linkdin: "",
			github: ""
		},
		{
			id: 4,
			name: "Ciro",
			img_profile: <img src={Ciro} className="h-[125px] w-[125px] rounded-full" alt="" />,
			role: "Dessarrollador, Apoyo Creativo",
			description: "Desarrollador de Videojuegos con experiencia basica en python, c++ y c#. En este proyecto me encargué del apoyo creativo.",
			instagram: "",
			linkdin: "",
			github: ""
		}
	];

	const object2 = [
		{
			id: 1,
			pc: <img src={pc2} className="h-[275px] w-[250px] rounded-3xl" alt="" />,
		},
		{
			id: 2,
			pc: <img src={pc1} className="h-[275px] w-[250px] rounded-3xl" alt="" />,
		},
		{
			id: 3,
			pc: <img src={carlos2} className="h-[275px] w-[250px] rounded-3xl" alt="" />,
		},
		{
			id: 4,
			pc: <img src={Gabo2} className="h-[275px] w-[250px] rounded-3xl" alt="" />,
		}
	]

	const styles = {
		main: "flex flex-col items-center justify-center  text-white bg-[#224743]",
		logo: "h[360px] w-[360px]",
		div: "flex flex-col justify-center items-center py-8",
		div2: "flex flex-col items-center py-10 px-10 md:px-20 lg:px-40 gap-16",
		h1: "text-4xl font-bold",
		p: "text-center text-lg",
		h3: "text-2xl font-bold font-serif",
		team_grid: "grid grid-cols-1 lg:grid-cols-2 py-10 gap-6",
		team_card: "flex items-center w-full",
		img_profile: "flex items-center justify-end w-[25%] h-full rounded-full",
		profile: "flex flex-col px-6 w-[75%]",
		pp: "text-lg",
		pc: "flex h-[275px] w-[250px] rounded-3xl"
	}

	return (
		<div>
			<header>
				<Header />
			</header>
			<main className={styles.main}>
				<div className={styles.div}>
					<img className={styles.logo} src={Logo} alt="" />
				</div>
				{object.map((item) => (
					<div key={item.id} className={styles.div}>
						<h1 className={styles.h1}>{item.title}</h1>
						<div className={styles.div2} >
							{item.icon}
							<p className={styles.p}>{item.description}</p>
						</div>
					</div>
				))}
				<h3 className={styles.h3}>Gracias por ser parte de nuestro viaje hacia un futuro más inclusivo y justo para todos.</h3>
				<div className="flex flex-col items-center py-16">
					<h3 className={styles.h1}>Nuestro Equipo</h3>
					<div className={styles.team_grid}>
						{team.map((item) => (
							<div className={styles.team_card} key={item.id}>
								<div className={styles.img_profile}>{item.img_profile}</div>
								<div className={styles.profile}>
									<h3 className={styles.h3}>{item.name}</h3>
									<p className={styles.pp} >{item.role}</p>
									<p className={styles.pp} >{item.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="flex flex-wrap items-center justify-around w-full py-16 px-4">
					{object2.map((item) => (
						<div key={item.id} className={styles.pc}>
							{item.pc}
						</div>
					))}
				</div>
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default AboutLayout
