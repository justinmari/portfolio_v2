import Navlink from "./Navlink";
import Navlogo from "./Navlogo";

const Navbar = () => {

	return (
		<div className="Navbar container-fluid">
			<div className="d-flex flex-row">
				<Navlogo />
				<Navlink name="Home" uri="/"/>
				<Navlink name="About" uri="/about"/>
				<Navlink name="Resume" uri="/resume"/>
				<Navlink name="Bio" uri="/bio"/>
				<Navlink name="Contact" uri="/contact"/>
			</div>
		</div>
	);
}
 
export default Navbar;