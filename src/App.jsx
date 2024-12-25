import { useState , useEffect} from 'react'
import './App.css'
import Login from './Components/Auth/Login'
import { GetLocalstorage, SetLocalstorage } from './utils/Localstrg'

import EmployeDashboard from './Components/Dashboard/Employedash'
import AdminDashbord from './Components/Dashboard/Admindsh'

function App() {
  const [user, setUser] = useState(null)

  // useEffect(() => {
   
  
  //   // SetLocalstorage()
  //   GetLocalstorage()
  //   return () => {
  //   }
  // }, [])

  const Handlelogin =(email,password)=>{
if(email=="admin@m.com" && password =="123"){
    console.log("this is admin")
    setUser("admin")
} else if(email =="user@q.com" && password =="123"){
  setUser("user")
  console.log("this s user")
}else {
  alert("wrong login")
}
  }
  

  return (
    <>
    
  {!user ?  <Login  Handlelogin={Handlelogin} />:''}
 
 {user == "admin"? <AdminDashbord/> :   <EmployeDashboard/> }

  
    </>
  )
}

export default App
