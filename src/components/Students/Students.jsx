import React, { useState, useEffect } from "react";
import "../Student/Student.css";

import getStudents from "../../services/StudentService";
import Student from "../Student/Student";
import InputForm from "../InputForm/InputForm";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [nameFilter, setNameFilter] = useState([]);
  const [tagFilter, setTagFilter] = useState([]);

  const handleStudents = async () => {
    let data = await getStudents();
    let students = data.students;
    let newStudents = []
    students.map((student) => {
      let addTags = student;
      addTags.tags = [];
      newStudents.push(addTags);
    });
    setStudents(newStudents);
    setFilteredStudents(newStudents);
    setNameFilter(newStudents);
    setTagFilter(newStudents);
  }

  const filterNames = (str) => {
    let newNameFilter = [];
    students.map((student) => {
      const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();
      if (fullName.includes(str)) {
        newNameFilter.push(student);
      }
    });
    let studentsFilter = [];
    tagFilter.map((student) => {
      const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();
      if (fullName.includes(str)) {
        studentsFilter.push(student);
      }
    });
    setFilteredStudents(studentsFilter);
    setNameFilter(newNameFilter);
  };

  const filterTags = (str) => {
    if (str) {
      let newTagFilter = [];
      let newStudentFilter = [];
      students.map((student) => {
        let tagged = false;
        student.tags.map((tag) => {
          if (tag.includes(str)) {
            tagged = true;
          }
        });
        if (tagged) {
          newTagFilter.push(student);
        }
      });
      filteredStudents.map((student) => {
        let tagged = false;
        student.tags.map((tag) => {
          if (tag.includes(str)) {
            tagged = true;
          }
        });
        if (tagged) {
          newStudentFilter.push(student);
        }
      });
      setFilteredStudents(newStudentFilter);
      setTagFilter(newTagFilter);
    } else {
      setFilteredStudents(nameFilter);
      setTagFilter(students);
    }
  };

  const addTag = (str, index) => {
    const tagForStudentData = [...students];
    tagForStudentData[index].tags.push(str);
    setStudents(tagForStudentData);
  };

  useEffect(() => {
    handleStudents();
  }, []);

  return (
    <div className="contentContainer" data-testid="data-list">
      <div data-testid="search-bar">
        <InputForm type={"name"} filterFunc={filterNames} />
        <InputForm type={"tags"} filterFunc={filterTags} />
      </div>
      {filteredStudents.map((student, index) => {
        return (
          <Student
            key={index.toString()}
            index={index}
            student={student}
            addTag={addTag}
          />
        );
      })}
    </div>
  );
};

export default Students;
