import React, { useEffect } from "react";

export const AvisoComponent = () => {
  useEffect(() => {
    //Cuando se monta el componente
    alert("El componente AvisoComponent esta montado");
    //cuando se desmonta
    return () => {
      alert("Componente desmontado");
    };
  }, []); //Se ejecuta una vez por el array vacio
  return (
    <div>
      <h1>SALUDOS JUANCHO!!!</h1>
      <button
        onClick={(e) => {
          alert("Bienvenido!");
        }}
      >
        Mostrar Alerta
      </button>
    </div>
  );
};
