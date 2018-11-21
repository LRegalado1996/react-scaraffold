//dependences
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Assets
import './global/css/style.css';

//components
import Header from './global/Header';
import Content from './global/Content';
import Footer from './global/Footer';

class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const { children } = this.props;
    // console.log(this.props);
    return (
      <div className="App">
        <Header />
        <Content body={ children }/>
        <Footer />
      </div>
    ); //end return
  } //end Render
} //end App component

export default App;
