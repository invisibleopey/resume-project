import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function Overview(props) {
  const {
    firstName,
    lastName,
    title,
    address,
    email,
    phoneNumber,
    description,
    schools,
    jobs,
    handleDelete,
    handleSchoolEdit,
    handleJobEdit,
  } = props;
  return (
    <div>
      <div className="overview-hero">
        <h2>{`${firstName} ${lastName}`}</h2>
        <h3>{title}</h3>
      </div>
      <div className="overview-main">
        <div className="contact-details">
          <h3>Contact Details</h3>
          <p>Address: {address}</p>
          <p>Email: {email}</p>
          <p>Phone Number: {phoneNumber}</p>
        </div>
        <div className="description">
          <h3>Description</h3>
          <p>{description}</p>
        </div>
        <div className="overview-edu">
          <h3>Education</h3>
          {schools.map((school) => {
            return (
              <div className="schools" key={school.id} id={school.id}>
                <div>
                  <h4>{`${school.startDate} - ${school.endDate}`}</h4>
                </div>
                <div>
                  <h4>{`${school.name}, ${school.city}`}</h4>
                  <p>Degree: {school.degree}</p>
                  <p>Subject: {school.subject}</p>
                </div>
                <FontAwesomeIcon icon={faEdit} onClick={handleSchoolEdit} className="icons" />
                <FontAwesomeIcon icon={faTrashAlt} onClick={handleDelete} className="icons" />
              </div>
            );
          })}
        </div>
        <div className="overview-exp">
          <h3>Experience</h3>
          {jobs.map((job) => {
            return (
              <div className="jobs" key={job.id} id={job.id}>
                <div>
                  <h4>{`${job.startDate} - ${job.endDate}`}</h4>
                </div>
                <div>
                  <h4>{`${job.position}`}</h4>
                  <p>{`${job.company}, ${job.city}`}</p>
                </div>
                <FontAwesomeIcon icon={faEdit} onClick={handleJobEdit} className="icons" />
                <FontAwesomeIcon icon={faTrashAlt} onClick={handleDelete} className="icons" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Overview;
