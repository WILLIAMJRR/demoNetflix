import styled from "styled-components";

const Container = styled.div`
	.scrolled {
		display: flex;
	}
	nav {
		position: sticky;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		background-color: #000;
		padding: 0 20px;
		transition: all 0.5s ease;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 68px;
		width: 100%;
		margin: 0 auto;
		max-width: 100%;
		box-sizing: border-box;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
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
		.left {
			display: flex;
			justify-content: center;
			align-items: center;
			ul {
				display: flex;
				justify-content: center;
				align-items: center;
				list-style: none;
				li {
					margin: 0 10px;
					a {
						color: #fff;
						text-decoration: none;
						font-size: 14px;
						font-weight: 400;
						&:hover {
							color: #fff;
							text-decoration: underline;
						}
					}
				}
			}
		}
		.right {
			display: flex;
			justify-content: center;
			align-items: center;

			.search {
				position: relative;
				button {
					position: absolute;
					top: 0;
					right: 0;
					width: 40px;
					height: 100%;
					background-color: transparent;
					border: none;
					outline: none;
					cursor: pointer;
					svg {
						color: #fff;
						font-size: 20px;
					}
				}
			}
			input {
				width: 200px;
				height: 30px;
				background-color: transparent;
				border: none;
				outline: none;
				color: #fff;
				font-size: 14px;
				font-weight: 600;
				padding: 0 10px;
				border-bottom: 1px solid rgba(255, 255, 255, 0.2);
				transition: all 0.5s ease;
				&:focus {
					width: 300px;
				}
			}
			button {
				width: 40px;
				height: 40px;
				background-color: transparent;
				border: none;
				outline: none;
				cursor: pointer;
				svg {
					color: #eb0909;
					font-size: 20px;
				}
			}
		}
	}
	.show-search {
		input {
			width: 300px;
		}
	}
	@media (max-width: 768px) {
		nav {
			padding: 0 10px;
			.left {
				ul {
					display: none;
				}
			}
			.right {
				.search {
					button {
						svg {
							font-size: 16px;
						}
					}
				}
				button {
					svg {
						font-size: 16px;
					}
				}
			}
		}
	}
	@media (max-width: 425px) {
		nav {
			padding: 0 10px;
			.left {
				ul {
					display: none;
				}
			}
		}
	}
`;

export default Container;
