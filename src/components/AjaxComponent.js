import React, { useEffect, useState } from "react";

// Generico / Basico

export const AjaxComponent = () => {
  const [usuarios, setUsuarios] = useState([]);
  const getUsuariosEstaticos = () => {
    setUsuarios([
      {
        id: 1,
        email: "juan.lawson@reqres.in",
        first_name: "Juan",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
      },
      {
        id: 2,
        email: "Pedro.ferguson@reqres.in",
        first_name: "Pedro",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
      },
      {
        id: 3,
        email: "Leo.funke@reqres.in",
        first_name: "Leonardo",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
      },
    ]);
  };

  useEffect(() => {
    getUsuariosEstaticos();
  }, []);
  return (
    <div>
      <h2>Listado de usuarios via Ajax</h2>
      <ol className="usuarios">
        {usuarios.map((usuario) => {
          return (
            <li key={usuario.id}>
              {usuario.first_name} {usuario.last_name}
            </li>
          );
        })}
      </ol>
    </div>
  );
};
