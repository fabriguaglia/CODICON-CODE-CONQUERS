import { Outlet, useLocation } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./authcontext"
import propTypes from "prop-types";
const ProtectedRouter = ({ children }) => {
	const { token } = useContext(AuthContext);

	const linksProtected = [
		"/profile",
		"/comunity",
		"/experience",
		"/event",
		"/message"
	]

	const location = useLocation();
	const path = location.pathname;

	if (!token) {
		return (
			<>
				{linksProtected.includes(path) ? <Outlet /> : <div>Unauthorized</div>}
			</>
		)
	} else {
		return (
			<>{children ? children : <Outlet />}</>
		)
	}
}
ProtectedRouter.propTypes = {
	children: propTypes.node
}

export default ProtectedRouter
