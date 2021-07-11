import React from "react";

import '../Registrarpaciente_Admin.css';

function PersonaInput(){
    return(
      <section>
          <div className="paciente__grupo__form">
              <input className="paciente__input" type="number" required/> <span className="barra"></span>
              <label className="paciente__label" htmlFor="">Identificacion</label>
          </div>

          <div className="paciente__grupo__form">
              <input className="paciente__input" type="text" required/> <span className="barra"></span>
              <label className="paciente__label" htmlFor="">Nombres</label>
          </div>

          <div className="paciente__grupo__form">
              <input className="paciente__input" type="text" required/> <span className="barra"></span>
              <label className="paciente__label" htmlFor="">Apellidos</label>
          </div>

          <div className="paciente__grupo__form">
              <input className="paciente__input" type="text" required/> <span className="barra"></span>
              <label className="paciente__label" htmlFor="">Direccion</label>
          </div>

          <div className="paciente__grupo__form">
              <input className="paciente__input" type="text" required/> <span className="barra"></span>
              <label className="paciente__label" htmlFor="">Fecha de cumpleaños</label>
          </div>
      </section>
    );
}

export default PersonaInput
