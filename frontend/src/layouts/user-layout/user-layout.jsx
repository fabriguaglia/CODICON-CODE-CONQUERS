import { useState, useContext } from "react";
import AuthContext from "../../services/authcontext";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Landing from "../../components/landing/landing";
import CommunityList from "../../components/community-list/community-list";
import ExperienceList from "../../components/experiences/experiences-list";
import Event from "../../components/utils/events";
import Discover from "../../components/utils/discover";

const UserLayout = () => {
	return (
		<div>
			<header>
				{/* El componente Header se importa y se renderiza en el layout */}
				<Header />
			</header>
			<main>
				{/* El componente Landing se importa y se renderiza en el layout
                    Este es el HERO de la aplicacion */}
				<Landing userLogged={true} />
				{/* El componente communityList se importa y se renderiza en el layout con los valores de title, items y backgroundColor
                Este componente generara una lista de ItemList dependiendo de la cantidad de items que se le pasen */}
				<CommunityList title="Comunidades" backgroundColor="bg-dark-color" />
				<ExperienceList items={["", "", "", "", "", "", "", "", "", "", ""]} backgroundColor="bg-dark-color" />
				<Event backgroundColor="bg-dark-color" />
				<Discover backgroundColor="bg-dark-color" />
			</main>
			<footer>
				{/* El componente Footer se importa y se renderiza en el layout */}
				<Footer />
			</footer>
		</div>
	);
};

export default UserLayout;
