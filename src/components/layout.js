import React, { Component } from 'react';

import Header from './headernavbar/header';
import Navbar from './headernavbar/nav';
class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        {this.props.children}
        <Header />
        <Navbar />
      </div>
    );
  }
}


export default Layout;