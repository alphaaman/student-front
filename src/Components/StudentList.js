import React from 'react';

const StudentList = ({ students,  onUpdate, onDelete }) => {
  const tableStyle = {
    
    width: '80vw',
    height: '80vh',
    borderCollapse: 'collapse',
    border: '1px solid #ccc',
    borderRadius: '4px',
    overflow: 'auto',
  };

  const thStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '12px',
    textAlign: 'center',
  };

  const tdStyle = {
    padding: '8px',
    borderBottom: '1px solid #ccc',
  };

  const darkHeadingStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '12px',
    textAlign: 'center',
  };
  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '4px',
  };
  const handleUpdate = (student) => {
    onUpdate(student);
  };

  const handleDelete = (student) => {
    onDelete(student);
  };

  return (
    <div style={{margin:"1rem",display:'flex',
    justifyContent:'center',}}>
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}>Student Id</th>
          <th style={thStyle}>First Name</th>
          <th style={thStyle}>Last Name</th>
          <th style={thStyle}>Email</th>
          <th style={thStyle}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td style={tdStyle}>{student.id}</td>
            <td style={tdStyle}>{student.firstName}</td>
            <td style={tdStyle}>{student.lastName}</td>
            <td style={tdStyle}>{student.email}</td>
            <td style={tdStyle}>
                <button
                  style={buttonStyle}
                  onClick={() => handleUpdate(student)}
                >
                  Update
                </button>
                <button
                  style={buttonStyle}
                  onClick={() => handleDelete(student)}
                >
                  Delete
                </button>
              </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default StudentList;
