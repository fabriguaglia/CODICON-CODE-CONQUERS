import propTypes from "prop-types";
const Politics = ({ setOpen }) => {

	const handleClose = () => {
		setOpen(false);
	}
	return (
		<div>
			<button onClick={handleClose}>Politics & Privacy</button>
		</div>
	)
}

Politics.propTypes = {
	setOpen: propTypes.func
}

export default Politics
