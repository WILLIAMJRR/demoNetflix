import { useEffect, useState } from "react";
import Background from "../../components/backgroundImg/backgroundSignup/BackgroundSignup";
import Headers from "../../components/headers/headerSignup/Header";
import { Container } from "./style";
// import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserEmail, setUserPassword } from "../../redux/store/User.slice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { register } from "../../config/firebase-config";

const SignupPage = () => {
	const [inputHidden, setInputHidden] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const dataFormEmail = useSelector((state) => state.user.userEmail);

	const dataFormPassword = useSelector((state) => state.user.userPassword);

	useEffect(() => {
		if (localStorage.getItem("userState")) {
			navigate("/netflix");
		}
	}, [navigate]);

	const handleGetStarted = async (e) => {
		e.preventDefault();

		try {
			if (dataFormEmail === "" && dataFormEmail.length === 0) {
				const input = document.querySelector("input");
				input.focus();
			} else if (
				dataFormEmail.length < 6 ||
				dataFormEmail.indexOf("@") === -1
			) {
				toast.error(`Please enter a valid email address`);
			} else if (dataFormPassword.length >= 6) {
				const credentialUser = await register({
					email: dataFormEmail,
					password: dataFormPassword,
				});

				if (credentialUser.operationType === "signIn") {
					toast.success(`user created successfully`);
					navigate("/login");
					dispatch(setUserPassword({ userPassword: "" }));
				}
			} else if (dataFormPassword.length < 6) {
				setInputHidden(true);
				const input = document.querySelector("input[type='password']");
				input.focus();
				toast.error(`Your password must contain between 6 and 60 characters`);
			} else if (dataFormEmail.length === 0) {
				toast.error(`Please enter a valid email address`);
			}
		} catch (error) {
			if (error.code === "auth/email-already-in-use") {
				toast.error(`The email address is already in use by another account`);
			} else if (error.code === "auth/invalid-email") {
				toast.error(`Please enter a valid email address`);
			} else if (error.code === "auth/weak-password") {
				toast.error(`Your password must contain between 6 and 60 characters`);
			}
			console.log(error);
		}
	};

	return (
		<Container>
			<Background />
			<div className='content'>
				<Headers />
				<div className='body'>
					<div className='text'>
						<h1>Unlimited movies, TV shows, and more </h1>
						<h4>Watch anywhere. Cancel anytime.</h4>
						<h6>
							Ready to watch? Enter your email to create or restart your
							membership.
						</h6>
					</div>
					<form className='form'>
						<input
							name='email'
							type='text'
							placeholder='Email'
							required
							defaultValue={dataFormEmail}
							onChange={(e) =>
								dispatch(
									setUserEmail({
										userEmail: e.target.value.trim().toLowerCase(),
									}),
								)
							}
						/>
						{inputHidden && (
							<input
								name='Password'
								type='password'
								autoComplete='off'
								placeholder='Password'
								required
								onChange={(e) =>
									dispatch(
										setUserPassword({
											userPassword: e.target.value.trim(),
										}),
									)
								}
							/>
						)}

						<button
							className='btn'
							onClick={handleGetStarted}
						>
							Get Started
						</button>
					</form>
				</div>
			</div>
		</Container>
	);
};

export default SignupPage;
