// En el archivo audio.play.jsx
import { useEffect, useRef } from 'react';
import propTypes from 'prop-types';

const AudioPlay = ({ audioUrl }) => {
	const audioRef = useRef(new Audio(audioUrl));

	useEffect(() => {
		// Prevenir memory leaks
		const currentAudio = audioRef.current;
		return () => {
			currentAudio.pause();
		};
	}, [audioUrl]);

	const playAudio = () => {
		audioRef.current.play();
	};

	const pauseAudio = () => {
		audioRef.current.pause();
	};

	return (
		<div>
			<button onClick={playAudio}>Reproducir</button>
			<button onClick={pauseAudio}>Pausar</button>
		</div>
	);
};

AudioPlay.propTypes = {
	audioUrl: propTypes.string
}

export default AudioPlay;
