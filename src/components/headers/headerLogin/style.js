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
		width: 180px;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		img {
			width: 100%;
			height: 100%;
		}
	}
`;
