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
		grid-template-rows: 15vh 85vh;
		.text {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			h1 {
				color: #fff;
				font-size: 3rem;
				font-weight: 700;
				margin-bottom: 1rem;

				@media (max-width: 768px) {
					font-size: 2rem;

					@media (max-width: 425px) {
						font-size: 1.5rem;

          }
        }
      }
}
			h4 {
				color: #fff;
				font-size: 1.5rem;
				font-weight: 400;
				margin-bottom: 1rem;

				@media (max-width: 768px) {
					font-size: 1rem;

					@media (max-width: 425px) {
						font-size: 0.8rem;

						@media (max-width: 320px) {
							font-size: 0.6rem;

							@media (max-width: 280px) {
								font-size: 0.4rem;

								@media (max-width: 240px) {
									font-size: 0.3rem;

									@media (max-width: 200px) {
										font-size: 0.2rem;

										@media (max-width: 160px) {
											font-size: 0.1rem;

											@media (max-width: 120px) {
												font-size: 0.05rem;
											}

	}
}
}
}
}
}
}
}

			h6 {
				color: #fff;
				font-size: 1rem;
				font-weight: 400;
				margin-bottom: 1rem;


				@media (max-width: 768px) {
					font-size: 0.8rem;

					@media (max-width: 425px) {
						font-size: 0.6rem;

						@media (max-width: 320px) {
							font-size: 0.4rem;

							@media (max-width: 280px) {
								font-size: 0.3rem;

								@media (max-width: 240px) {
									font-size: 0.2rem;

									@media (max-width: 200px) {
										font-size: 0.1rem;

										@media (max-width: 160px) {
											font-size: 0.05rem;

											@media (max-width: 120px) {
												font-size: 0.03rem;
											}

	}
}
}
}
}
}
}
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

				input {
					width: 20rem;
					height: 3rem;
					border: none;
					background-color:#00000999;
          color: #fff;

					&:focus {
						outline: none;
						border: 1px solid #ffffff;
						&::placeholder {
							font-size: 0.8rem;
							color: #fff;
							transform: translateY(-0.9rem);
							transition: all 0.5s ease;
						}
					}


					border-radius: 0.2rem;
					margin-bottom: 1rem;
					padding-left: 1rem;
					font-size: 1rem;
					@media (max-width: 768px) {
						width: 20rem;
						height: 2rem;
						font-size: 0.8rem;

						@media (max-width: 425px) {
							width: 15rem;
							height: 1.5rem;
							font-size: 0.6rem;

							@media (max-width: 320px) {
								width: 10rem;
								height: 1rem;
								font-size: 0.4rem;

								@media (max-width: 280px) {
									width: 8rem;
									height: 0.8rem;
									font-size: 0.3rem;

									@media (max-width: 240px) {
										width: 6rem;
										height: 0.6rem;
										font-size: 0.2rem;

										@media (max-width: 200px) {
											width: 4rem;
											height: 0.4rem;
											font-size: 0.1rem;

										}
									}
								}
							}
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
						width: 20rem;
						height: 2rem;
						font-size: 0.8rem;

						@media (max-width: 425px) {
							width: 15rem;
							height: 1.5rem;
							font-size: 0.6rem;

							@media (max-width: 320px) {
								width: 10rem;
								height: 1rem;
								font-size: 0.4rem;

								@media (max-width: 280px) {
									width: 8rem;
									height: 0.8rem;
									font-size: 0.3rem;

									@media (max-width: 240px) {
										width: 6rem;
										height: 0.6rem;
										font-size: 0.2rem;

										@media (max-width: 200px) {
											width: 4rem;
											height: 0.4rem;
											font-size: 0.1rem;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	@media (max-width: 768px) {
		.content {
			.body {
				.form {
					flex-direction: column;
					input {
						width: 20rem;
						height: 2.8rem;
						font-size: 0.8rem;
						border-radius: 0.2rem;
						border: 1px solid #333333;

						@media (max-width: 425px) {
							width: 15rem;

							height: 1.5rem;
							font-size: 0.6rem;

							@media (max-width: 320px) {
								width: 10rem;
								height: 1rem;
								font-size: 0.4rem;

								@media (max-width: 280px) {
									width: 8rem;
									height: 0.8rem;
									font-size: 0.3rem;

									@media (max-width: 240px) {
										width: 6rem;
										height: 0.6rem;
										font-size: 0.2rem;
									}
								}
							}
						}
					}
					.btn {
						width: 8rem;
						height: 2.5rem;
						font-size: 0.8rem;

						@media (max-width: 425px) {
							width: 15rem;
							height: 1.5rem;
							font-size: 0.6rem;

							@media (max-width: 320px) {
								width: 10rem;
								height: 1rem;
								font-size: 0.4rem;

								@media (max-width: 280px) {
									width: 8rem;
									height: 0.8rem;
									font-size: 0.3rem;

									@media (max-width: 240px) {
										width: 6rem;
										height: 0.6rem;
										font-size: 0.2rem;
									}
								}
							}
						}
					}
				}
			}
		}
	}
	@media (max-width: 425px) {
		.content {
			.body {
				.form {
					input {
						width: 15rem;
						height: 1.5rem;
						font-size: 0.6rem;

						@media (max-width: 320px) {
							width: 10rem;
							height: 1rem;
							font-size: 0.4rem;

							@media (max-width: 280px) {
								width: 8rem;
								height: 0.8rem;
								font-size: 0.3rem;

								@media (max-width: 240px) {
									width: 6rem;
									height: 0.6rem;
									font-size: 0.2rem;
								}
							}
						}
					}
				}
			}
		}

	}
	@media (max-width: 320px) {
		.content {
			.body {
				.form {
					input {
						width: 10rem;
						height: 1rem;
						font-size: 0.4rem;

						@media (max-width: 280px) {
							width: 8rem;
							height: 0.8rem;
							font-size: 0.3rem;

							@media (max-width: 240px) {
								width: 6rem;
								height: 0.6rem;
								font-size: 0.2rem;
							}
						}
					}
				}
			}
		}

	}


`;
