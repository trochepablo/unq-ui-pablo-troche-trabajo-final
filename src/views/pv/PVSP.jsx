import React, { useState } from 'react'
import '../../styles/pv.css';
import Seleccion from '../../components/seleccion'
import { makeStyles } from '@material-ui/core/styles';
import { Button, LinearProgress } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
      width: '50%',
    },
  });

function PVSP(props) {

    const classes = useStyles();
    const [seleccionPlayer1, setSeleccionPlayer1] = useState("");
    const [seleccionPlayer2, setSeleccionPlayer2] = useState("");

    const progress = 1

    return (
        <React.Fragment>
            <Seleccion player="Player 1" selected={seleccionPlayer1} setStateSelected={setSeleccionPlayer1} ></Seleccion>
            <div className="contenedorAcciones">
                <div>Resultado</div>
                <div className={classes.root}>
                    Player 1
                    <LinearProgress variant="determinate" color="primary" value={progress} />
                    <br></br>
                    Player 2
                    <LinearProgress variant="determinate" color="secondary" value={progress} />
                </div>
                <div className="acciones">
                    <Button variant="contained" color="primary">
                        Ejecutar
                    </Button>
                    <Button variant="contained" color="secondary">
                        Reiniciar
                    </Button>
                </div>
            </div>
            <Seleccion player="Player 2" selected={seleccionPlayer2} setStateSelected={setSeleccionPlayer2}></Seleccion>
        </React.Fragment>
    )
}

export default PVSP;