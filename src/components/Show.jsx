import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Show = () => {
  const pros = useContext(AppContext);

  const handleDeleteStudent = (index) => {
    const updated = pros.students.filter((_, i) => i !== index);
    pros.setStudents(updated);
    localStorage.setItem("students", JSON.stringify(updated));
  };


  const handleDeleteClass = (index) => {
    const updated = pros.classes.filter((_, i) => i !== index);
    pros.setClasses(updated);
    localStorage.setItem("classes", JSON.stringify(updated));
  };


  const handleDeleteTeacher = (index) => {
    const updated = pros.teachers.filter((_, i) => i !== index);
    pros.setTeachers(updated);
    localStorage.setItem("teachers", JSON.stringify(updated));
  };



  const handleDeleteExam = (index) => {
    const updated = pros.exams.filter((_, i) => i !== index);
    pros.setExams(updated);
    localStorage.setItem("exams", JSON.stringify(updated));
  };


  return (
    <main className="show">

      <h2>Students Detail</h2>
      <div className="table-wrapper">
        <table className="table students_detail">
          <thead>
            <tr>
              <th>Student id</th>
              <th>Student name</th>
              <th>Class id</th>
              <th>DOB</th>
              <th>Address</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pros.students.map((s, i) => (
              <tr key={i}>
                <td>{s.student_id}</td>
                <td>{s.name}</td>
                <td>{s.class_id}</td>
                <td>{s.DOB}</td>
                <td>{s.address}</td>
                <td>
                  <button
                    className="deletebtn"
                    onClick={() => handleDeleteStudent(i)}
                  >
                    🗑
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      <br /><hr /><br />

      <h2>Class Detail</h2>
      <div className="table-wrapper">
        <table className="table class_detail">
          <thead>
            <tr>
              <th>Class id</th>
              <th>Class name</th>
              <th>Teacher id</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pros.classes.map((c, i) => (
              <tr key={i}>
                <td>{c.class_id}</td>
                <td>{c.class_name}</td>
                <td>{c.teacher_id}</td>
                <td>
                  <button
                    className="deletebtn"
                    onClick={() => handleDeleteClass(i)}
                  >
                    🗑
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      <br /><hr /><br />

      <h2>Teacher Detail</h2>
      <div className="table-wrapper">
        <table className="table teacher_detail">
          <thead>
            <tr>
              <th>Teacher id</th>
              <th>Teacher name</th>
              <th>Subject</th>
              <th>Contact</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pros.teachers.map((t, i) => (
              <tr key={i}>
                <td>{t.teacher_id}</td>
                <td>{t.teacher_name}</td>
                <td>{t.subject}</td>
                <td>{t.contact}</td>
                <td>
                  <button
                    className="deletebtn"
                    onClick={() => handleDeleteTeacher(i)}
                  >
                    🗑
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      <br /><hr /><br />

      <h2>Exam Detail</h2>
      <div className="table-wrapper">
        <table className="table class_detail">
          <thead>
            <tr>
              <th>Exam id</th>
              <th>Class id</th>
              <th>Exam Date</th>
              <th>Subject</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pros.exams.map((e, i) => (
              <tr key={i}>
                <td>{e.exam_id}</td>
                <td>{e.class_id}</td>
                <td>{e.exam_date}</td>
                <td>{e.subject}</td>
                <td>
                  <button
                    className="deletebtn"
                    onClick={() => handleDeleteExam(i)}
                  >🗑</button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </main>
  );
};

export default Show;




