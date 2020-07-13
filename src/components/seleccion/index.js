import React, { useState } from 'react'
import './Seleccion.css'
import Tijera from '../../static/tijera.png'
import Papel from '../../static/papel.png'
import Piedra from '../../static/piedra.png'
import Spock from '../../static/spock.png'
import Lagartija from '../../static/lagartija.png'

function Seleccion(props) {
    return (
        <div className="containerSeleccion">
            <div>
                {props.player}
            </div>
            <div className="containerImagenes">
                <img src={Tijera} alt="tijera" ></img>
                <img src={Papel} alt="papel"></img>
                <img src={Piedra} alt="piedra"></img>
                <img src={Spock} alt="spock"></img>
                <img src={Lagartija} alt="lagartija"></img>
            </div>
        </div>
    )
}

export default Seleccion;