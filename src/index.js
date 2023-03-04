import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import * as ReactRouter from 'react-router-dom';
import Error from './components/Error';

const router = ReactRouter.createHashRouter([
    {
        path: '/',
        element: <App route="index" />,
        errorElement: <Error />
    }, {
        path: '/about',
        element: <App route="about" />,
        errorElement: <Error />
    }, {
        path: '/contact',
        element: <App route="contact" />,
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReactRouter.RouterProvider router={router} />
  </React.StrictMode>
);