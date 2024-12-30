import  { createContext, useState, useEffect } from "react";
import { GetLocalstorage, SetLocalstorage } from "../utils/Localstrg";

// eslint-disable-next-line react-refresh/only-export-components
export const Authcontext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [userdata, setUserdata] = useState(null);

  useEffect(() => {
    SetLocalstorage()
    const { employeedata, admindata } = GetLocalstorage();
    setUserdata({ employeedata, admindata });
  }, []);

  return (
    <div>
      <Authcontext.Provider value={userdata}>{children}</Authcontext.Provider>
    </div>
  );
};

export default AuthProvider;
