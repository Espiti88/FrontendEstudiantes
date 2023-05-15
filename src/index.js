import React from 'react';
import ReactDOM from 'react-dom/client';
import { EstudiantesApp } from './EstudianteApp';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <EstudiantesApp/>
    </React.StrictMode> 
)