import React from "react";
import "./Terms.css";

const Terms = () => {
  return (
    <div className="terms">
      <h1 className="terms__title">Términos y Condiciones de Servicio</h1>

      <section className="terms__section">
        <h2>1. Introducción</h2>
        <p>
          Al acceder y utilizar los servicios de Lexmake, aceptas estos términos
          y condiciones en su totalidad. Si no estás de acuerdo con alguna parte
          de estos términos, te rogamos que no utilices nuestros servicios.
        </p>
      </section>

      <section className="terms__section">
        <h2>2. Servicios</h2>
        <p>
          Lexmake ofrece servicios de diseño gráfico, diseño web, y desarrollo
          de marca. Los detalles específicos de cada servicio se acordarán por
          escrito antes de comenzar cualquier proyecto.
        </p>
        <ul>
          <li>Diseño de identidades visuales</li>
          <li>Desarrollo web</li>
          <li>Diseño de materiales promocionales</li>
          <li>Gestión de redes sociales</li>
          <li>Creación de contenido visual</li>
        </ul>
      </section>

      <section className="terms__section">
        <h2>3. Proceso de Trabajo</h2>
        <p>Cada proyecto seguirá un proceso estructurado que incluye:</p>
        <ul>
          <li>Briefing inicial y definición de objetivos</li>
          <li>Propuesta y presupuesto</li>
          <li>Desarrollo del proyecto por fases</li>
          <li>Revisiones y ajustes</li>
          <li>Entrega final</li>
        </ul>
      </section>

      <section className="terms__section">
        <h2>4. Pagos</h2>
        <p>
          Las condiciones de pago se establecerán en cada presupuesto.
          Generalmente, requerimos:
        </p>
        <ul>
          <li>Un anticipo inicial para comenzar el proyecto</li>
          <li>Pagos parciales según los hitos acordados</li>
          <li>Pago final antes de la entrega de archivos definitivos</li>
        </ul>
      </section>

      <section className="terms__section">
        <h2>5. Propiedad Intelectual</h2>
        <p>
          Los derechos de autor de los diseños finales se transferirán al
          cliente una vez completado el pago total. Lexmake se reserva el
          derecho de:
        </p>
        <ul>
          <li>Incluir el trabajo en su portfolio</li>
          <li>Usar el proyecto para promoción propia</li>
          <li>
            Mantener los derechos sobre bocetos y propuestas no seleccionadas
          </li>
        </ul>
      </section>

      <section className="terms__section">
        <h2>6. Confidencialidad</h2>
        <p>
          Nos comprometemos a mantener la confidencialidad de toda la
          información proporcionada por el cliente durante el desarrollo del
          proyecto.
        </p>
      </section>

      <section className="terms__section">
        <h2>7. Cancelaciones</h2>
        <p>En caso de cancelación del proyecto:</p>
        <ul>
          <li>El anticipo inicial no es reembolsable</li>
          <li>
            Se facturarán las horas trabajadas hasta la fecha de cancelación
          </li>
          <li>Se entregarán los materiales desarrollados hasta el momento</li>
        </ul>
      </section>

      <section className="terms__section">
        <h2>8. Modificaciones</h2>
        <p>
          Nos reservamos el derecho de modificar estos términos y condiciones en
          cualquier momento. Los cambios entrarán en vigor inmediatamente
          después de su publicación en nuestra web.
        </p>
      </section>

      <section className="terms__section">
        <h2>9. Contacto</h2>
        <p>
          Para cualquier consulta sobre estos términos, puedes contactarnos en:
          <br />
          Email: alexiaviladot@lexmake.com
        </p>
      </section>
    </div>
  );
};

export default Terms;
