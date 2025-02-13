// CheckoutModal.jsx
import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./CheckoutModal.css";

const CheckoutModal = ({ isOpen, onClose, selectedItems, onConfirm }) => {
  const [sending, setSending] = useState(false);

  if (!isOpen) return null;

  const handleConfirm = async () => {
    setSending(true);

    const itemsList = selectedItems.map((item) => `- ${item.name}`).join("\n");

    const templateParams = {
      subject: "Nueva solicitud de servicios desde la web",
      detalles: `Se han seleccionado los siguientes servicios:\n${itemsList}`,
      selectedTab: "Solicitud de Servicios",
    };

    try {
      await emailjs.send(
        "service_14r123h",
        "template_e61pcjw",
        templateParams,
        "9mWNbrlh2H7GVV4Vs"
      );

      alert("¡Solicitud enviada correctamente!");
      onConfirm();
      onClose();
    } catch (error) {
      console.error("Error al enviar el email:", error);
      alert(
        "Hubo un error al enviar la solicitud. Por favor, inténtalo de nuevo."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button onClick={onClose} className="modal-close">
          ×
        </button>

        <h2 className="modal-title">Confirmar Solicitud</h2>

        <div className="modal-content">
          <p className="modal-description">
            Al confirmar, se enviará un email a Alexia Viladot con tu selección
            de servicios. Ella se pondrá en contacto contigo para discutir los
            detalles de tu proyecto.
          </p>

          <h3 className="services-title">Servicios seleccionados:</h3>
          <ul className="services-list">
            {selectedItems.map((item) => (
              <li key={item.id} className="service-item">
                <span className="service-dot"></span>
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="modal-actions">
          <button
            onClick={onClose}
            className="button button-cancel"
            disabled={sending}
          >
            Cancelar
          </button>
          <button
            onClick={handleConfirm}
            className="button button-confirm"
            disabled={sending}
          >
            {sending ? "Enviando..." : "Confirmar Solicitud"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
