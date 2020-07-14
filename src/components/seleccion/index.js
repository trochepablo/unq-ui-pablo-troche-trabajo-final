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
        if (!props.selected) {
           return estadoNoSeleccionado() 
        } else {
           return estadoSeleccionado()
        }
    }

    function estadoNoSeleccionado() {
        return (
            <div>
                <div className={props.selected === "" ? "containerImagenes" : "containerSelected"}>
                    <img className={props.selected === "tijera" ? "selected" : ""} 
                    src={Tijera} alt="tijera"  onClick={() => handlerClick("tijera")}/>

                    <img className={props.selected === "papel" ? "selected" : ""} 
                    src={Papel} alt="papel" onClick={() => handlerClick("papel")}/>

                    <img className={props.selected === "piedra" ? "selected" : ""} 
                    src={Piedra} alt="piedra" onClick={() => handlerClick("piedra")}/>

                    <img className={props.selected === "spock" ? "selected" : ""} 
                    src={Spock} alt="spock" onClick={() => handlerClick("spock")}/>

                    <img className={props.selected === "lagarto" ? "selected" : ""} 
                    src={Lagarto} alt="lagarto" onClick={() => handlerClick("lagarto")}/>

                    <div>
                        <span className={props.colorPlayer}> {props.player}</span>
                    </div>
                </div>
            </div>)
    }

    function estadoSeleccionado() {
        return (
            <div>
                <div className="success">
                    <div>
                        <span className={props.colorPlayer}> {props.player}</span>
                    </div>
                    <span>Seleccionado.</span>
                </div>
            </div>
        )
    }

    return (
        tablero()
    )
}

export default Seleccion;