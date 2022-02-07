import React from 'react';

function Experience(props) {
  const { job, handleChange, handleJobSubmit } = props;
  return (
    <div>
      <form
        action="#"
        className="experience"
        onSubmit={handleJobSubmit}
        data-testid="experience-form"
      >
        <fieldset>
          <legend>Experience</legend>
          <input
            type="text"
            name="position"
            value={job.position}
            placeholder="Position"
            onChange={handleChange}
          />
          <input
            type="text"
            name="company"
            value={job.company}
            placeholder="Company"
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            value={job.city}
            placeholder="City"
            onChange={handleChange}
          />
          <input
            type="text"
            name="startDate"
            value={job.startDate}
            placeholder="From"
            onChange={handleChange}
          />
          <input
            type="text"
            name="endDate"
            value={job.endDate}
            placeholder="To"
            onChange={handleChange}
          />
          <button type="submit">ADD</button>
        </fieldset>
      </form>
    </div>
  );
}

export default Experience;
