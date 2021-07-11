import React from 'react'
import '../Registrarpaciente_Admin.css'

function EpsInput(){
    return(
        <section className="contactoPaciente">
            <div className="form__personales">
                <div className="paciente__grupo__form">
                    <input className="paciente__input" type="text" required/> <span className="barra"></span>
                    <label className="paciente__label" htmlFor="">Convenio</label>
                </div>

                <div className="paciente__grupo__form">
                    <input className="paciente__input" type="text" required/> <span className="barra"></span>
                    <label className="paciente__label" htmlFor="">Numero de licencia</label>
                </div>

                <div className="paciente__grupo__form">
                    <input className="paciente__input" type="text" required/> <span className="barra"></span>
                    <label className="paciente__label" htmlFor="">Eps</label>
                </div>

                <div className="paciente__grupo__form">
                    <input className="paciente__input" type="text" required/> <span className="barra"></span>
                    <label className="paciente__label" htmlFor="">Tipo de Usuario</label>
                </div>
            </div>
        </section>
    );
}

export default EpsInput