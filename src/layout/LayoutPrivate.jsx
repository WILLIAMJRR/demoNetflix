import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const LayoutPrivate = () => {



	const navigate = useNavigate();

	useEffect(() => {
		if (!localStorage.getItem("userState")) {
			navigate("/login");
		}
   }, [navigate]);


	return (
		<div>
			<Outlet />
		</div>
	);
};

export default LayoutPrivate;
