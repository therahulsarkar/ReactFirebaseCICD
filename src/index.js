import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
// For React router enable this
    import {BrowserRouter} from 'react-router-dom';
    import Main from './Router/Main' 

const rootElement = document.getElementById('root');

// For React router enable these and disable <App />
    ReactDOM.render(
        <BrowserRouter>
            <Main />
        </BrowserRouter>,rootElement)



// ReactDOM.render(<App /> ,rootElement)