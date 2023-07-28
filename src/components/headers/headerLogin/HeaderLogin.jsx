import { Container } from "./style";
import logoNetflix from "/src/assets/img/netflix-2-logo-svgrepo-com.svg";

const HeaderLogin = () => {
	return (
		<Container>
			<div className='logo'>
				<img
					src={logoNetflix}
					alt='logo'
				/>
			</div>
		</Container>
	);
};

export default HeaderLogin;
