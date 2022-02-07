import React from 'react';

function Education(props) {
  const { school, handleChange, handleSchoolSubmit } = props;
  return (
    <div>
      <form
        action="#"
        className="education"
        data-testid="education-form"
        onSubmit={handleSchoolSubmit}
      >
        <fieldset>
          <legend>Education</legend>
          <input
            type="text"
            name="name"
            value={school.name}
            onChange={handleChange}
            placeholder="University Name"
          />
          <input
            type="text"
            name="city"
            value={school.city}
            onChange={handleChange}
            placeholder="City"
          />
          <input
            type="text"
            name="degree"
            value={school.degree}
            onChange={handleChange}
            placeholder="Degree"
          />
          <input
            type="text"
            name="subject"
            value={school.subject}
            onChange={handleChange}
            placeholder="Subject"
          />
          <input
            type="text"
            name="startDate"
            value={school.startDate}
            onChange={handleChange}
            placeholder="From"
          />
          <input
            type="text"
            name="endDate"
            value={school.endDate}
            onChange={handleChange}
            placeholder="To"
          />
          <button type="submit">ADD</button>
        </fieldset>
      </form>
    </div>
  );
}

export default Education;
