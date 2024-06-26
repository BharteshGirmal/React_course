// AlertsState.js
import React, { createContext, useState } from 'react';

const AlertsContext = createContext();

export default function AlertsState({ children }) {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ message, type });

    setTimeout(() => {
      setAlert(null);
    }, 1500); // Automatically clear the alert after 3 seconds
  };

  return (
    <AlertsContext.Provider value={{ alert, showAlert }}>
      {children}
    </AlertsContext.Provider>
  );
}

export { AlertsState, AlertsContext };
