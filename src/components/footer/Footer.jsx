import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
      <footer>
        <div>
          <Link to='/'>Questions? Contact us.</Link>
          <Link to='/'>FAQ</Link>
          <Link to='/'>Inverstor Relations</Link>
          <Link to='/'>Terms of Use</Link>
        </div>

      </footer>
		</>
	);
};

export default Footer;
