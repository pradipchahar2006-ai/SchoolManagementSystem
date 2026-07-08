import { useState } from 'react'
import './App.css'
import Enter from './components/Enter'
import Navbar from './components/Navbar'
import Show from './components/Show'
import { AppContext } from './context/AppContext'
import Footer from './components/footer'
import Login from './components/Login'


function App() {
  const [page, setPage] = useState("Enter")
  const getData = (key) => {
    try {
      return JSON.parse(localStorage.getItem(key)) || [];
    } catch {
      return [];
    }
  };
  const [loginpg, setloginpg] = useState("login")
  const [students, setStudents] = useState(() => getData("students"));
  const [classes, setClasses] = useState(() => getData("classes"));
  const [teachers, setTeachers] = useState(() => getData("teachers"));
  const [exams, setExams] = useState(() => getData("exams"));

  return (
    <>
      <AppContext.Provider value={{loginpg,setloginpg, students, setStudents, classes, setClasses, teachers, setTeachers, exams, setExams }}>
        <Navbar page={page} setPage={setPage} />
        {loginpg==="body" ?
        <>
        <div className='main'>
          {page === "Enter" && <Enter />}
          {page === "Show" && <Show />}

        </div>
        <Footer/>
        </>
          :<Login/>}
      </AppContext.Provider>
    </>
  )
}

export default App
