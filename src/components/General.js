import React from 'react';

function General(props) {
  const { firstName, lastName, title, address, email, phoneNumber, description, handleChange } =
    props;
  return (
    <div className="general">
      <form action="#" data-testid="general-form">
        <fieldset>
          <legend>Personal Information</legend>
          <input
            type="text"
            name="firstName"
            value={firstName.value}
            onChange={firstName.handleChange}
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastName"
            value={lastName.value}
            onChange={lastName.handleChange}
            placeholder="Last Name"
          />
          <input
            type="text"
            name="title"
            value={title.value}
            onChange={title.handleChange}
            placeholder="Title"
          />
          <input
            type="text"
            name="address"
            value={address.value}
            onChange={address.handleChange}
            placeholder="Address"
          />
          <input
            type="email"
            name="email"
            value={email.value}
            onChange={email.handleChange}
            placeholder="Email"
          />
          <input
            type="text"
            name="phoneNumber"
            value={phoneNumber.value}
            onChange={phoneNumber.handleChange}
            placeholder="Phone Number"
          />
          <textarea
            name="description"
            cols="10"
            rows="10"
            placeholder="Description"
            value={description.value}
            onChange={description.handleChange}
          ></textarea>
        </fieldset>
      </form>
    </div>
  );
}

export default General;
