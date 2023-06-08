import React, { useEffect, useState } from "react";
import { AvisoComponent } from "./AvisoComponent";

export const PruebasComponents = () => {
  const [usuario, setUsuario] = useState("Juan Bechara");
  const [fecha, setFecha] = useState("01-01-1998");
  const [contador, setContador] = useState(0);

  const modUsuario = (e) => {
    setUsuario(e.target.value);
  };

  const cambiarFecha = (e) => {
    setFecha(Date.now());
  };

  // con el [] solo se ejecuta una vez al cargar el componente
  useEffect(() => {
    console.log("Has cargado el componente PruebasComponente");
  }, []);

  //se ejecuta solo si cambio el usuario
  useEffect(() => {
    setContador(contador + 1);
    console.log("Has modificado el usuario: " + contador);
  }, [usuario]);

  return (
    <div>
      <h1>El Efecto - Hook useEffect</h1>
      <strong className={contador >= 10 ? "label label-green" : "label"}>
        {usuario}
      </strong>
      <strong className="label label-green">{fecha}</strong>
      <p>
        <input
          type="text"
          onChange={modUsuario}
          placeholder="Cambia el nombre"
        />

        <button onClick={cambiarFecha}>Cambiar fecha</button>
      </p>
      {usuario == "Juancho" && <AvisoComponent />}
    </div>
  );
};
