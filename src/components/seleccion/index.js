import React, { useState } from 'react'
import './Seleccion.css'
import Tijera from '../../static/tijera.png'
import Papel from '../../static/papel.png'
import Piedra from '../../static/piedra.png'
import Spock from '../../static/spock.png'
import Lagarto from '../../static/lagartija.png'

function Seleccion(props) {

    const handlerClick = (tipo) => {
        props.setStateSelected(tipo)
    }

    function tablero() {
        if (props.selected === "") {
            return (
                <div>
                    <div className={props.selected === "" ? "containerImagenes" : "containerSelected"}>
                        <img className={props.selected === "tijera" ? "selected" : ""} src={Tijera} alt="tijera" onClick={() => handlerClick("tijera")}></img>
                        <img className={props.selected === "papel" ? "selected" : ""} src={Papel} alt="papel" onClick={() => handlerClick("papel")}></img>
                        <img className={props.selected === "piedra" ? "selected" : ""} src={Piedra} alt="piedra" onClick={() => handlerClick("piedra")}></img>
                        <img className={props.selected === "spock" ? "selected" : ""} src={Spock} alt="spock" onClick={() => handlerClick("spock")}></img>
                        <img className={props.selected === "lagarto" ? "selected" : ""} src={Lagarto} alt="lagarto" onClick={() => handlerClick("lagarto")}></img>
                        <div>
                            <span className={props.colorPlayer}> {props.player}</span>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="success">
                        <div>
                           <span className={props.colorPlayer}> {props.player}</span>
                        </div>
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