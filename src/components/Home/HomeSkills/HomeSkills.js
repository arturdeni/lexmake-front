import React from "react";
import "./HomeSkills.css";

import photoshopImage from "../../../assets/icons/applications/photoshop-icon.png";
import illustratorImage from "../../../assets/icons/applications/illustrator-icon.png";
import afterEffectsImage from "../../../assets/icons/applications/aftereffects-icon.png";
import premiereImage from "../../../assets/icons/applications/premiere-icon.png";
import dnImage from "../../../assets/icons/applications/dn-icon.png";
import idImage from "../../../assets/icons/applications/id-icon.png";
import figmaImage from "../../../assets/icons/applications/figma-icon.png";
import wordpressImage from "../../../assets/icons/applications/wordpress-icon.png";
import strikinglyImage from "../../../assets/icons/applications/strikingly-icon.png";

const HomeSkills = () => {
  return (
    <section className="home-skills">
      <h1>My skills</h1>
      <p>Estas son algunas de las herramientas y aplicaciones que domino.</p>
      <div className="home-skills__items-container">
        <div className="home-skills__item">
          <img src={photoshopImage} alt="Photoshop" />
        </div>
        <div className="home-skills__item">
          <img src={illustratorImage} alt="Illustrator" />
        </div>
        <div className="home-skills__item">
          <img src={afterEffectsImage} alt="After Effects" />
        </div>
        <div className="home-skills__item">
          <img src={premiereImage} alt="Premiere" />
        </div>
        <div className="home-skills__item">
          <img src={dnImage} alt="Dimension" />
        </div>
        <div className="home-skills__item">
          <img src={idImage} alt="InDesign" />
        </div>
        <div className="home-skills__item">
          <img src={figmaImage} alt="Figma" />
        </div>
        <div className="home-skills__item">
          <img src={wordpressImage} alt="Wordpress" />
        </div>
        <div className="home-skills__item">
          <img src={strikinglyImage} alt="Strikingly" />
        </div>
      </div>
    </section>
  );
};

export default HomeSkills;
