import { useSpring, animated, easings, useTransition } from "react-spring";
import { paths } from "../constants/pathConstants";
import { useState } from "react";
import useInterval from "react-useinterval";

const Hero = () => {
  const PROFESSIONS = ["Full Stack Software Developer", "Software Engineer", "Web Developer"];
  const [profession, setProfession] = useState(0);
  const professionTransition = useTransition(profession, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    }
  });

  const changeProfessionState = (amount) => {
    if (profession === 2) {
      setProfession(0);
    } else {
      setProfession(profession + amount);
    }
  }

  useInterval(changeProfessionState, 3000, 1);

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
          <h2 className="hero-text">Welcome to the portfolio of</h2><br/>
          <h1 className="hero-text">Justin Mari Maliwat</h1>
            {professionTransition((style, item) =>
              <animated.span className="hero-text" style={style}>{PROFESSIONS[item]}</animated.span>
            )}
        </div>
        <div className="col-xl-3 h-100 d-flex justify-content-center align-items-center position-relative">
          <animated.img className="hero-self-image img-fluid position-absolute" style={imageAnimation1} src={paths.SELF_PHOTO}/>
          <animated.img className="hero-self-image img-fluid position-absolute" style={imageAnimation2} src={paths.SELF_PHOTO}/>
          <img className="hero-self-image img-fluid position-absolute" src={paths.SELF_PHOTO}/>
        </div>
      </div>
    </animated.div>
  );
}
 
export default Hero;