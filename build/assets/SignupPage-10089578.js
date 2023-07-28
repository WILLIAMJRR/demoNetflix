import{s as m,j as e,u,r as c,a as h,b as p,c as f,_ as a}from"./index-ded45892.js";import{L as x,r as w}from"./firebase-config-30544efa.js";import{u as b}from"./useDispatch-ccc2444b.js";const v=m.div`
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
`,y=()=>e.jsxs(v,{children:[e.jsx("img",{src:"https://assets.nflxext.com/ffe/siteui/vlv3/bff5732c-7d13-45d1-9fab-476db25a1827/7d5a69bb-3f56-4468-b565-aaf59c718e1a/CL-es-20230710-popsignuptwoweeks-perspective_alpha_website_large.jpg",alt:""}),e.jsx("div",{className:"transparent"})]}),j=m.div`
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
`,z=()=>{const s=u(),o=()=>{s("/login")};return e.jsxs(j,{children:[e.jsx("figure",{className:"logo",children:e.jsx("img",{src:x,alt:"logo"})}),e.jsx("button",{onClick:o,children:"Log in"})]})},C=m.div`
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
`,E=()=>{const[s,o]=c.useState(!1),n=u(),d=b(),r=h(t=>t.user.userEmail),l=h(t=>t.user.userPassword);c.useEffect(()=>{localStorage.getItem("userState")&&n("/netflix")},[n]);const g=async t=>{t.preventDefault();try{r===""&&r.length===0?document.querySelector("input").focus():r.length<6||r.indexOf("@")===-1?a.error("Please enter a valid email address"):l.length>=6?(await w({email:r,password:l})).operationType==="signIn"&&(a.success("user created successfully"),n("/login"),d(f({userPassword:""}))):l.length<6?(o(!0),document.querySelector("input[type='password']").focus(),a.error("Your password must contain between 6 and 60 characters")):r.length===0&&a.error("Please enter a valid email address")}catch(i){i.code==="auth/email-already-in-use"?a.error("The email address is already in use by another account"):i.code==="auth/invalid-email"?a.error("Please enter a valid email address"):i.code==="auth/weak-password"&&a.error("Your password must contain between 6 and 60 characters"),console.log(i)}};return e.jsxs(C,{children:[e.jsx(y,{}),e.jsxs("div",{className:"content",children:[e.jsx(z,{}),e.jsxs("div",{className:"body",children:[e.jsxs("div",{className:"text",children:[e.jsx("h1",{children:"Unlimited movies, TV shows, and more "}),e.jsx("h4",{children:"Watch anywhere. Cancel anytime."}),e.jsx("h6",{children:"Ready to watch? Enter your email to create or restart your membership."})]}),e.jsxs("form",{className:"form",children:[e.jsx("input",{name:"email",type:"text",placeholder:"Email",required:!0,defaultValue:r,onChange:t=>d(p({userEmail:t.target.value.trim().toLowerCase()}))}),s&&e.jsx("input",{name:"Password",type:"password",autoComplete:"off",placeholder:"Password",required:!0,onChange:t=>d(f({userPassword:t.target.value.trim()}))}),e.jsx("button",{className:"btn",onClick:g,children:"Get Started"})]})]})]})]})};export{E as default};
