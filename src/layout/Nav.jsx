
import React, { useState } from 'react';
import { Drawer, List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { SupervisorAccount, PermIdentity, School } from '@material-ui/icons';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    list: {
      width: 300,
    }
  }));

function Nav() {

    const classes = useStyles();

    const [state, setState] = useState({ left: false });

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
              <ListItemText primary={'Jugar Player vs. PC'} />
            </ListItem>
            <ListItem button >
              <ListItemIcon>
                <SupervisorAccount />
              </ListItemIcon>
              <ListItemText primary={'Jugar Player vs. Player'} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon><School /></ListItemIcon>
              <ListItemText primary={'Tutorial'} />
            </ListItem>
          </List>
        </div>);

    return (
        <div className="">
            <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                {list('left')}
            </Drawer>
        </div>
    )
}

export default Nav;