import { useState, useEffect, useContext } from "react";
import "./App.css";
import Login from "./Components/Auth/Login";
import { GetLocalstorage, SetLocalstorage } from "./utils/Localstrg";

import EmployeDashboard from "./Components/Dashboard/Employedash";
import AdminDashbord from "./Components/Dashboard/Admindsh";
import { Authcontext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const [loginuser,setLogiuser] = useState()

  const dat = useContext(Authcontext);
  // useEffect(() => {
  //   if (dat) {
  //     const logedinuser = localStorage.getItem("logedinuser");
  //     if (logedinuser) {
  //       setUser(logedinuser.role);
  //     }
  //   }
  // }, [dat]);

  console.log(loginuser,"this is loguerdata")

  const Handlelogin = (email, password) => {
    if ( dat?.admindata?.find((e) => e.email == email && e.password == password)) {
      setUser("admin");
      localStorage.setItem("logedinuser", JSON.stringify({ role: "admin" }));
    } else if (dat) {
      const employe = dat.employeedata?.find((e) => e.email == email && e.password == password)
      if(employe){
        setUser("user");
        setLogiuser(employe)
        localStorage.setItem("logedinuser", JSON.stringify({ role: "user" }));
      }
    } else {
      alert("wrong login");
    }
  };

  return (
    <>
      {!user ? <Login Handlelogin={Handlelogin} /> : ""}

      {user == "admin" ?  <AdminDashbord />: (user =="user" ? <EmployeDashboard  data={loginuser} /> : null)
       }
    </>
  );
}

export default App;
