import React, { useState, useEffect } from "react";
import Axios from "../../services/Axios";
import { Link } from "react-router-dom";
import "../../app.css";

export function Tipos() {
  const [programes, setProgrames] = useState([]);
  const consultarProgrames = async () => {
    const consultar = await Axios.get("/programes");
    console.log(consultar.data);
    setProgrames(consultar.data);
  };

  useEffect(() => {
    consultarProgrames();
  }, []);

  return (
    <div className="row container-fluid">
      <br/><br/><br/><br/><br/><br/><br/>
      <center>
      <div id="carouselExampleDark" class="carousel carousel-dark slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src="4.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block text-light bg-dark">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="2.jpeg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block text-info bg-dark">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="3.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block text-danger bg-dark">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      </center>
      {programes.map((programe) => {
        return (
          <div className="col-4 p-2">
            <div class="card mb-3 efecto" style={{}}>
              <div class="row g-0">
                <div class="text-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy2_WzvrB69jQfuBh4FbPy14qKKlsBUQ529g&usqp=CAU"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body text-primary">
                    <h5 class="card-title">{programe.nombre}</h5>
                    <p class="card-text">$ {programe.telefono} Pesos.</p>
                    <p class="card-text">
                      <small class="text-muted">{programe.sexo}.</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Link type="button" class="btn btn-warning" to="/contratar">
              Reservar
            </Link>
          </div>
        );
      })}
    </div>
  );
}
