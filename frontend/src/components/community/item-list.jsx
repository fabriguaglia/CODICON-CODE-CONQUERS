import propTypes from "prop-types";

const ItemList = ({ name, description, comunity_image, number, state, reactions, isLocked }) => {
	return (
		<div className="flex justify-around items-center py-6 max-w-lg mx-20 min-h-6">
			<span className="mr-4 text-gray-700">edad de {number} años o mayor</span>
			<img
				src={"http://localhost:3002/images/" + comunity_image}
				alt="Imagen"
				className="w-16 h-16 rounded-full object-cover mr-4"
			/>
			<div className="grid grid-cols-2 gap-2 flex-grow">
				<div className="flex flex-col col-span-1 justify-between">
					<h3 className="col-span-2 text-lg font-medium">{name}</h3>
					<p className="col-span-2 text-sm text-gray-500">{description}</p>
					<p className="col-span-2 text-sm text-gray-500">
						{reactions.length} Reacciones
					</p>
					<p className="col-span-2 text-sm text-gray-500">
						{state ? "Publica" : "Privada"}
					</p>
				</div>
				<div className="flex flex-col col-span-1 items-end justify-between">
					<span className="material-symbols-outlined">
						lock_open
					</span>
					<button className="ml-auto bg-primary-color text-white py-1 px-4 mt-2 rounded-full flex items-center ">
						Unirse
						<span className="ml-1">➜</span>
					</button>
				</div>
			</div>
		</div>
	);
};

ItemList.propTypes = {
	name: propTypes.string,
	description: propTypes.string,
	comunity_image: propTypes.string,
	number: propTypes.number,
	state: propTypes.bool,
	reactions: propTypes.array,
	isLocked: propTypes.bool,
}

export default ItemList;
