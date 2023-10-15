import React from "react";
import "./CustomAlert.css";

const CustomAlert = ({ message, onClose }) => {
   return (
      <div
         className="custom-alert"
         title="Click en Cerrar para volver a la pantalla anterior"
      >
         <div className="custom-alert-content">
            <p>{message}</p>
            <button onClick={onClose}>Cerrar</button>
         </div>
      </div>
   );
};

export default CustomAlert;
