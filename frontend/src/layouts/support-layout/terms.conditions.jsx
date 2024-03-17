import propTypes from "prop-types";

const TermsConditions = ({ setOpen }) => {

	const handleClose = () => {
		setOpen(false);
	}

	return (
		<div>
			<button onClick={handleClose}>Terms & Conditions</button>

			{/**Escribir para abajo */}


		</div>
	)
}

TermsConditions.propTypes = {
	open: propTypes.bool,
	setOpen: propTypes.func
}

export default TermsConditions
