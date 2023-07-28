import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";

const Netflix = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  console.log(isScrolling)

	useEffect(() => {
		window.onscroll = () => {
			setIsScrolling(window.scrollY === 0 ? false : true);
		};

		return () => (window.onscroll = null);
	}, []);
	return (
		<div>
			<Navbar isScrolling={isScrolling} />
		</div>
	);
};

export default Netflix;
