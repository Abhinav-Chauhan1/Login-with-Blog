import { useState } from 'react'
import './App.css'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import Signup from './Components/Signup'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import Blog from './Components/Blog/Blog'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/login",
      element: <><Navbar /><Login /></>
    },
    {
      path: "/signup",
      element: <><Navbar /><Signup /></>
    },
    {
      path: "/blog",
      element: <><Navbar /><Blog /></>
    },

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
