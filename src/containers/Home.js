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

class Home extends Component {
  render() {
  	const {classes} = this.props;
    return (
      <div className={classes.root}>
      	<Header />
        This is the homepage.
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(Home);