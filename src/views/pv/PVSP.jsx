import React, { useState } from 'react'
import '../../styles/pv.css';
import Seleccion from '../../components/seleccion'

function PVSP() {

    const [seleccionPlayer1, setSeleccionPlayer1] = useState("");
    const [seleccionPlayer2, setSeleccionPlayer2] = useState("");

    return (
        <React.Fragment>
            <Seleccion player="Player 1" selected={seleccionPlayer1} setStateSelected={setSeleccionPlayer1} ></Seleccion>
            <div>{seleccionPlayer1}, {seleccionPlayer2}</div>
            <Seleccion player="Player 2" selected={seleccionPlayer2} setStateSelected={setSeleccionPlayer2}></Seleccion>
        </React.Fragment>
    )
}

export default PVSP;