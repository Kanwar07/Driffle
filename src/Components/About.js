import Header from "./Header";
import "./About.css";
import batman from "../Assets/batman.png";
import xbox from "../Assets/xbox.png";
import fifa from "../Assets/fifa.png";
import gta from "../Assets/gta.png";
import mortal from "../Assets/mortal.png";
import minecraft from "../Assets/minecraft.png";

function About() {
  return (
    <>
      <Header />
      <div className="parent">
        <div className="rec">
          <div className="shape">
            <div className="rec1">
              <div className="shape1">
                <div className="rec2">
                  <div className="shape2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        Driffle is a <span className="textgreen">one-stop shop</span>
        <br /> for all your gaming needs.
        <p className="para">
          Not only do we sell games, but also offer gift cards, DLC's, and more.
          Driffle is a marketplace, so you can find a wide variety of items from
          different sellers in one place. We are committed to the future of
          gaming and strive to make our platform safe, affordable, and
          sustainable for all users. Whether you're looking for the latest
          releases or hard-to-find classics, you're sure to find what you're
          looking for on Driffle.
        </p>
        <button className="button1">Visit the store</button>
        <div className="icons">
          <div className="batman">
            <img src={batman} alt="batman" />
          </div>
          <div className="xbox">
            <img src={xbox} alt="xbox" />
          </div>
          <div className="fifa">
            <img src={fifa} alt="fifa" />
          </div>
          <div className="gta">
            <img src={gta} alt="gta" />
          </div>
          <div className="minecraft">
            <img src={minecraft} alt="minecraft" />
          </div>
          <div className="mortal">
            <img src={mortal} alt="mortal" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
