import React, { useState } from "react";
import Axios from "../../../services/Axios";
import { Link } from "react-router-dom";

export function ContratarServi() {
  const variables = {
    nombre: "",
    apellidos: "",
    sexo: "",
    telefono: "",
  };

  const [programas, setProgramas] = useState(variables);

  const onChange = (e) => {
    const { name, value } = e.target;
    setProgramas({ ...programas, [name]: value });
  };

  const GuardarDatos = async () => {
    //const formulario=document.getElementById("personales");
    //const formData=new FormData(formulario);
    await Axios.post("/programa", programas).then(() => {
      console.log("Registros guardados");
    });
    console.log(programas);
  };

  const Enviar = (e) => {
    e.preventDefault();
    GuardarDatos();
  };
  return (
    <div className="container-fluid p-3">
      <div class="card">
        <div class="card-header">Confirmar tu solicitud de servicio</div>
        <div class="card-body">
          <form class="row g-3 p-2" onSubmit={Enviar} id="personales">
            <div class="mb-3 row">
              <label for="nombre" class="col-sm-2 col-form-label">
                Nombre de servicio
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="nombre"
                  id="nombre"
                  placeholder="Tu servicio es"
                  value={programas.nombre}
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="apellidos" class="col-sm-2 col-form-label">
                Precio
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="apellidos"
                  id="apellidos"
                  placeholder="Tu sercicio cuesta"
                  value={programas.apellidos}
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="sexo" class="col-sm-2 col-form-label">
                Dia
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="sexo"
                  id="sexo"
                  placeholder="Selecciona el dia de tu cita"
                  value={programas.sexo}
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="telefono" class="col-sm-2 col-form-label">
                Mes
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="telefono"
                  id="telefono"
                  placeholder="Seleciona el mes de tu cita"
                  value={programas.telefono}
                  onChange={onChange}
                />

                  <form action="#" method="post" onsubmit="submitForm(event)" />
                  <label for="fecha-hora">Fecha y Hora de Reserva:</label>
                  <input
                    type="datetime-local"
                    id="fecha-hora"
                    name="fecha-hora"
                    required
                  />
                </div>
              </div>
            

            <div class="col-12">
              <button class="btn btn-primary" type="submit">
                Aceptar
              </button>
            </div>
            <div class="col-12">
              <Link class="btn btn-primary" type="submit" to="/tipos">
                Regresar
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
