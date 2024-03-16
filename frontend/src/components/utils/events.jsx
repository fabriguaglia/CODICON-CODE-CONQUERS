import React from "react";
import YouTubePlayer from "./youtube-player";

const Event = ({backgroundColor}) => {
	return (
		<div className={`p-8 w-full h-fit ${backgroundColor} flex flex-col items-center`}>
			<h1 className="text-5xl text-white">Eventos en curso</h1>
			<div className="flex flex-row justify-around items-center">
				<div className="w-2/4 h-auti p-4">
					<p className="text-xl text-white">
						¡Únete a nosotros para celebrar la diversidad en nuestro evento
						especial! Te invitamos a participar en un día lleno de alegría,
						música y camaradería mientras honramos la belleza de nuestras
						diferencias. Será un momento para conectar, aprender y celebrar
						juntos. ¡Esperamos verte allí!
					</p>
				</div>

				<div className="app">
					<YouTubePlayer videoId="LF7AezBpqzg" />
				</div>
			</div>
		</div>
	);
};

export default Event;
