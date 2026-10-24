/* 
import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
*/
import './App.css'
import LinesPage from './pages/LinesPage';
import Home from './pages/Home';
import About from './pages/About';
import NotFoundPage from './pages/NotFoundPage';
import { createBrowserRouter, RouterProvider } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <NotFoundPage/>,
  },
  {
    path: '/lines/:color',
    element: <LinesPage/>,
  },
  {
    path: '/lines',
    element: <LinesPage/>,
  },
  {
    path: '/about',
    element: <About/>,
  },
  {
    path: '*',
    element: <NotFoundPage/>,
  }
]);

export default function App() {
  // used createBrowserRouter instead of <BrowserRouter> as apparently it is more modern
  
  return (
    <RouterProvider router={router}/>
  )
}