import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import App from './App';
import UserStore from './store/UserStore';
import 'bootstrap/dist/css/bootstrap.min.css'
import DeviceStore from './store/DeviceStore';
// import './.env';

export const Context = createContext(null)
console.log(process.env.REACT_APP_API_URL)

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

const root = ReactDOM.createRoot(document.getElementById("root"));

// ReactDOM.render(
root.render(
    // <StrictMode>
        <Context.Provider value={{
            user: new UserStore(),
            device: new DeviceStore(),
        }}>
        <App />
        </Context.Provider>,
    // </StrictMode>

    // <Context.Provider value={{
    //     user: new UserStore()
    // }}>
    //     <App />,
    // </Context.Provider>,
    
    
        // document.getElementById('root')
);