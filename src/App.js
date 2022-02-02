import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import General from './components/General';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
          <General />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
