import React, { useEffect, useState } from "react";
import Axios from "../../../services/Axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export function FormServicios() {

  const variables={
    _id:"",  
    nombre:"",
    apellidos:"",
    sexo:"",
    telefono:""
  }

  const [programes, setProgrames] = useState(variables);
  const params = useParams();
  const navigate = useNavigate();

  const onChange=(e)=>{
    const {name,value}=e.target;
    setProgrames({...programes,[name]:value})
  }

  const GuardarDatos=async()=>{
    //const formulario=document.getElementById("personales");
    //const formData=new FormData(formulario);
    await Axios.post('/programe',programes).then(()=>{
      console.log("Registros guardados")
    })
   console.log(programes);
  }

  const consultarServicio = async (id)=>{
    const buscarUno=await Axios.get("/programe/"+id);
    setProgrames(buscarUno.data)
  }

  const Enviar=(e)=>{
    e.preventDefault();
    GuardarDatos();
  }

  useEffect(()=>{
    consultarServicio(params._id);
  },[params.id])
  return (
    <div className="container-fluid p-3">
      <div class="card">
        <div class="card-header">Confirmar Aceptacion de Servicio</div>
        <div class="card-body">
          <form class="row g-3 p-2" onSubmit={Enviar} id="personales">
              <div class="mb-3 row">
              <label for="nombre" class="col-sm-2 col-form-label">
                Nombre del Servicio
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="nombre"
                  id="nombre"
                  placeholder="Ingresa el nombre del servicio"
                  value={programes.nombre}
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="sexo" class="col-sm-2 col-form-label">
                Descripcion de Servicio
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="sexo"
                  id="sexo"
                  placeholder="Ingresa la descripcion del servicio"
                  value={programes.sexo}
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="telefono" class="col-sm-2 col-form-label">
                Costo del Servicio
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="telefono"
                  id="telefono"
                  placeholder="Ingresa el costo del servicio"
                  value={programes.telefono}
                  onChange={onChange}
                />
              </div>
            </div>

            <div class="col-12">
              <button class="btn btn-primary" type="submit">
                Aceptar
              </button>
            </div>
            <div class="col-12">
              <Link class="btn btn-primary" type="submit" to="/admoservi">
                Regresar
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}