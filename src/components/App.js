//dependences
import React, { Component } from 'react';
import './global/css/style.css';

//components
import Header from './global/Header';
import Content from './global/Content';
import Footer from './global/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    ); //end return
  } //end Render
} //end App component

export default App;
