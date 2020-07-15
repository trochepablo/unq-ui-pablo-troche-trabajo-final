import React, { useState } from 'react'
import '../../styles/pv.css';
import Seleccion from '../../components/seleccion'
import { makeStyles } from '@material-ui/core/styles';
import { Button, LinearProgress, Snackbar, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';
import Tipo from '../../entities/Tipos';

const useStyles = makeStyles({
    root: {
        width: '30%',
    },
    botonJugar: {
        margin: '10px'
    }
});

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function PVSPC() {


    const classes = useStyles();
    const [seleccionPlayer1, setSeleccionPlayer1] = useState(generarSeleccionAleatoria());
    const [seleccionPlayer2, setSeleccionPlayer2] = useState("");

    const [disableVictory, setDisableVictory] = useState(false);

    const [victorias1, setVictorias1] = useState(0);
    const [victorias2, setVictorias2] = useState(0);

    const [cantidadWins1, setCantidadWins1] = useState(0);
    const [cantidadWins2, setCantidadWins2] = useState(0);

    const [progressBar1, setProgressBar1] = useState(0);
    const [progressBar2, setProgressBar2] = useState(0);

    const [openDialog, setOpenDialog] = useState(false);

    const [mensajeResultado, setMensajeResultado] = useState("");

    const handleClickOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setSeleccionPlayer1(generarSeleccionAleatoria())
        setSeleccionPlayer2("")
        setOpenDialog(false);
    };

    const [open, setOpen] = useState(false); 

    const handleClick = () => {
        console.log(seleccionPlayer1)
        if (esJugadaValida()) {
            comprobarGanador()
        } else {
            setOpen(true);
        }

    };

    function esJugadaValida() {
        return !!seleccionPlayer1 && !!seleccionPlayer2
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    function generarSeleccionAleatoria() {
        const tipos = Tipo.map(t => t.tipo);
        return tipos[Math.floor(Math.random() * tipos.length)];
    }

    function comprobarGanador() {
        const jugadaPlayer1 = Tipo.find(t => t.tipo === seleccionPlayer1).mataA(seleccionPlayer2)
        const jugadaPlayer2 = Tipo.find(t => t.tipo === seleccionPlayer2).mataA(seleccionPlayer1)
        if (jugadaPlayer1 && !jugadaPlayer2) {
            if (esJugadorGanador(cantidadWins1)) {
                setMensajeResultado("Felicitaciones BOT IA ha ganado la partida!")
                setVictorias1(victorias1 + 1)
                setDisableVictory(true)
            } else {
                setMensajeResultado(" BOT IA ha ganado la partida!")
            }
            const cw1 = cantidadWins1 + 1
            setCantidadWins1(cw1)
            setProgressBar1(cw1 * 10)

        } else if (jugadaPlayer2 && !jugadaPlayer1) {

            if (esJugadorGanador(cantidadWins2)) {
                setMensajeResultado("Felicitaciones Player1 ha ganado la partida!")
                setVictorias2(victorias2 + 1)
                setDisableVictory(true)
            } else {
                setMensajeResultado("Player 1 ha ganado la partida!")
            }

            const cw2 = cantidadWins2 + 1
            setCantidadWins2(cw2)
            setProgressBar2(cw2 * 10)
        } else {
            setMensajeResultado("Ha sido un empate!")
        }
        handleClickOpenDialog()
    }

    function esJugadorGanador(cantidadWins) {
        return cantidadWins === 9
    }

    function reiniciar() {
        setSeleccionPlayer1(generarSeleccionAleatoria())
        setSeleccionPlayer2("")
        setCantidadWins1(0)
        setCantidadWins2(0)
        setCantidadWins1(0)
        setProgressBar1(0)
        setProgressBar2(0)
        setVictorias1(0)
        setVictorias2(0)
    }

    function siguienteRonda() {
        setSeleccionPlayer1(generarSeleccionAleatoria())
        setSeleccionPlayer2("")
        setCantidadWins1(0)
        setCantidadWins2(0)
        setCantidadWins1(0)
        setProgressBar1(0)
        setProgressBar2(0)
        setDisableVictory(false)
    }

    return (
        <React.Fragment>
            <Seleccion esBot={true} player="BOT IA" colorPlayer="colorPlayer1" selected={seleccionPlayer1} setStateSelected={setSeleccionPlayer1} ></Seleccion>
            <div className="contenedorAcciones">
                <div>
                    <span className="colorPlayer1" >BOT IA: </span> {victorias1}
                </div>
                <div>
                    <span className="colorPlayer2" >Player 1: </span> {victorias2}
                </div>
                <div className={classes.root}>
                    <div><h3>Resultado partida actual</h3></div>
                    <span className="colorPlayer1" >BOT IA</span>
                    <LinearProgress variant="determinate" color="primary" value={progressBar1} />
                    <br></br>
                    <span className="colorPlayer2" >Player 1</span>
                    <LinearProgress variant="determinate" color="secondary" value={progressBar2} />
                    <br></br>
                </div>
                <div className="acciones">
                    <Button className={classes.botonJugar} variant="contained" color="primary" onClick={handleClick} disabled={disableVictory}>
                        Jugar
                    </Button>
                    <Button className={classes.botonJugar} variant="contained" onClick={() => siguienteRonda()} disabled={!disableVictory}>
                        Siguiente ronda
                    </Button>
                    <Button className={classes.botonJugar} variant="contained" color="secondary" onClick={() => reiniciar()} >
                        Reiniciar
                    </Button>
                </div>
            </div>
            <Seleccion esBot={false} player="Player 1" colorPlayer="colorPlayer2" selected={seleccionPlayer2} setStateSelected={setSeleccionPlayer2}></Seleccion>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    Ambos jugadores deben seleccionar la jugada.
                </Alert>
            </Snackbar>
            <Dialog
                open={openDialog}
                TransitionComponent={Transition}
                keepMounted
                disableBackdropClick
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">Resultado de la jugada</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <div>
                            {mensajeResultado}
                        </div>
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-slide-description">
                        <div>
                            <h3> Figuras seleccionadas</h3>
                        </div>
                        <div>
                            BOT IA: {seleccionPlayer1}
                        </div>
                        <div>
                            Player 1: {seleccionPlayer2}
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Aceptar
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}

export default PVSPC;