import React from "react";

const ItemList = ({ number, imageSrc, title, subtitle }) => {
	return (
		<div className="flex items-center py-6 border-b border-gray-200 max-w-lg mx-10">
			<span className="mr-4 text-gray-700">{number}</span>
			<img
				src={imageSrc}
				alt="Imagen"
				className="w-12 h-12 rounded-full object-cover mr-4"
			/>
			<div>
				<h3 className="text-lg font-semibold">{title}</h3>
				<div className="flex items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-4 w-4 text-gray-400 mr-1"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M10 0a9.98 9.98 0 00-7.072 2.928A9.98 9.98 0 000 10c0 2.612 1.02 5.051 2.928 6.929A9.98 9.98 0 0010 20c2.611 0 5.05-1.018 6.929-2.929A9.98 9.98 0 0020 10c0-2.611-1.019-5.05-2.929-6.929A9.98 9.98 0 0010 0zM8 15a1 1 0 11-2 0 1 1 0 012 0zm4-8a1 1 0 00-1 1v3a1 1 0 002 0V8a1 1 0 00-1-1z"
							clipRule="evenodd"
						/>
					</svg>
					<p className="text-sm text-gray-500">{subtitle}</p>
				</div>
			</div>
			<button className="ml-auto bg-primary-color text-white py-1 px-4 rounded-full flex items-center">
				Unirse
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-4 w-4 ml-1"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M12.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414-1.414L10.586 10 4.293 3.707a1 1 0 111.414-1.414l7 7z"
						clipRule="evenodd"
					/>
				</svg>
			</button>
		</div>
	);
};

export default ItemList;
