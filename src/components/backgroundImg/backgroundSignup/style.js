import styled from "styled-components";

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	img {
		width: 100vw;
		height: 100vh;
	}
	.transparent {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100vw;
		height: 85vh;
		background-color: rgba(0, 0, 9, 0.33);
	}

	@media (max-width: 768px) {
		img {
			height: 70vh;
		}
		.transparent {
			height: 70vh;
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
