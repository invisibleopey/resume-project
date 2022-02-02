import React from 'react';

function General(props) {
  return (
    <div className="general">
      <form action="#" data-testid="general-form">
        <fieldset>
          <legend>Personal Information</legend>
          <input
            type="text"
            name="firstName"
            value="Adullahi"
            // onChange={}
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastName"
            value="Muritala"
            // onChange={handleChange}
            placeholder="Last Name"
          />
          <input
            type="text"
            name="title"
            value="Manager"
            // onChange={handleChange}
            placeholder="Title"
          />
          <input
            type="text"
            name="address"
            value="London"
            // onChange={handleChange}
            placeholder="Address"
          />
          <input
            type="email"
            name="email"
            value="oabdullahi37@gmail.com"
            // onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="text"
            name="phoneNumber"
            value="08034091908"
            // onChange={handleChange}
            placeholder="Phone Number"
          />
          <textarea
            name="description"
            cols="10"
            rows="10"
            placeholder="Description"
            value="Yeah yeah yeah"
            // onChange={handleChange}
          ></textarea>
        </fieldset>
      </form>
    </div>
  );
}

export default General;
