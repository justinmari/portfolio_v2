import Navlink from "./Navlink";
import Navlogo from "./Navlogo";
import { routes } from "./constants/routeConstants";

const Navbar = () => {

	return (
		<div className="Navbar container-fluid">
			<div className="row d-flex justify-content-center">
				<Navlogo />
				<Navlink name="Home" uri={routes.HOME}/>
				<Navlink name="Projects" uri={routes.PROJECTS}/>
				<Navlink name="Resume" uri={routes.RESUME}/>
				<Navlink name="Bio" uri={routes.BIO}/>
				<Navlink name="Contact" uri={routes.CONTACT}/>
			</div>
		</div>
	);
}
 
export default Navbar;