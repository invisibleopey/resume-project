import React, { Component, useState } from 'react';
import uniqid from 'uniqid';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import Overview from './components/Overview';

const App = () => {
  const firstName = useGeneralInput('');
  const lastName = useGeneralInput('');
  const title = useGeneralInput('');
  const address = useGeneralInput('');
  const email = useGeneralInput('');
  const phoneNumber = useGeneralInput('');
  const description = useGeneralInput('');
};

function useGeneralInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleGeneralChange(event) {
    setValue(e.target.value);
  }

  return value, handleGeneralChange;
}

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
    this.setState((prevState) => ({
      school: {
        ...prevState.school,
        [name]: value,
      },
    }));
  };

  handleJobChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      job: {
        ...prevState.job,
        [name]: value,
      },
    }));
  };

  handleDelete = (event) => {
    const targetId = event.target.parentNode.parentElement.id;
    let deleteTarget;
    // eslint-disable-next-line default-case
    switch (event.target.parentNode.parentElement.className) {
      case 'schools':
        deleteTarget = 'schools';
        break;
      case 'jobs':
        deleteTarget = 'jobs';
        break;
    }
    this.setState({
      [deleteTarget]: this.state[deleteTarget].filter((item) => item.id !== targetId),
    });
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

  handleSchoolEdit = (event) => {
    const targetId = event.target.parentNode.parentElement.id;
    this.setState((prevState) => {
      const targetSchool = prevState.schools.find((school) => school.id === targetId);
      // The if statement is here to prevent throwing an error in cases where targetSchool is not found,
      // therefore, to prevent trying to read properties from undefined
      if (targetSchool)
        return {
          school: {
            name: targetSchool.name,
            city: targetSchool.city,
            degree: targetSchool.degree,
            subject: targetSchool.subject,
            startDate: targetSchool.startDate,
            endDate: targetSchool.endDate,
            id: targetSchool.id,
          },
          schools: prevState.schools.filter((school) => school.id !== targetId),
        };
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

  handleJobEdit = (event) => {
    const targetId = event.target.parentNode.parentElement.id;
    this.setState((prevState) => {
      const targetJob = prevState.jobs.find((job) => job.id === targetId);
      // The if statement is here to prevent throwing an error in cases where targetJob is not found,
      // therefore, to prevent trying to read properties from undefined
      if (targetJob)
        return {
          job: {
            position: targetJob.position,
            company: targetJob.company,
            city: targetJob.city,
            startDate: targetJob.startDate,
            endDate: targetJob.endDate,
            id: targetJob.id,
          },
          jobs: prevState.jobs.filter((job) => job.id !== targetId),
        };
    });
  };

  render() {
    const {
      firstName,
      lastName,
      title,
      address,
      email,
      phoneNumber,
      description,
      school,
      job,
      schools,
      jobs,
    } = this.state;
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
          <div>
            <Overview
              firstName={firstName}
              lastName={lastName}
              title={title}
              address={address}
              email={email}
              phoneNumber={phoneNumber}
              description={description}
              schools={schools}
              jobs={jobs}
              handleDelete={this.handleDelete}
              handleSchoolEdit={this.handleSchoolEdit}
              handleJobEdit={this.handleJobEdit}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
