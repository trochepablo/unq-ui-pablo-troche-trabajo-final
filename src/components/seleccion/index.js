import React, { useState } from 'react'
import './Seleccion.css'
import Tijera from '../../static/tijera.png'
import Papel from '../../static/papel.png'
import Piedra from '../../static/piedra.png'
import Spock from '../../static/spock.png'
import Lagartija from '../../static/lagartija.png'
import Success from './success.svg'

function Seleccion(props) {

    const handlerClick = (tipo) => {
        props.setStateSelected(tipo)
    }

    function tablero() {
        if (props.selected === "") {
            return (
                <div>
                    <div>
                        {props.player}
                    </div>
                    <div className={props.selected === "" ? "containerImagenes" : "containerSelected"}>
                        <img className={props.selected === "tijera" ? "selected" : ""} src={Tijera} alt="tijera" onClick={() => handlerClick("tijera")}></img>
                        <img className={props.selected === "papel" ? "selected" : ""} src={Papel} alt="papel" onClick={() => handlerClick("papel")}></img>
                        <img className={props.selected === "piedra" ? "selected" : ""} src={Piedra} alt="piedra" onClick={() => handlerClick("piedra")}></img>
                        <img className={props.selected === "spock" ? "selected" : ""} src={Spock} alt="spock" onClick={() => handlerClick("spock")}></img>
                        <img className={props.selected === "lagartija" ? "selected" : ""} src={Lagartija} alt="lagartija" onClick={() => handlerClick("lagartija")}></img>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div>
                        {props.player}
                    </div>
                    <div className="success">
                        Seleccionado.
                    </div>
                </div>
            )
        }
    }

    return (
        tablero()
    )
}

export default Seleccion;