import React, { Component } from 'react';
import uniqid from 'uniqid';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      title: '',
      address: '',
      email: '',
      phoneNumber: '',
      description: '',
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
      job: {
        position: '',
        company: '',
        city: '',
        startDate: '',
        endDate: '',
        id: uniqid(),
      },
      jobs: [],
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSchoolChange = (event) => {
    const { name, value } = event.target;
    this.setState({ school: { [name]: value } });
  };

  handleJobChange = (event) => {
    const { name, value } = event.target;
    this.setState({ job: { [name]: value } });
  };

  handleSchoolSubmit = (event) => {
    event.preventDefault();
    this.setState({
      schools: this.state.schools.concat(this.state.school),
      school: {
        name: '',
        city: '',
        degree: '',
        subject: '',
        startDate: '',
        endDate: '',
        id: uniqid(),
      },
    });
  };

  handleJobSubmit = (event) => {
    event.preventDefault();
    this.setState({
      jobs: this.state.jobs.concat(this.state.job),
      job: {
        position: '',
        company: '',
        city: '',
        startDate: '',
        endDate: '',
        id: uniqid(),
      },
    });
  };

  render() {
    const { firstName, lastName, title, address, email, phoneNumber, description, school, job } =
      this.state;
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
          <Education
            school={school}
            handleChange={this.handleSchoolChange}
            handleSchoolSubmit={this.handleSchoolSubmit}
          />
          <Experience
            job={job}
            handleChange={this.handleJobChange}
            handleJobSubmit={this.handleJobSubmit}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
