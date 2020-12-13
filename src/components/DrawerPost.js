import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import PostView from './PostView';

const useStyles = makeStyles({
  list: {
    maxWidth: '550px',
    minWidth: 'auto'
  },
  fullList: {
    width: 'auto',
  },
});



function DrawerPost() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <PostView/>
    </div>
  );
    return (
        <div>
            {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button variant="contained"
                  color="default"
                  size="small" onClick={toggleDrawer(anchor, true)}>See full post</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
        </div>
    )
}

export default DrawerPost
