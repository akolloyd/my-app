import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import {withStyles} from '@material-ui/core/styles';

const styles = {
	root: {
		height: '100vh',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between'
	}
}

class NotFound extends Component {
  render() {
  	const {classes} = this.props;
    return (
      <div className={classes.root}>
      	404. Not found.
      </div>
    );
  }
}

export default withStyles(styles)(NotFound);