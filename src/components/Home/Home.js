import React from "react";
import "./Home.css";

import HomeProjects from "./HomeProjects/HomeProjects";

const Home = () => {
  return (
    <div className="home">
      <div className="home__intro">
        <h1>Lexmake</h1>
        <p>
          En Lexmake, tejemos diseño que habla, emociona y transforma. Cada
          píxel, una historia; tu marca, el protagonista. Descubre cómo lo
          visual redefine lo posible
        </p>
      </div>

      <HomeProjects />

      <div className="home__services">
        <h2>Servicios</h2>
        <div className="home__service">
          <h4>Diseño Gráfico</h4>
          <p>fhejkfnrjkfrjkfbrejkfrjfbrjklfbrjeklfb</p>
        </div>
        <div className="home__service">
          <h4>Diseño Web</h4>
          <p>fhejkfnrjkfrjkfbrejkfrjfbrjklfbrjeklfb</p>
        </div>
        <div className="home__service">
          <h4>Marketing Digital</h4>
          <p>fhejkfnrjkfrjkfbrejkfrjfbrjklfbrjeklfb</p>
        </div>
      </div>

      <div className="home__skills">
        <h2>my skills</h2>
        <div className="home__skill">
          <h4>HTML</h4>
          <div className="home__skillLevel">
            <div
              className="home__skillLevelFill"
              style={{ width: "90%" }}
            ></div>
          </div>
        </div>
        <div className="home__skill">
          <h4>CSS</h4>
          <div className="home__skillLevel">
            <div
              className="home__skillLevelFill"
              style={{ width: "80%" }}
            ></div>
          </div>
        </div>
        <div className="home__skill">
          <h4>JavaScript</h4>
          <div className="home__skillLevel">
            <div
              className="home__skillLevelFill"
              style={{ width: "70%" }}
            ></div>
          </div>
        </div>
        <div className="home__skill">
          <h4>React</h4>
          <div className="home__skillLevel">
            <div
              className="home__skillLevelFill"
              style={{ width: "60%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
