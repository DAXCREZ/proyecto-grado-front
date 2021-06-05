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
                        <h1>Datos</h1>
                        <form action="">

                        </form>

                    </div>
                </div>
            </>
        );
    }
}


export default RegistrarPacienteAdminPag;
