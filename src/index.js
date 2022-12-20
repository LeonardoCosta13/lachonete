import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes';
import  Globalstyle from './globalStyle'



ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <Routes />,
        <Globalstyle />
    </React.StrictMode>
);

