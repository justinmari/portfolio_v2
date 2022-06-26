import { useSpring, animated, easings, config } from "react-spring";
import { paths } from "../constants/pathConstants";

const Hero = () => {

  const heroAnimation = useSpring({
    from: {
      opacity: 0,
      translateX: -100
    },
    to: {
      opacity: 1,
      translateX: 0
    },
    config: {
      duration: 1000,
      easing: easings.easeOutCubic
    }
  });

  const imageAnimation1 = useSpring({
    from: {
      opacity: 1,
      translateX: 0,
      translateY: 0,
    },
    to: {
      opacity: 0.5,
      translateX: 20,
      translateY: 20,
    },
    config: {
      duration: 2000,
      easing: easings.easeInOutCirc
    }
  });

  const imageAnimation2 = useSpring({
    from: {
      opacity: 1,
      translateX: 0,
      translateY: 0,
    },
    to: {
      opactity: 0.2,
      translateX: 10,
      translateY: 10,
    },
    config: {
      duration: 2000,
      easing: easings.easeInOutCirc
    }
  });

  return (
    <animated.div className="Hero container-fluid section" style={heroAnimation}>
      <div className="row h-100 justify-content-center">
        <div className="col-xl-3 h-100 d-flex flex-column justify-content-center">
          <h2 className="hero-span">Welcome to the portfolio of</h2><br/>
          <h1 className="hero-span">Justin Mari Maliwat</h1>
        </div>
        <div className="col-xl-3 h-100 d-flex justify-content-center align-items-center position-relative">
          <animated.img className="hero-self-image position-absolute" style={imageAnimation1} src={paths.SELF_PHOTO}/>
          <animated.img className="hero-self-image position-absolute" style={imageAnimation2} src={paths.SELF_PHOTO}/>
          <img className="hero-self-image position-absolute" src={paths.SELF_PHOTO}/>
        </div>
      </div>
    </animated.div>
  );
}
 
export default Hero;