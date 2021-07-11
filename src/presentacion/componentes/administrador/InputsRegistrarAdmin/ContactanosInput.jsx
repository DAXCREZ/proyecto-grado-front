import React from 'react'
import '../Registrarpaciente_Admin.css'

function ContactanosInput(){
    return(
        <section className="contactoPaciente">
            <div className="form__personales">
                <div className="paciente__grupo__form">
                    <input className="paciente__input" type="text" required/> <span className="barra"></span>
                    <label className="paciente__label" htmlFor="">Barrio</label>
                </div>

                <div className="paciente__grupo__form">
                    <input className="paciente__input" type="text" required/> <span className="barra"></span>
                    <label className="paciente__label" htmlFor="">Telefono</label>
                </div>

                <div className="paciente__grupo__form">
                    <input className="paciente__input" type="text" required/> <span className="barra"></span>
                    <label className="paciente__label" htmlFor="">Celular</label>
                </div>

                <div className="paciente__grupo__form">
                    <input className="paciente__input" type="text" required/> <span className="barra"></span>
                    <label className="paciente__label" htmlFor="">Correo</label>
                </div>
            </div>
        </section>
    );
}

export default ContactanosInput