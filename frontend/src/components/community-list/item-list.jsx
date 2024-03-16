import React from "react";

const ItemList = ({ number, imageSrc, title, subtitle, isLocked }) => {
	return (
		<div className="flex justify-around items-center py-6 max-w-lg mx-20 min-h-6">
			<span className="mr-4 text-gray-700">{number}</span>
			<img
				src={imageSrc}
				alt="Imagen"
				className="w-16 h-16 rounded-full object-cover mr-4"
			/>
			<div className="grid grid-cols-2 gap-2 flex-grow">
				<div className="flex flex-col col-span-1 justify-between">
					<h3 className="col-span-2 text-lg font-medium">{title}</h3>
					<p className="col-span-2 text-sm text-gray-500">{subtitle}</p>
				</div>

				<div className="flex flex-col col-span-1 items-end justify-between">
					<span class="material-symbols-outlined">
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

export default ItemList;
