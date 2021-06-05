import React, {Component} from 'react';
import Menuprincipal from "../../componentes/MenuPrinciapl/Menuprincipal";
import Menucrud from "../../componentes/MenuCrud/Menucrud";


class RegistrarPacienteAdminPag extends Component {
    render() {
        return (
            <>
                <Menuprincipal/>
                <Menucrud/>
            </>
        );
    }
}


export default RegistrarPacienteAdminPag;
