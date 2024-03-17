import propTypes from "prop-types";

const CommmunityView = ({ index, community, goBack }) => {
	return (
		<div className="container relative mx-auto px-4 py-8">
			<button
				onClick={() => goBack()}
				className="back-button absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 h-12 w-12 bg-primary-color rounded-r-full flex items-center justify-center"
			>
				<svg
					className="h-6 w-6 text-white"
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
					<div className="flex flex-row justify-between items-center">
						<div>Edad recomendada {community.limit} </div>
						<button className="bg-secondary-color text-md font-medium text-white px-8 rounded-full hover:bg-opacity-80 transition duration-300 uppercase">
							+ Seguir
						</button>
					</div>
					<div>Reacciones {community.reactions} </div>
				</div>
				{/* Columna 2 */}
				<div className="w-1/3">
					<img
						src={"http://localhost:3002/images/" + community.comunity_image}
						alt="Imagen"
						className="w-max h-auto rounded-md"
					/>
				</div>
			</div>
		</div>
	);
};

CommmunityView.propTypes = {
	index: propTypes.number,
	community: propTypes.object,
	goBack: propTypes.func
}
export default CommmunityView;
