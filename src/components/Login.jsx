import React, { useContext,useState } from 'react'
import { AppContext } from "../context/AppContext";


const Login = () => {
    const pros = useContext(AppContext)
    const loginData = JSON.parse(localStorage.getItem("login")) || ["", ""];

const [email, setEmail] = useState(loginData[0]);
const [password, setPassword] = useState(loginData[1]);

  const handleClick = () => {

    if (!email.endsWith("@gmail.com")) {
      alert("Email must end with @gmail.com");
      return;
    }

    if (password.length <= 4) {
      alert("Password must be more than 4 characters");
      return;
    }

    pros.setloginpg("body");
    localStorage.setItem("login", JSON.stringify([email,password]));

  }

    return (
        <div className="loginpg">
            <div className="loginInnerpg">
                <h2>Welcome back</h2>
                <p>Enter your dateil to get login to your account</p>
                {/* <p>Enter email</p> */}
                <div>
                    <div>Enter email</div>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email@gamil.com' />

                </div>
                <div>
                    <div>Enter password</div>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' />
                </div>
                <button className='submit'  onClick={handleClick}>Login</button>
            </div>
        </div>

    )
}

export default Login