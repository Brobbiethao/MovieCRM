import React, { Component } from 'react';
import 'react-bootstrap'; 
import HeaderComponents from './Components/HeaderContainer/headerComponents';
import MiddleComponents from './Components/MiddleContainer/middleComponents';
import FooterComponents from './Components/FooterContainer/footerComponents';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row full-width-row">
          <HeaderComponents />
          <MiddleComponents />
          <FooterComponents />
        </div>
      </div>
    );
  }
}

export default App;
