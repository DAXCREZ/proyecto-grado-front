import React, {Component} from 'react';
import Menuprincipal from "../../componentes/MenuPrinciapl/Menuprincipal";
import paciente from "../../../assets/medico.png";
import "./Registrarpaciente_Admin.css"


class RegistrarPacienteAdminPag extends Component {
    render() {
        return (
            <>
                <Menuprincipal/>
                <div>
                    <h1 className="Titulo__Registro">REGISTRO DE PACIENTE</h1>
                    <div className="RegistrarPaciente">
                        <div className="PacienteTarjeta__contenedor">

                            <h1 className="Titulo__Paciente">Paciente</h1>
                            <figure className="logo__paciente">
                                <img className="logo__paciente-img" src={paciente} alt=""/>
                            </figure>
                        </div>

                        <div className="formulario">

                            <div className="FormularioPaciente__contenedor">
                                <div className="Menu__datos">
                                    <ul className="Menu__datos-ul">
                                        <li className="Menu__datos-li active"><a className="Menu__datos-a"  href="#">1. Personales</a></li>
                                        <li className="Menu__datos-li"><a className="Menu__datos-a" href="#">2. Contacto</a></li>
                                        <li className="Menu__datos-li"><a className="Menu__datos-a" href="#">3. Acudiente</a></li>
                                        <li className="Menu__datos-li"><a className="Menu__datos-a" href="#">4. Eps</a></li>
                                    </ul>
                                </div>

                                <form className="form" action="">
                                    <div className="form__personales">
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
                                    </div>

                                    <div className="paciente__siguiente__icono">
                                        <a className="paciente__siguiente__a">
                                            <i className="fas fa-chevron-right"></i>
                                        </a>
                                    </div>

                                </form>

                            </div>
                        </div>

                    </div>
                </div>

            </>
        );
    }
}


export default RegistrarPacienteAdminPag;
