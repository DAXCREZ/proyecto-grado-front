import React, {Component} from 'react';
import Menuprincipal from "../../componentes/MenuPrinciapl/Menuprincipal";
import paciente from "../../../assets/medico.png";
import "./Registrarpaciente_Admin.css"


class RegistrarPacienteAdminPag extends Component {
    render() {
        return (
            <>
                <Menuprincipal/>
                <div className="RegistrarPaciente">
                    <div className="PacienteTarjeta__contenedor">

                        <h1 className="Titulo__Paciente">Paciente</h1>
                        <figure className="logo__paciente">
                            <img className="logo__paciente-img" src={paciente} alt=""/>
                        </figure>
                    </div>

                    <div className="FormularioPaciente">
                        <h1 className="Titulo__form">Datos</h1>
                        <form action="">

                            <div className="Datos1">
                                <div className="DatosFormulario">
                                    <label htmlFor="">Identificacion</label>
                                    <input type="text"/>
                                </div>

                                <div className="DatosFormulario">
                                    <label htmlFor="">Nombres</label>
                                    <input type="text"/>
                                </div>

                                <div className="DatosFormulario">
                                    <label htmlFor="">Apelkidos</label>
                                    <input type="text"/>
                                </div>

                                <div className="DatosFormulario">
                                    <label htmlFor="">Direccion</label>
                                    <input type="text"/>
                                </div>

                                <div className="DatosFormulario">
                                    <label htmlFor="">Fecha de cumpleaños</label>
                                    <input type="text"/>
                                </div>

                                <div className="DatosFormulario">
                                    <label htmlFor="">Barrio</label>
                                    <input type="text"/>
                                </div>
                            </div>

                            <div className="Datos2">
                                <div className="DatosFormulario">
                                    <label htmlFor="">Telefono</label>
                                    <input type="text"/>
                                </div>

                                <div className="DatosFormulario">
                                    <label htmlFor="">Celular</label>
                                    <input type="text"/>
                                </div>

                                <div className="DatosFormulario">
                                    <label htmlFor="">Correo</label>
                                    <input type="text"/>
                                </div>

                                <div className="DatosFormulario">
                                    <label htmlFor="">Acudiente</label>
                                    <input type="text"/>
                                </div>

                                <div className="DatosFormulario">
                                    <label htmlFor="">Relacion</label>
                                    <input type="text"/>
                                </div>

                                <div className="DatosFormulario">
                                    <label htmlFor="">Celular del acudiente</label>
                                    <input type="text"/>
                                </div>
                            </div>

                            <div className="Datos3">
                                <div className="DatosFormulario">
                                    <label htmlFor="">Direccion del acuediente</label>
                                    <input type="text"/>
                                </div>

                                <div className="DatosFormulario">
                                    <label htmlFor="">Convenio</label>
                                    <input type="text"/>
                                </div>

                                <div className="DatosFormulario">
                                    <label htmlFor="">Número de licencia</label>
                                    <input type="text"/>
                                </div>

                                <div className="DatosFormulario">
                                    <label htmlFor="">EPS</label>
                                    <input type="text"/>
                                </div>

                                <div className="DatosFormulario">
                                    <label htmlFor="">Tipo de usuario</label>
                                    <input type="text"/>
                                </div>

                                <button>Guardar</button>
                            </div>

                        </form>

                    </div>
                </div>
            </>
        );
    }
}


export default RegistrarPacienteAdminPag;
