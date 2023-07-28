/* eslint-disable react/prop-types */
import { useState } from "react";
import Container from "./style";
import Logo from "../../assets/img/netflix-2-logo-svgrepo-com.svg";
import { Link } from "react-router-dom";
import { FaSearch, FaPowerOff } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../../config/firebase-config";
const Navbar = ({ isScrolling }) => {
	const links = [
		{ name: "Home", path: "/netflix" },
		{ name: "TV Show", path: "/tv" },
		{ name: "Movies", path: "/movies" },
		{ name: "Login", path: "/mylist" },
		{ name: "My List", path: "/register" },
	];

	const [showSearch, setShowSearch] = useState(false);
	const [inputHover, setInputHover] = useState(false);

	return (
		<Container>
			<nav className={`${isScrolling ? "scrolled" : ""}`}>
				<div className="left">
					<figure>
						<img
							onClick={() => window.location.reload()}
							src={Logo}
							alt='logo'
						/>
					</figure>
					<ul>
						{links.map((link, i) => (
							<li key={i}>
								<Link to={link.path}>{link.name}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="right">
					<div className={`search ${showSearch ? "show-search" : ""}`}>
						<button
							onFocus={() => setShowSearch(true)}
							onBlur={() => {
								!inputHover ? setShowSearch(false) : "";
							}}
						>
							<FaSearch />
						</button>
						<input
							type='text'
							placeholder='Titles, people, genres'
							onMouseEnter={() => setInputHover(true)}
							onMouseLeave={() => setInputHover(false)}
							onBlur={() => {
								setShowSearch(false);
								setInputHover(false);
							}}
						/>
					</div>
					<button
						onClick={() => {
							signOut(firebaseAuth);
							localStorage.removeItem("userState");
							window.location.reload();
						}}
						className='btn'
					>
						<FaPowerOff />
					</button>
				</div>
			</nav>
		</Container>
	);
};

export default Navbar;
