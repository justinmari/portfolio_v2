import { useSpring, animated } from "react-spring";
import { useState } from "react";
import { colours } from "./constants/colourConstants"

const Navlink = (props) => {
	const [hovered, setHovered] = useState(false);
	const DURATION = 100;

	const handleMouseEnter = () => {
		setHovered(true);
	}

	const handleMouseLeave = () => {
		setHovered(false);
	}

	const divStyle = useSpring({
		//translateY: hovered ? -5 : 0,
		backgroundColor: hovered ? colours.ORANGE : colours.WHITE,
		padding: hovered ? 10 : 0,
		config: {
			duration: DURATION
		}
	});

	const textStyle = useSpring({
		color: hovered ? colours.WHITE : colours.BLACK,
		config: {
			duration: DURATION
		}
	});
	
	return (
		<div className="Navlink mx-3 col-xl-1 d-flex justify-content-center align-items-center">
			<a className="navlink-link" href={props.uri}>
				<animated.div 
					style={divStyle} 
					onMouseEnter={handleMouseEnter} 
					onMouseLeave={handleMouseLeave}>

					<animated.span className="navlink-span" style={textStyle}>{props.name}</animated.span> 

				</animated.div>
			</a>
		</div>
	);
}
 
export default Navlink;