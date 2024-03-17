import propTypes from "prop-types";
const Tutorial = ({ setOpen }) => {

	const handleClose = () => {
		setOpen(false);
	}
	return (
		<div>
			<button onClick={handleClose}>Tutorial</button>
		</div>
	)
}

Tutorial.propTypes = {
	setOpen: propTypes.func
}

export default Tutorial
