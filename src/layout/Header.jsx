import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { AppBar, Toolbar, Typography, Button, Drawer, List, ListItem, ListItemIcon, Popover, Box } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { SupervisorAccount, PermIdentity } from '@material-ui/icons';
import RulesImage from '../static/RPSLS.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  popover: {
    background: 'linear-gradient(350deg, rgba(63,81,181,1) 0%, rgba(39,51,116,1) 50%, rgba(20,26,60,1) 100%)',
    color: 'white'
  }
}));

function Header() {
  const classes = useStyles();

  const [state, setState] = useState({ left: false });

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
    setOpen(true)
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false)
  };

  const id = open ? 'simple-popover' : undefined;

  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button >
          <ListItemIcon>
            <PermIdentity />
          </ListItemIcon>
          <Link to="/pvspc">Jugar Player vs. PC</Link>
        </ListItem>
        <ListItem button >
          <ListItemIcon>
            <SupervisorAccount />
          </ListItemIcon>
          <Link to="/pvsp">Jugar Player vs. Player</Link>
        </ListItem>
      </List>
    </div>);

  return (
    <div className="header">
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={toggleDrawer('left', true)}  edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon/>
          </IconButton>
          <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
              {list('left')}
            </Drawer>
          <Typography variant="h6" className={classes.title}>
            Rock, Paper, Scissors, Lizard and Spock
          </Typography>
          <Button color="inherit" aria-describedby={id} onClick={(e) => handleClick(e)}>Reglas</Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorReference="anchorPosition"
            anchorPosition={{ top: 0, left: 1225 }}
          >
            <Box className={classes.popover}>
              <div><u>Condiciones</u> </div>
              <div>- El primero en ganar 3 jugadas gana la partida</div>
              <div>
                <img src={RulesImage} alt="rules" />
              </div>
            </Box>
          </Popover>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;