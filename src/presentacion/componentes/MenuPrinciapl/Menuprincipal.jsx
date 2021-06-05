import React, {Component} from 'react';
import logo from "../../../assets/logo-base.jpg"
import "./Menuprincipal.css"


class Menuprincipal extends Component {
    render() {
        return (
            <>
                <nav className="Menu">

                    <div className="Menu__contenedor__logo">
                        <img className="Menu__logo" src={logo} alt="logo-oftalmolgia-Hector-Marques"/>
                    </div>

                    <ul className="Menu__ul">
                        <li className="Menu__li">
                            <a className="Menu__a" href="">Registrar</a>
                            <ul className="Menu__ul-2">
                                <li className="Menu__li-2"><a className="Menu__a-2" href="">Paciente</a></li>
                                <li className="Menu__li-2"><a className="Menu__a-2" href="">Oftalmologo</a></li>
                                <li className="Menu__li-2"><a className="Menu__a-2" href="">Cita Medica</a></li>
                            </ul>
                        </li>

                        <li className="Menu__li">
                            <a className="Menu__a" href="">Consultar</a>
                        </li>

                        <li className="Menu__li">
                            <a className="Menu__a" href="">Modificar</a>
                        </li>

                        <li className="Menu__li">
                            <a className="Menu__a" href="">Historial</a>
                        </li> <li className="Menu__li">
                        <a className="Menu__a-CS" href="">Cerrar Sesion</a>
                    </li>




                    </ul>
                </nav>
            </>
        );
    }
}


export default Menuprincipal;
