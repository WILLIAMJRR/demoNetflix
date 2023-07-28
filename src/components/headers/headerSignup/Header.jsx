import { Container } from "./style";

import logoNetflix from "/src/assets/img/netflix-2-logo-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";
const Header = () => {

	//el use navigate es para navegar entre las paginas sin necesidad de usar el link

	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate("/login");
	};

	return (
		<Container>
			<div className='logo'>
				<img
					src={logoNetflix}
					alt='logo'
				/>
			</div>

			{/* //aqui indica que si props es true entonces que muestre sign out y si es false que muestre sign in */}
			<button onClick={handleNavigate}>Log in</button>
		</Container>
	);
};

export default Header;
