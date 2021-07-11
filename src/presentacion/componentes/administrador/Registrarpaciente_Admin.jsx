import React, {useEffect, useState} from 'react';
import Menuprincipal from "../MenuPrinciapl/Menuprincipal";
import paciente from "../../../assets/medico.png";
import "./Registrarpaciente_Admin.css"
import ContactanosInput from "./InputsRegistrarAdmin/ContactanosInput";
import AcudienteInput from "./InputsRegistrarAdmin/AcudienteInput";
import EpsInput from "./InputsRegistrarAdmin/EpsInput";
import PersonaInput from "./InputsRegistrarAdmin/PersonaInput";


function RegistrarPacienteAdminPag () {
    const [mostraInfo, setMostrarInfo] = useState(<PersonaInput/>);
    const [coloMenu1, setColorMenu1] = useState("Menu__datos-liActivo");
    const [coloMenu2, setColorMenu2] = useState("Menu__datos-li");
    const [coloMenu3, setColorMenu3] = useState("Menu__datos-li");
    const [coloMenu4, setColorMenu4] = useState("Menu__datos-li");
    const [botonRegistrar, setBotonRegistrar] = useState("BotonRegistrarPaciente");


    function RenderizarInformacion (id){
        if (id === 1){
            setMostrarInfo(<PersonaInput/>)
            setColorMenu1("Menu__datos-liActivo")
            setColorMenu2("Menu__datos-li")
            setColorMenu3("Menu__datos-li")
            setColorMenu4("Menu__datos-li")
            setBotonRegistrar("BotonRegistrarPaciente")
        }else if(id === 2){
            setMostrarInfo(<ContactanosInput/>)
            setColorMenu1("Menu__datos-li")
            setColorMenu2("Menu__datos-liActivo")
            setColorMenu3("Menu__datos-li")
            setColorMenu4("Menu__datos-li")
            setBotonRegistrar("BotonRegistrarPaciente")
        }else if(id === 3){
            setMostrarInfo(<AcudienteInput/>)
            setColorMenu1("Menu__datos-li")
            setColorMenu2("Menu__datos-li")
            setColorMenu3("Menu__datos-liActivo")
            setColorMenu4("Menu__datos-li")
            setBotonRegistrar("BotonRegistrarPaciente")
        }else if(id === 4){
            setMostrarInfo(<EpsInput/>)
            setColorMenu1("Menu__datos-li")
            setColorMenu2("Menu__datos-li")
            setColorMenu3("Menu__datos-li")
            setColorMenu4("Menu__datos-liActivo")
            setBotonRegistrar("BotonRegistrarPacienteActivo")
        }
    }

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
                                        <button onClick={()=> RenderizarInformacion(1)} className={coloMenu1}><a className="Menu__datos-a"  href="#">1. Personales</a></button>
                                        <button onClick={()=> RenderizarInformacion(2)} className={coloMenu2}><a className="Menu__datos-a" href="#">2. Contacto</a></button>
                                        <button onClick={()=> RenderizarInformacion(3)} className={coloMenu3}><a className="Menu__datos-a" href="#">3. Acudiente</a></button>
                                        <button onClick={()=> RenderizarInformacion(4)} className={coloMenu4}><a className="Menu__datos-a" href="#">4. Eps</a></button>
                                    </ul>
                                </div>

                                <form className="form" action="">
                                    <div className="form__personales">
                                        {
                                            mostraInfo
                                        }
                                    </div>

                                    <button className={botonRegistrar}> Registrar </button>

                                </form>

                            </div>
                        </div>

                    </div>
                </div>

            </>
        );
}


export default RegistrarPacienteAdminPag;
