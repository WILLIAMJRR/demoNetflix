import styled from "styled-components";

export const Container = styled.div`
	width: 100vw;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 6rem;
	padding: 0 5rem;
	@media (max-width: 768px) {
		padding: 0 2rem;
	}
	.logo {
		img {
			width: 13rem;
		}
		@media (max-width: 768px) {
			img {
				width: 10rem;
			}
		}
	}
	button {
		padding: 0.5rem 0.8rem;
		background-color: #e50914;
		border: none;
		color: #fff;
		font-size: 1rem;
		font-weight: 800;
		border-radius: 0.2rem;
		cursor: pointer;
	}
`;
