import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";


const Enter = () => {
  const pros = useContext(AppContext)
  const [activeForm, setActiveForm] = useState("detail");
  const [formData, setFormData] = useState({})

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // const handleSubmit = () => {
  //   if (activeForm === "student") {
  //     pros.setStudents([...pros.students, formData]);
  //   }
  //   else if (activeForm === "class") {
  //     pros.setClasses([...pros.classes, formData]);
  //   }
  //   else if (activeForm === "teacher") {
  //     pros.setTeachers([...pros.teachers, formData]);
  //   }
  //   else if (activeForm === "exam") {
  //     pros.setExams([...pros.exams, formData]);
  //   }

  //   setFormData({});
  // };

  const handleSubmit = () => {
    if (activeForm === "student") {
      const exists = pros.students.some(
        (s) => s.student_id === formData.student_id || formData.student_id.length<1
      );

      if (exists) {
        alert("student ID invalid!");
        return;
      }
      const updated = [...pros.students, formData];
      pros.setStudents(updated);
      localStorage.setItem("students", JSON.stringify(updated));
    }

    else if (activeForm === "class") {
      const exists = pros.classes.some(
        (s) => s.class_id === formData.class_id || s.class_id===""
      );

      if (exists) {
        alert("class ID invalid!");
        return;
      }
      const updated = [...pros.classes, formData];
      pros.setClasses(updated);
      localStorage.setItem("classes", JSON.stringify(updated));
    }

    else if (activeForm === "teacher") {
      const exists = pros.teachers.some(
        (s) => s.teacher_id === formData.teacher_id || s.teacher_id===""
      );

      if (exists) {
        alert("teacher ID invalid!");
        return;
      }
      const updated = [...pros.teachers, formData];
      pros.setTeachers(updated);
      localStorage.setItem("teachers", JSON.stringify(updated));
    }

    else if (activeForm === "exam") {
      const exists = pros.exams.some(
        (s) => s.exam_id === formData.exam_id || s.exam_id===""
      );

      if (exists) {
        alert("exam ID invalid!");
        return;
      }
      const updated = [...pros.exams, formData];
      pros.setExams(updated);
      localStorage.setItem("exams", JSON.stringify(updated));
    }

    setFormData({});
  };


  return (
    <main className="enter">
      {/* {console.log(activeForm)} */}
      <div className="sidebar">
        <div className="buttons">
          <div className="btnheader"><h6>MAIN MENU</h6></div>

          <button className={`button detail ${activeForm === "detail" ? "btnActive" : ""}`} onClick={() => setActiveForm("detail")} >
            📈 Dashboard
          </button>
          <button className={`button student ${activeForm === "student" ? "btnActive" : ""}`} onClick={() => setActiveForm("student")} >
            🎓 Student
          </button>
          <button className={`button class ${activeForm === "class" ? "btnActive" : ""}`} onClick={() => setActiveForm("class")}>
            🏫 Class
          </button>
          <button className={`button teacher ${activeForm === "teacher" ? "btnActive" : ""}`} onClick={() => setActiveForm("teacher")} >
            👨‍🏫 Teacher
          </button>
          <button className={`button exam ${activeForm === "exam" ? "btnActive" : ""}`} onClick={() => setActiveForm("exam")} >
            📝 Exam
          </button>
          <div className="admin">
            <div className="adminLogo">PC  </div>
            <div className="adminSchool">
              <div className="adminName">Pradeep Alok</div>
              <div>EduCore System</div>
            </div>

          </div>
        </div>
      </div>

      <div className="formCard">
        {activeForm === "detail" && (
          <div className="detailform form">
            <div className="summary">
              <div className="summaryitem">
                <div>🎓</div>
                <div>{pros.students.length}</div>
                <div> 
                <h6>Total</h6>
                <h6>Student</h6>
                </div>
               
                
              </div>
              <div className="summaryitem">
                <div>🏫</div>
                <div>{pros.classes.length}</div>
                <h6>Total</h6>
                <h6>Classes</h6>
              </div>
              <div className="summaryitem">
                <div>👨‍🏫</div>
                <div>{pros.teachers.length}</div>
                <h6>Total</h6>
                <h6>Teachers</h6>
              </div>
              <div className="summaryitem">
                <div>📝</div>
                <div>{pros.exams.length}</div>
                <h6>Total</h6>
                <h6>Exams</h6>
              </div>
              
            </div>
            <div className="summarybottom">
              {/* <img src="school.png" alt="" /> */}
            </div>

          </div>
        )}

        {activeForm === "student" && (
          <div className="studentform form">
            <h2>Enter Student Detail</h2>
            <br />
            <input value={formData.student_id || ""} onChange={handleChange} type="text" name="student_id" placeholder="student_id" />
            <input value={formData.name || ""} onChange={handleChange} type="text" name="name" placeholder="Enter name" />
            <input value={formData.class_id || ""} onChange={handleChange} type="text" name="class_id" placeholder="Enter class_id" />
            <input value={formData.DOB || ""} onChange={handleChange} type="date" name="DOB" placeholder="DOB" />
            <input value={formData.address || ""} onChange={handleChange} type="text" name="address" placeholder="Enter Address" />
            <button className="submit" onClick={handleSubmit}>Submit</button>
          </div>
        )}

        {activeForm === "class" && (
          <div className="classform form">
            <h2>Enter Class Detail</h2>
            <br />
            <input value={formData.class_id || ""} onChange={handleChange} type="text" name="class_id" placeholder="class_id" />
            <input value={formData.class_name || ""} onChange={handleChange} type="text" name="class_name" placeholder="Enter class_name" />
            <input value={formData.teacher_id || ""} onChange={handleChange} type="text" name="teacher_id" placeholder="Enter teacher_id" />
            <button className="submit" onClick={handleSubmit}>Submit</button>
          </div>
        )}

        {activeForm === "teacher" && (
          <div className="teacherform form">
            <h2>Enter Teacher Detail</h2>
            <br />
            <input value={formData.teacher_id || ""} onChange={handleChange} type="text" name="teacher_id" placeholder="teacher_id" />
            <input value={formData.teacher_name || ""} onChange={handleChange} type="text" name="teacher_name" placeholder="Enter teacher_name" />
            <input value={formData.subject || ""} onChange={handleChange} type="text" name="subject" placeholder="Enter subject" />
            <input value={formData.contact || ""} onChange={handleChange} type="number" name="contact" placeholder="Enter contact" />
            <button className="submit" onClick={handleSubmit}>Submit</button>
          </div>
        )}

        {activeForm === "exam" && (
          <div className="examform form">
            <h2>Enter Exam Detail</h2>
            <br />
            <input value={formData.exam_id || ""} onChange={handleChange} type="text" name="exam_id" placeholder="exam_id" />
            <input value={formData.class_id || ""} onChange={handleChange} type="text" name="class_id" placeholder="Enter class_id" />
            <input value={formData.exam_date || ""} onChange={handleChange} type="date" name="exam_date" />
            <input value={formData.subject || ""} onChange={handleChange} type="text" name="subject" placeholder="Enter subject" />
            <button className="submit" onClick={handleSubmit}>Submit</button>
          </div>
        )}
      </div>
    </main>

  )
}

export default Enter