import { Link } from "react-router-dom";

function AboutMe() {
  let AboutMe = (
    <div>
      <p id="description">
        Hey everyone, my name is Robert Lopez and as you've probably guessed,
        I'm a local surfer from San Diego. I grew up in Point Loma, surfing the
        OB pier and the dog beach jetty. After high school, I joined the Marines
        and was fortunate enough to be stationed just outside of San Clemente.
        When my tour came to an end in 2018, I moved back down to Pacific Beach.
        I'm currently pursuing a degree in Computer Science at San Diego State
        University and an aspiring interdisciplinary software engineer enrolled
        at General Assembly.
      </p>
      <p id="description">
        <span id="color2">
          Click 
          <a href="https://github.com/rlopez4042" target="_blank">
          <button className="button-3" role="button">
          HERE{" "}
          </button>
        </a> to see my other projects!
        </span>
      </p>
    </div>
  );
  return <div>{AboutMe}</div>;
}

export default AboutMe;
