import React, { useState } from 'react'
import '../../styles/pv.css';
import Seleccion from '../../components/seleccion'

function PVSP() {
    return(
        <React.Fragment>
            <Seleccion player="Player 1"></Seleccion>
            <div>Resultados</div>
            <Seleccion player="Player 2"></Seleccion>
        </React.Fragment>
    )
}

export default PVSP;