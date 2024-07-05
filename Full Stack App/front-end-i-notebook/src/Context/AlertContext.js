import React, { createContext, useState } from 'react'

export const AlertsContext= createContext(null);

export  function AlertContext({children}) {

    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
      setAlert({ message, type });
  
      setTimeout(() => {
        setAlert(null);
      }, 1500); // Automatically clear the alert after 3 seconds
    };
  return (
    <AlertsContext.Provider value={{alert, showAlert}}>
      {children}
    </AlertsContext.Provider>
  )
}
