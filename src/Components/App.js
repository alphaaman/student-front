import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StudentForm from './StudentForm';
import StudentList from './StudentList';

const App = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://54.236.225.4:8090/students/v1/students');
      setStudents(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createStudent = async (student) => {
    try {
      const response = await axios.post('http://54.236.225.4:8090/students/v1/students', student);
      setStudents([...students, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const updateStudent = async (updatedStudent) => {
    try {
      const response = await axios.put(`http://54.236.225.4:8090/students/v1/students/${updatedStudent.id}`, updatedStudent);
      const updatedStudents = students.map((student) =>
        student.id === updatedStudent.id ? response.data : student
      );
      setStudents(updatedStudents);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteStudent = async (studentToDelete) => {
    try {
      await axios.delete(`http://54.236.225.4:8090/students/v1/students/${studentToDelete.id}`);
      const updatedStudents = students.filter((student) => student.id !== studentToDelete.id);
      setStudents(updatedStudents);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Student CRUD</h1>
      <StudentForm onSubmit={createStudent} />
      <StudentList students={students} onUpdate={updateStudent} onDelete={deleteStudent} />
    </div>
  );
};

export default App;
