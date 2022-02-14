import React, { useState } from 'react';
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
  const [school, setSchool] = useState({
    name: '',
    city: '',
    degree: '',
    subject: '',
    startDate: '',
    endDate: '',
    id: uniqid(),
  });
  const [schools, setSchools] = useState([]);
  const [job, setJob] = useState({
    position: '',
    company: '',
    city: '',
    startDate: '',
    endDate: '',
    id: uniqid(),
  });
  const [jobs, setJobs] = useState([]);

  const handleSchoolChange = (event) => {
    const { name, value } = event.target;
    setSchool((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleJobChange = (event) => {
    const { name, value } = event.target;
    setJob((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSchoolSubmit = (event) => {
    event.preventDefault();
    setSchools(schools.concat(school));
    setSchool({
      name: '',
      city: '',
      degree: '',
      subject: '',
      startDate: '',
      endDate: '',
      id: uniqid(),
    });
  };

  const handleJobSubmit = (event) => {
    event.preventDefault();
    setJobs(jobs.concat(job));
    setJob({
      position: '',
      company: '',
      city: '',
      startDate: '',
      endDate: '',
      id: uniqid(),
    });
  };

  return (
    <div className="App">
      <Header />
      <div className="content">
        <General
          firstName={{ ...firstName }}
          lastName={{ ...lastName }}
          title={{ ...title }}
          address={{ ...address }}
          email={{ ...email }}
          phoneNumber={{ ...phoneNumber }}
          description={{ ...description }}
        />
        <Education
          school={school}
          handleChange={handleSchoolChange}
          handleSchoolSubmit={handleSchoolSubmit}
        />
        <Experience job={job} handleChange={handleJobChange} handleJobSubmit={handleJobSubmit} />
        <div>
          <Overview
            firstName={firstName.value}
            lastName={lastName.value}
            title={title.value}
            address={address.value}
            email={email.value}
            phoneNumber={phoneNumber.value}
            description={description.value}
            schools={schools}
            jobs={jobs}
            // handleDelete={this.handleDelete}
            // handleSchoolEdit={this.handleSchoolEdit}
            // handleJobEdit={this.handleJobEdit}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

function useGeneralInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(event) {
    setValue(event.target.value);
  }

  return { value, handleChange };
}

export default App;
