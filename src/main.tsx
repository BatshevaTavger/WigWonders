import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home.component.tsx';
import { SignUp } from './components/signup.component.tsx';
import SignIn from './components/signIn.component.tsx';
import Services from './components/services.component.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  }, {
    path: '/sign-up',
    Component: SignUp,
  }, {
    path: '/sign-in',
    Component: SignIn,
  }, {
    path: '/services',
    Component: Services,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
