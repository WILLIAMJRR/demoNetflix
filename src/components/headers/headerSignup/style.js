import styled from "styled-components";

export const Container = styled.div`
	width: 100vw;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 4rem;
	@media (max-width: 768px) {
		padding: 0 2rem;
	}
	figure {
		width: 150px;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		img {
			width: 100%;
			height: 100%;
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
