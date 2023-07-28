import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	.content {
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;

		.transparent_modal {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			background-color: rgba(0, 0, 0, 0.84);
			height: 700px;
			width: 500px;
			border-radius: 5px;

			@media (max-width: 768px) {
				margin-top: 5rem;
				width: 80vw;
				height: 90%;
			}
			@media (max-width: 550px) {
				margin-top: 0rem;
				display:block;
				margin:auto;

			}
			.content_form {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				gap: 1rem;
				margin-bottom: 4rem;
				h2 {
					width: 300px;
					color: #fff;
					font-size: 2rem;
					font-weight: 600;
					text-align: left;
					@media (max-width: 550px) {
						font-size: 2rem;
						margin-bottom: 0.5rem;
						width: 85vw;
						font-weight: 400;
					}
				}

				form {
					display: flex;
					flex-direction: column;
					justify-content: center;
					gap: 1rem;

					input {
						width: 300px;
						height: 3rem;
						background-color: #333333;
						border: none;
						border-radius: 5px;
						padding-left: 1rem;
						color: #fff;
						font-size: 1rem;
						font-weight: 400;
						transition: all 0.5s ease;
						&::placeholder {
							font-size: 1rem;
							color: #fff;
							transition: all 0.5s ease;
						}

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
						@media (max-width: 550px) {
							width: 85vw;
						}
					}
					button {
						margin-top: 3rem;
						width: 300px;
						height: 3rem;
						background-color: #e50914;
						border: none;
						border-radius: 5px;

						color: #fff;
						font-size: 1rem;
						font-weight: 600;
						transition: all 0.5s ease;
						cursor: pointer;
						@media (max-width: 550px) {
							margin-top: 1.5rem;
							width: 85vw;
						}
					}
				}
				.content_form_help {
					display: flex;
					justify-content: space-between;
					align-items: center;
					width: 300px;
					.form_remember {
						display: flex;
						align-items: center;

						input {
							width: 1rem;
							height: 1rem;
						}
						label {
							margin-left: 0.2rem;
							color: #a09f9f;
						}
					}
					a {
						color: #a09f9f;
						text-decoration: none;
						font-size: 1rem;
						font-weight: 400;
					}
					@media (max-width: 550px) {
						width: 85vw;
					}
				}
			}
			.content_social {
				display: flex;
				flex-direction: column;
				justify-content: center;
				gap: 1rem;
				width: 300px;
				height: 100px;
				h6 {
					color: #a09f9f;
					font-size: 1rem;
					font-weight: 400;
					a {
						color: #fff;
						cursor: pointer;
						text-decoration: none;
					}
				}
				h4 {
					color: #a09f9f;
					font-size: 0.8rem;
					font-weight: 400;
					span {
						color: #2365df;
						cursor: pointer;
					}
					.inactive {
						display: none;
					}
				}
				@media (max-width: 550px) {
					width: 85vw;
				}
			}
			.content_parrafo {
				color: #a09f9f;
				font-size: 0.8rem;
				font-weight: 400;
				width: 300px;
				span {
					color: #2365df;
					cursor: pointer;
				}
				@media (max-width: 550px) {
					width: 85vw;
				}
			}
		}
		@media (max-width: 550px) {
			margin-top: 0rem;
			background-color: rgb(0, 0, 0);
			height: 100vh;
			width: 100vw;
		}
	}
`;
