import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import propTypes from "prop-types";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

	const [userId, setUserId] = useState(null);
	const [token, setToken] = useState(null);

	return (
		<AuthContext.Provider
			value={{
				userId,
				setUserId,
				token,
				setToken
			}}
		>
			{children ? children : <Outlet />}
		</AuthContext.Provider>
	)
}

AuthContextProvider.propTypes = {
	children: propTypes.node
}

export default AuthContext
