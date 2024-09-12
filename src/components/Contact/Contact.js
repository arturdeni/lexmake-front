import React, { useState } from "react";
import emailjs from "emailjs-com"; // Importa emailjs
import InstagramIcon from "../../assets/icons/rrss/instagram-icon";
import TiktokIcon from "../../assets/icons/rrss/tiktok-icon";
import LinkedInIcon from "../../assets/icons/rrss/linkedin-icon";
import WhatsAppIcon from "../../assets/icons/rrss/whatsapp-icon";

import "./Contact.css";

const Contact = () => {
  const [selectedTab, setSelectedTab] = useState("Consulta");
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    detalles: "",
  });
  const [errors, setErrors] = useState({});

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombre) newErrors.nombre = "El nombre es requerido.";
    if (!formData.email) {
      newErrors.email = "El correo electrónico es requerido.";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "El correo electrónico no es válido.";
    }
    if (!formData.detalles) newErrors.detalles = "Los detalles son requeridos.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Resetear los errores si no hay problemas
    setErrors({});

    const templateParams = {
      nombre: formData.nombre,
      email: formData.email,
      telefono: formData.telefono,
      detalles: formData.detalles,
      selectedTab,
      subject: "Web Lexmake - Contacto",
    };

    // Aquí debes sustituir "YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID" y "YOUR_USER_ID" con tus datos de EmailJS
    emailjs
      .send(
        "service_14r123h",
        "template_e61pcjw",
        templateParams,
        "9mWNbrlh2H7GVV4Vs"
      )
      .then(
        (response) => {
          console.log("Email enviado!", response.status, response.text);
          alert("Formulario enviado correctamente.");
        },
        (err) => {
          console.error("Error al enviar el formulario:", err);
        }
      );
  };

  return (
    <div className="contact">
      <h1>¿Hacemos posible tu proyecto?</h1>
      <form onSubmit={handleSubmit}>
        <h4>¿Qué puedo hacer por ti?</h4>
        <div className="contact__tabs">
          <button
            type="button"
            className={selectedTab === "Web" ? "active" : ""}
            onClick={() => handleTabChange("Web")}
          >
            Web
          </button>
          <button
            type="button"
            className={selectedTab === "Logotipo" ? "active" : ""}
            onClick={() => handleTabChange("Logotipo")}
          >
            Logotipo
          </button>
          <button
            type="button"
            className={selectedTab === "RRSS" ? "active" : ""}
            onClick={() => handleTabChange("RRSS")}
          >
            RRSS
          </button>
          <button
            type="button"
            className={selectedTab === "Video" ? "active" : ""}
            onClick={() => handleTabChange("Video")}
          >
            Video
          </button>
          <button
            type="button"
            className={selectedTab === "Otro" ? "active" : ""}
            onClick={() => handleTabChange("Otro")}
          >
            Otro
          </button>
        </div>

        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        {errors.nombre && <p className="error">{errors.nombre}</p>}

        <input
          type="email"
          name="email"
          placeholder="Tu correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono (opcional)"
          value={formData.telefono}
          onChange={handleChange}
        />

        <textarea
          name="detalles"
          placeholder={`Detalles sobre tu ${selectedTab.toLowerCase()}`}
          value={formData.detalles}
          onChange={handleChange}
          required
        />
        {errors.detalles && <p className="error">{errors.detalles}</p>}

        <button className="lexmake-button" type="submit">
          Enviar
        </button>
      </form>

      <div className="contact__info">
        <p>alexiaviladot@lexmake.com</p>
        <div className="contact__social">
          <a
            href="https://www.instagram.com/lexmake_/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon color="#0000ff" />
          </a>
          <a
            href="https://www.tiktok.com/@lexmake"
            target="_blank"
            rel="noreferrer"
          >
            <TiktokIcon color="#0000ff" />
          </a>
          <a
            href="https://www.linkedin.com/company/lexmake/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon color="#0000ff" />
          </a>
          <WhatsAppIcon color="#0000ff" />
        </div>
        <p>Rambla Catalunya 38, Planta 9. 08007, Barcelona</p>
      </div>

      <div className="contact__map">
        <iframe
          title="Lexmake"
          className="contact__map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.453241376211!2d2.163153915738888!3d41.39094697926429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a498b0f7f1c4d9%3A0x1b0f1d7f5e4b0d3e!2sRambla%20de%20Catalunya%2C%2038%2C%2008007%20Barcelona!5e0!3m2!1ses!2ses!4v1631290435248!5m2!1ses!2ses"
          height="450"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
