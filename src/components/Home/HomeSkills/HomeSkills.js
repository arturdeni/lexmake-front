import React from "react";
import "./HomeSkills.css";

const HomeSkills = () => {
  return (
    <section className="home-skills">
      <h1 className="home-skills__title">My skills</h1>
      <div className="home-skills__items-container">
        <div className="home-skills__item">
          <p>Photoshop</p>
        </div>
        <div className="home-skills__item">
          <p>Illustrator</p>
        </div>
        <div className="home-skills__item">
          <p>After Effects</p>
        </div>
        <div className="home-skills__item">
          <p>Premiere</p>
        </div>
        <div className="home-skills__item">
          <p>Blender</p>
        </div>
        <div className="home-skills__item">
          <p>WordPress</p>
        </div>
        <div className="home-skills__item">
          <p>Shopify</p>
        </div>
      </div>
    </section>
  );
};

export default HomeSkills;
