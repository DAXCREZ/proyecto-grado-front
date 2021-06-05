import React, {Component} from 'react';
import Menuprincipal from "../../componentes/MenuPrinciapl/Menuprincipal";
import Menucrud from "../../componentes/MenuCrud/Menucrud";


class RegistrarPacienteAdmin extends Component {
    render() {
        return (
            <>
               <Menuprincipal/>
               <Menucrud/>
            </>
        );
    }
}



export default RegistrarPacienteAdmin;
