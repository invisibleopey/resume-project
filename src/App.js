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

  const handleSchoolEdit = (event) => {
    const targetId = event.target.parentNode.parentElement.id;
    const targetSchool = schools.find((school) => school.id === targetId);
    // The if statement is here to prevent throwing an error in cases where targetSchool is not found,
    // therefore, to prevent trying to read properties from undefined
    if (targetSchool)
      setSchool(() => {
        return {
          name: targetSchool.name,
          city: targetSchool.city,
          degree: targetSchool.degree,
          subject: targetSchool.subject,
          startDate: targetSchool.startDate,
          endDate: targetSchool.endDate,
          id: targetSchool.id,
        };
      });
    setSchools((prevState) => prevState.filter((school) => school.id !== targetId));
  };

  const handleJobEdit = (event) => {
    const targetId = event.target.parentNode.parentElement.id;
    const targetJob = jobs.find((job) => job.id === targetId);
    // The if statement is here to prevent throwing an error in cases where targetJob is not found,
    // therefore, to prevent trying to read properties from undefined
    if (targetJob)
      setJob(() => {
        return {
          position: targetJob.position,
          company: targetJob.company,
          city: targetJob.city,
          startDate: targetJob.startDate,
          endDate: targetJob.endDate,
          id: targetJob.id,
        };
      });
    setJobs((prevState) => prevState.filter((job) => job.id !== targetId));
  };

  const handleDelete = (event) => {
    const targetId = event.target.parentNode.parentElement.id;
    // eslint-disable-next-line default-case
    switch (event.target.parentNode.parentElement.className) {
      case 'schools':
        setSchools(schools.filter((item) => item.id !== targetId));
        break;
      case 'jobs':
        setJobs(jobs.filter((item) => item.id !== targetId));
        break;
    }
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
            handleDelete={handleDelete}
            handleSchoolEdit={handleSchoolEdit}
            handleJobEdit={handleJobEdit}
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
