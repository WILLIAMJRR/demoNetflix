import LogoLoading from "../../assets/img/netflix-1-logo-svgrepo-com.svg";
import styled from "styled-components";
const Loading = () => {
	return (
		<>
			<Container>
				<img
					src={LogoLoading}
					alt='img loading'
				/>
			</Container>
		</>
	);
};

const Container = styled.figure`
   width: 100vw;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;

   img{
      width: 20%;
      height: 20%;
   }



   `;

export default Loading;
