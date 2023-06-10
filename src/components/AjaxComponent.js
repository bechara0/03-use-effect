import React, { useEffect, useState } from "react";

// Generico / Basico

export const AjaxComponent = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [errores, setErrores] = useState("");

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

  // traigo el objeto desde la web mediante una promesa
  const getUsuariosAjaxPms = () => {
    fetch("https://reqres.in/api/users?page=1")
      .then((respuesta) => respuesta.json())
      .then(
        (resultado_final) => {
          setUsuarios(resultado_final.data);
          console.log(usuarios);
        },
        (error) => {
          console.log(error);
          setErrores(error.message);
        }
      );
  };

  const getUsuariosAjaxAW = async () => {
    setTimeout(async () => {
      try {
        const peticion = await fetch("https://reqres.in/api/users?page=1");
        const { data } = await peticion.json();
        setUsuarios(data);
        setCargando(false);
      } catch (error) {
        console.log(error.message);
        setErrores(error.message);
      }
    }, 2000);
  };

  useEffect(() => {
    //getUsuariosEstaticos();
    //getUsuariosAjaxPms();
    getUsuariosAjaxAW();
  }, []);

  if (errores !== "") {
    return <div className="errores">{errores}</div>;
  } else if (cargando == true) {
    //cuando esta cargando
    return <div className="cargando">Cargando datos...</div>;
  } else if (cargando == false && errores === "") {
    // cuando ya ha cargado
    return (
      <div>
        <h2>Listado de usuarios via Ajax</h2>
        <ol className="usuarios">
          {usuarios.map((usuario) => {
            return (
              <li key={usuario.id}>
                <img src={usuario.avatar} width="50" />
                &nbsp;
                {usuario.first_name} {usuario.last_name} - {usuario.email}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
};
