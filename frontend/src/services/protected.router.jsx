import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import AuthContext from "./authcontext";
import Swal from "sweetalert2";

const ProtectedRouter = () => {
	const { token, userId } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const path = location.pathname;
		const isPublicRoute = ["/", "/about", "/support"].includes(path);
		const isProtectedRoute = ["/create-community", "/community", "/create-experience", "/experience", "/message", "/user-feed"].includes(path);

		if (token && userId && isPublicRoute) {
			// Usuario autenticado en ruta pública, redirigir a ruta protegida (ej: "/community")
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Tu no estas autorizado para acceder a esta ruta",
				timer: 1500
			})
			navigate("/community");
		} else if (!token && !userId && isProtectedRoute) {
			// Usuario no autenticado en ruta protegida, redirigir a ruta pública (ej: "/")
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Tu no estas autorizado para acceder a esta ruta",
				timer: 1500
			})
			navigate("/");
		}
		// Si está en una ruta protegida y autenticado, o en pública y no autenticado, no hace nada (permite el acceso)
	}, [token, userId, location.pathname, navigate]);

	return <Outlet />;
};

export default ProtectedRouter;
