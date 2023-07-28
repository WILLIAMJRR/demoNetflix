import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	.content {
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.5);
		height: 100vh;
		width: 100vw;
		display: grid;
		grid-template-rows: 15vh 70vh;
		@media (max-width: 768px) {
			grid-template-rows: 10vh 50vh;
		}

		.text {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			h1 {
				color: #fff;
				font-size: 3rem;
				font-weight: bold;
				margin-bottom: 1rem;
				text-align: center;

				@media (max-width: 768px) {
					font-size: 2.1rem;
				}
			}

			h4 {
				color: #fff;
				font-size: 1.5rem;
				font-weight: 400;
				margin-bottom: 1rem;
				text-align: center;

				@media (max-width: 768px) {
					font-size: 1.2rem;
				}
			}

			h6 {
				color: #fff;
				font-size: 1rem;
				font-weight: 400;
				margin-bottom: 1rem;
				text-align: center;

				@media (max-width: 768px) {
					font-size: 1.2rem;
				}
			}
		}
		.body {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.form {
				display: flex;
				justify-content: center;
				align-items: center;
				gap: 0.5rem;
				@media (max-width: 768px) {
					flex-direction: column;
				}

				input {
					width: 25rem;
					height: 3rem;
					border: 0.5px solid #ffffff;
					background-color: rgba(8, 8, 8, 0.58);
					color: #ffffff;
					border-radius: 0.2rem;
					margin-bottom: 1rem;
					padding-left: 1rem;
					font-size: 1.1rem;

					&:focus {
						outline: none;
						border: 2px solid #ffffff;
						&::placeholder {
							font-size: 0.8rem;
							color: #fff;
							transform: translateY(-0.9rem);
							transition: all 0.5s ease;
						}
					}

					@media (max-width: 768px) {
						width: 22rem;
						height: 3rem;
						font-size: 1rem;

						@media (max-width: 425px) {
							width: 20rem;
							height: 3rem;
							font-size: 0.6rem;
						}
					}
				}
				.btn {
					width: 10rem;
					height: 3rem;
					border: none;
					border-radius: 0.2rem;
					margin-bottom: 1rem;
					background-color: #e50914;
					color: #fff;
					font-size: 1rem;
					font-weight: 600;
					cursor: pointer;
					@media (max-width: 768px) {
						width: 8rem;
						height: 2.5rem;
						font-size: 1rem;
						font-weight: 600;

						@media (max-width: 425px) {
							width: 10rem;
							height: 3rem;
							font-size: 1rem;
						}
					}
				}
			}
		}
	}
`;
