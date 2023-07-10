import React, { useState } from 'react';

const StudentForm = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ firstName, lastName, email });
    setFirstName('');
    setLastName('');
    setEmail('');
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
    // minHeight: '100vh',
  };

  const formStyle = {
    width: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#f1f1f1',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '12px',
  };

  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            style={inputStyle}
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            id="lastName"
            style={inputStyle}
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            style={inputStyle}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button style={buttonStyle} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
