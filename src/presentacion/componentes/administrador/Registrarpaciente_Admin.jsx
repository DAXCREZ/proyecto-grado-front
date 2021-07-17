import React, {useState} from 'react';
import Menuprincipal from "../MenuPrinciapl/Menuprincipal";
import paciente from "../../../assets/medico.png";
import "./Registrarpaciente_Admin.css"




function RegistrarPacienteAdminPag () {
    const [personales, setPersonales] = useState("personales");
    const [contacto, setContacto] = useState("contactoOff");
    const [acudiente, setAcudiente] = useState("acudienteOff");
    const [eps, setEps] = useState("epsOff");
    const [coloMenu1, setColorMenu1] = useState("Menu__datos-liActivo");
    const [coloMenu2, setColorMenu2] = useState("Menu__datos-li");
    const [coloMenu3, setColorMenu3] = useState("Menu__datos-li");
    const [coloMenu4, setColorMenu4] = useState("Menu__datos-li");
    const [botonRegistrar, setBotonRegistrar] = useState("BotonRegistrarPaciente");


    function RenderizarInformacion (id){

        if (id === 1){
            setColorMenu1("Menu__datos-liActivo")
            setColorMenu2("Menu__datos-li")
            setColorMenu3("Menu__datos-li")
            setColorMenu4("Menu__datos-li")
            setBotonRegistrar("BotonRegistrarPaciente")
            setPersonales("personales")
            setContacto("contactoOff")
            setAcudiente("acudienteOff")
            setEps("epsOff")
        }else if(id === 2){
            setColorMenu1("Menu__datos-li")
            setColorMenu2("Menu__datos-liActivo")
            setColorMenu3("Menu__datos-li")
            setColorMenu4("Menu__datos-li")
            setBotonRegistrar("BotonRegistrarPaciente")
            setContacto("contacto")
            setPersonales("personalesOff")
            setAcudiente("acudienteOff")
            setEps("epsOff")
        }else if(id === 3){
            setColorMenu1("Menu__datos-li")
            setColorMenu2("Menu__datos-li")
            setColorMenu3("Menu__datos-liActivo")
            setColorMenu4("Menu__datos-li")
            setBotonRegistrar("BotonRegistrarPaciente")
            setAcudiente("acudiente")
            setPersonales("personalesOff")
            setContacto("contactoOff")
            setEps("epsOff")
        }else if(id === 4){
            setColorMenu1("Menu__datos-li")
            setColorMenu2("Menu__datos-li")
            setColorMenu3("Menu__datos-li")
            setColorMenu4("Menu__datos-liActivo")
            setBotonRegistrar("BotonRegistrarPacienteActivo")
            setPersonales("personalesOff")
            setContacto("contactoOff")
            setAcudiente("acudienteOff")
            setEps("eps")
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
                                        <div className={personales}>
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

                                        {/*Contactanos*/}

                                        <div className={contacto}>
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


                                        {/*acudiente*/}
                                        <div className={acudiente}>
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


                                        {/*Eps*/}
                                        <div className={eps}>
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
