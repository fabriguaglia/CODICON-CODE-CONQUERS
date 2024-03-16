import React from "react";
import ItemList from "./item-list";
import Image from "../../assets/principal-image.png";

const CommunityList = ({ title, items, backgroundColor }) => {
	return (
		<div className={`max-w-full mx-auto px-4 py-8 ${backgroundColor} flex flex-col items-center`}>
			<h2 className="text-2xl font-bold mb-4">{title}</h2>
			<div className={`flex flex-col justify-around`}>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{items.map((item, index) => (
						<ItemList
							number={index + 1}
							imageSrc={Image}
							title="Titulo"
							subtitle="1 subtitulo"
						/>
					))}
				</div>
			</div>
			<div className="mt-8">
				<button className="bg-secondary-color text-white py-2 px-4 rounded-full hover:bg-opacity-80 transition duration-300">
					Ver más
				</button>
			</div>
		</div>
	);
};

export default CommunityList;
