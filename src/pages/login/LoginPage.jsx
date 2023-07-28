import { useEffect, useState } from "react";

import HeaderLogin from "../../components/headers/headerLogin/HeaderLogin";
import Background from "/src/components/backgroundImg/backgroundLogin/BackgroundLogin";

import { Container } from "./style";

import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setUserPassword, setUserEmail } from "/src/redux/store/User.slice";
import { login } from "../../config/firebase-config";
import toast from "react-hot-toast";

const LoginPage = () => {
	const [textHidden, setTextHidden] = useState(false);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem("userState")) {
			navigate("/netflix");
		}

	}, [navigate]);

	const dataFormUserEmail = useSelector((state) => state.user.userEmail);

	const dataFormUserPassword = useSelector((state) => state.user.userPassword);

	const handleTextHidden = () => {
		setTextHidden(!textHidden);
	};

	const handleLogin = async (e) => {
		e.preventDefault();

		try {
			const credentialUser = await login({
				email: dataFormUserEmail,
				password: dataFormUserPassword,
			});
			if (credentialUser.operationType === "signIn") {
				toast.success(`Welcome to Netflix`);
				localStorage.setItem("userState", true);
				navigate("/netflix");
			}
		} catch (error) {
			if (error.code === "auth/user-not-found") {
				toast.error(`The email address is not registered`);
			} else if (error.code === "auth/wrong-password") {
				toast.error(`The password is invalid`);
			}

			console.log(error);
		}
	};

	return (
		<Container>
			<Background />
			<div className='content'>
				<HeaderLogin />
				<div className='transparent_modal'>
					<div className='content_form'>
						<h2>Sign In</h2>
						<form onSubmit={handleLogin}>
							<input
								type='text'
								placeholder='Email'
								required
								defaultValue={dataFormUserEmail}
								onChange={(e) =>
									dispatch(
										setUserEmail({
											userEmail: e.target.value.trim().toLowerCase(),
										}),
									)
								}
							/>
							<input
								autoComplete='off'
								type='password'
								placeholder='Password'
								required
								onChange={(e) =>
									dispatch(setUserPassword({ userPassword: e.target.value }))
								}
							/>
							<button type='submit'>Sign In</button>
						</form>
						<div className='content_form_help'>
							<div className='form_remember'>
								<input
									htmlFor='remember'
									type='checkbox'
									name='remember'
									id='remember'
								/>
								<label
									htmlFor='remember'
									id='remember'
								>
									Remember me
								</label>
							</div>
							<div>
								<Link to='/Help'>Need help?</Link>
							</div>
						</div>

						<div className='content_social'>
							<h6>
								New to Netflix? <Link to='/'>Sign up now.</Link>
							</h6>
							<h4>
								This page is protected by Google reCAPTCHA to ensure you are not
								a bot.{" "}
								<span
									className={`${textHidden ? "inactive " : ""}`}
									onClick={handleTextHidden}
								>
									Learn more.
								</span>
							</h4>
						</div>
						{textHidden && (
							<div className='content_parrafo'>
								<p>
									The information collected by Google reCAPTCHA is subject to
									the Google <span>Privacy Policy</span> and{" "}
									<span> Terms of Service</span>, and is used for providing,
									maintaining, and improving the reCAPTCHA service and for
									general security purposes (it is not used for personalized
									advertising by Google).
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</Container>
	);
};

export default LoginPage;
