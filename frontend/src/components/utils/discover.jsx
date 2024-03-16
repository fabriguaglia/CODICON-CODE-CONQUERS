import React from "react";

const Discover = ({ backgroundColor }) => {
	return (
		<div
			className={`p-8 w-full h-fit ${backgroundColor} flex flex-col items-center`}
		>
			<h1 className="text-5xl text-white mb-8">
				Descubrir comunidades y experiencias
			</h1>
			<div className="flex justify-center">
				<input
					type="text"
					placeholder="Buscar"
					className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
				/>
			</div>
		</div>
	);
};

export default Discover;
