import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './Navbar.css';

//Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';

let potenchColor = ['#1f1f1f', '#134328','#0D2615', '#1F6F42', '#B7245C', '#EF476F', '#DAB001', '#CF5C36', '#EFF2F1', '#2C8C99', '#7C7C7C', '#F7F7F7', '#574B60', '#514663']

const useStyles = makeStyles({
    root: {
      width: '100%',
      margin: '0px',
    //   height: '6em',
      background: potenchColor[potenchColor.length-1],
    },
  });

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Navbar(props) {
    const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props} >
        <AppBar className={classes.root}>
            <Toolbar>
            <Link to="/" >
                <div className='nav-logo'>
                    <h1 > BIKE MAN DAN <i class="fas fa-home"></i> </h1>
                </div>
            </Link>
            <div className='nav-pages'>
            <Link to="/about" >
                <div className='nav-logo'>
                    <h1 > About <i class="fas fa-bicycle"></i> </h1>
                </div>
            </Link>
            <Link to="/services" >
                <div className='nav-logo'>
                    <h1 > Services <i class="fas fa-wrench"></i> </h1>
                </div>
            </Link>
            <Link to="/jobs" >
                <div className='nav-logo'>
                    <h1 > Individual Jobs <i class="fas fa-cog"></i> </h1>
                </div>
            </Link>
            </div>
            <a href="tel:07817925929" className='nav-number'><i class="fas fa-phone-alt"></i> 07817925929</a>
            </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}
