import React, { useContext } from 'react'
import { AlertsContext } from '../Context/AlertContext';
export default function Alert(props) {
  const {alert}= useContext(AlertsContext);

  return (
    <div className="container">
    {alert && <div className={`alert alert-${alert.type?alert.type:'success'} d-flex align-items-center`} role="alert">
    <div>
        {alert.message}
    </div>
    </div>}
    </div>
  )
}
