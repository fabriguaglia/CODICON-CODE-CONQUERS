import propTypes from "prop-types";

const CommmunityView = ({ index, community, goBack }) => {
	return (
		<div className="container relative mx-auto px-4 py-8">
			<button onClick={()=>goBack()}
            className="back-button absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 h-8 w-8 bg-secondary-color rounded-r-full flex items-center justify-center">
				<svg
					className="h-4 w-4 text-white"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M17.707 2.293a1 1 0 0 1 0 1.414L11.414 10l6.293 6.293a1 1 0 0 1-1.414 1.414L10 11.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L8.586 10 2.293 3.707a1 1 0 0 1 1.414-1.414L10 8.586l6.293-6.293a1 1 0 0 1 1.414 0z"
						clipRule="evenodd"
					/>
				</svg>
			</button>
			<div className="flex flex-wrap items-center">
				<div className="w-full md:w-1/2 md:pr-4 mb-4 md:mb-0">
					<h2 className="text-3xl font-bold mb-2">{community.name}</h2>
					<p className="mb-4">{community.description}</p>
					<div className="flex flex-wrap">
						<div>Creado por {community.user_id}</div>
						<div>Edad recomendada {community.limit} </div>
					</div>
				</div>
				{/* Columna 2 */}
				<div className="w-full md:w-1/2">
					<img
						src={"http://localhost:3002/images/" + community.comunity_image}
						alt="Imagen"
						className="w-full h-auto rounded-md"
					/>
				</div>
			</div>
		</div>
	);
};

export default CommmunityView;
