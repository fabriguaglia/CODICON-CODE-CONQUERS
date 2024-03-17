import propTypes from "prop-types";

const ItemList = ({ index, community, communityButton }) => {
	return (
		<div className="flex justify-around items-center py-6 max-w-lg mx-20 min-h-6">
			<span className="mr-4 text-gray-700">{index}</span>
			<img
				src={"http://localhost:3002/images/" + community.comunity_image}
				alt="Imagen"
				className="w-16 h-16 rounded-full object-cover mr-4"
			/>
			<div className="grid grid-cols-2 gap-2 flex-grow">
				<div className="flex flex-col col-span-1 justify-between">
					<h3 className="col-span-2 text-lg font-medium">{community.name}</h3>
					<p className="col-span-2 text-sm text-gray-500">
						{community.limit + "reacciones"}
					</p>
				</div>
				<div className="flex flex-col col-span-1 items-end justify-between">
					<span className="material-symbols-outlined">lock_open</span>
					<button
						className="ml-auto bg-primary-color text-white py-1 px-4 mt-2 rounded-full flex items-center "
						onClick={() => {communityButton(index-1)}}
					>
						Conocer
						<span className="ml-1">➜</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ItemList;
