import React, { Component } from 'react';
import uniqid from 'uniqid';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import General from './components/General';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Abdul',
      lastName: 'Muri',
      title: 'Loader',
      address: 'London',
      email: 'oabduld@gmail.com',
      phoneNumber: '090',
      description: 'Yeah',
      school: {
        name: '',
        city: '',
        degree: '',
        subject: '',
        startDate: '',
        endDate: '',
        id: uniqid(),
      },
      schools: [],
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { firstName, lastName, title, address, email, phoneNumber, description } = this.state;
    return (
      <div className="App">
        <Header />
        <div className="content">
          <General
            firstName={firstName}
            lastName={lastName}
            title={title}
            address={address}
            email={email}
            phoneNumber={phoneNumber}
            description={description}
            handleChange={this.handleChange}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
