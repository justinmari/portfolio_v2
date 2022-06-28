import { paths } from "../constants/pathConstants";

const Navlogo = () => {

	return (
		<div className="Navlogo col-xl-2 mx-2">
			<img className="navlogo-img" src={paths.LOGO}/>
		</div>
	);
}
 
export default Navlogo;