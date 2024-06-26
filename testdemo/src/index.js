import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {NoteState} from './Context/NoteContext';
import { AlertContext } from './Context/AlertContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AlertContext>
    <NoteState>
    <App />
    </NoteState>
    </AlertContext>
  </React.StrictMode>
);

reportWebVitals();
