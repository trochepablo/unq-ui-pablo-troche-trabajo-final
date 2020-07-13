import React, { useState } from 'react';
import '../../styles/pv.css';
import Seleccion from '../../components/seleccion'

function PVSPC() {
    return(
        <React.Fragment>
            <Seleccion player="PC"></Seleccion>
            <div>Resultados</div>
            <Seleccion player="Player"></Seleccion>
        </React.Fragment>
    )
}

export default PVSPC;