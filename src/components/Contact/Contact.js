import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contacto</h1>
      <form>
        <div>
          <label>Nombre</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Mensaje</label>
          <textarea name="message"></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
