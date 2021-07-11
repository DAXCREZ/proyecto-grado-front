import React from 'react'
import '../Registrarpaciente_Admin.css'

function AcudienteInput(){
    return(
        <section className="contactoPaciente">
            <div className="form__personales">
                <div className="paciente__grupo__form">
                    <input className="paciente__input" type="text" required/> <span className="barra"></span>
                    <label className="paciente__label" htmlFor="">Nombre del Acudiente</label>
                </div>

                <div className="paciente__grupo__form">
                    <input className="paciente__input" type="text" required/> <span className="barra"></span>
                    <label className="paciente__label" htmlFor="">Relacion</label>
                </div>

                <div className="paciente__grupo__form">
                    <input className="paciente__input" type="text" required/> <span className="barra"></span>
                    <label className="paciente__label" htmlFor="">Celular del Acudiente</label>
                </div>

                <div className="paciente__grupo__form">
                    <input className="paciente__input" type="text" required/> <span className="barra"></span>
                    <label className="paciente__label" htmlFor="">Direccion del Acudiente</label>
                </div>


            </div>
        </section>
    );
}

export default AcudienteInput