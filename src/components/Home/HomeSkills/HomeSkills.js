import React, { useState } from "react";
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

const skills = [
  { name: "Photoshop", image: photoshopImage },
  { name: "Illustrator", image: illustratorImage },
  { name: "After Effects", image: afterEffectsImage },
  { name: "Premiere", image: premiereImage },
  { name: "Dimension", image: dnImage },
  { name: "InDesign", image: idImage },
  { name: "Figma", image: figmaImage },
  { name: "Wordpress", image: wordpressImage },
  { name: "Strikingly", image: strikinglyImage },
];

const HomeSkills = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [rotatingSkill, setRotatingSkill] = useState(null);

  const handleMouseLeave = (index) => {
    setActiveSkill(null); // o el valor inicial que necesites
    setRotatingSkill(null); // si usas esta variable de estado
  };

  const handleClick = (index) => {
    setRotatingSkill(index);

    setTimeout(() => {
      setRotatingSkill(null);
    }, 500);

    if (activeSkill === index) {
      setActiveSkill(null);
    } else {
      setActiveSkill(index);
    }
  };

  return (
    <section className="home-skills">
      <h1>My skills</h1>
      <p>
        Estos son algunos de los programas que uso para hacer posible los
        proyectos.
      </p>
      <div className="home-skills__items-container">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`home-skills__item ${
              activeSkill === index ? "active" : ""
            } ${rotatingSkill === index ? "rotating" : ""}`}
            onMouseEnter={() => handleClick(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <img
              src={skill.image}
              alt={skill.name}
              style={{
                transform:
                  rotatingSkill === index ? "rotate(360deg)" : "rotate(0deg)",
              }}
            />
            <span className="home-skills__name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeSkills;
