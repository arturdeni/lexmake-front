import React from "react";
import "./Home.css";

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

      <div className="home__projects">
        <h2>Proyectos destacados</h2>
        <div className="home__project">
          <img
            src="https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Proyecto 1"
          />
          <h3>Proyecto 1</h3>
        </div>
        <div className="home__project">
          <img
            src="https://plus.unsplash.com/premium_photo-1682125317942-013b0235b261?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Proyecto 2"
          />
          <h3>Proyecto 2</h3>
        </div>
        <div className="home__project">
          <img
            src="https://images.unsplash.com/photo-1516131206008-dd041a9764fd?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Proyecto 3"
          />
          <h3>Proyecto 3</h3>
        </div>
      </div>

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
