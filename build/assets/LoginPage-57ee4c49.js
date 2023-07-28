import{s as a,j as e,r as l,u as x,a as c,b as u,c as w,L as m,_ as n}from"./index-8f511b72.js";import{L as v,l as b}from"./firebase-config-5e11f353.js";import{u as j}from"./useDispatch-7eff7e54.js";const y=a.div`
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
`,_=()=>e.jsx(y,{children:e.jsx("div",{className:"logo",children:e.jsx("img",{src:v,alt:"logo"})})}),C=a.div`
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
`,N=()=>e.jsxs(C,{children:[e.jsx("img",{src:"https://assets.nflxext.com/ffe/siteui/vlv3/bff5732c-7d13-45d1-9fab-476db25a1827/7d5a69bb-3f56-4468-b565-aaf59c718e1a/CL-es-20230710-popsignuptwoweeks-perspective_alpha_website_large.jpg",alt:""}),e.jsx("div",{className:"transparent"})]}),k=a.div`
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
`,S=()=>{const[i,h]=l.useState(!1),s=j(),o=x();l.useEffect(()=>{localStorage.getItem("userState")&&o("/netflix")},[o]);const d=c(t=>t.user.userEmail),f=c(t=>t.user.userPassword),p=()=>{h(!i)},g=async t=>{t.preventDefault();try{(await b({email:d,password:f})).operationType==="signIn"&&(n.success("Welcome to Netflix"),localStorage.setItem("userState",!0),o("/netflix"))}catch(r){r.code==="auth/user-not-found"?n.error("The email address is not registered"):r.code==="auth/wrong-password"&&n.error("The password is invalid"),console.log(r)}};return e.jsxs(k,{children:[e.jsx(N,{}),e.jsxs("div",{className:"content",children:[e.jsx(_,{}),e.jsx("div",{className:"transparent_modal",children:e.jsxs("div",{className:"content_form",children:[e.jsx("h2",{children:"Sign In"}),e.jsxs("form",{onSubmit:g,children:[e.jsx("input",{type:"text",placeholder:"Email",required:!0,defaultValue:d,onChange:t=>s(u({userEmail:t.target.value.trim().toLowerCase()}))}),e.jsx("input",{autoComplete:"off",type:"password",placeholder:"Password",required:!0,onChange:t=>s(w({userPassword:t.target.value}))}),e.jsx("button",{type:"submit",children:"Sign In"})]}),e.jsxs("div",{className:"content_form_help",children:[e.jsxs("div",{className:"form_remember",children:[e.jsx("input",{htmlFor:"remember",type:"checkbox",name:"remember",id:"remember"}),e.jsx("label",{htmlFor:"remember",id:"remember",children:"Remember me"})]}),e.jsx("div",{children:e.jsx(m,{to:"/Help",children:"Need help?"})})]}),e.jsxs("div",{className:"content_social",children:[e.jsxs("h6",{children:["New to Netflix? ",e.jsx(m,{to:"/",children:"Sign up now."})]}),e.jsxs("h4",{children:["This page is protected by Google reCAPTCHA to ensure you are not a bot."," ",e.jsx("span",{className:`${i?"inactive ":""}`,onClick:p,children:"Learn more."})]})]}),i&&e.jsx("div",{className:"content_parrafo",children:e.jsxs("p",{children:["The information collected by Google reCAPTCHA is subject to the Google ",e.jsx("span",{children:"Privacy Policy"})," and"," ",e.jsx("span",{children:" Terms of Service"}),", and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google)."]})})]})})]})]})};export{S as default};
