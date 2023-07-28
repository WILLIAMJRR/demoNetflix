import styled from "styled-components";

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	img {
		width: 125vw;
		height: 100vh;
	}
	.transparent {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 9, 0.43);
	}

	@media (max-width: 768px) {
		img {
			height: 100vh;
		}
		.transparent {
			height: 100vh;
		}
	}

	@media (max-width: 425px) {
		img {
			height: 60vh;
		}
		.transparent {
			height: 60vh;
		}
	}
`;
