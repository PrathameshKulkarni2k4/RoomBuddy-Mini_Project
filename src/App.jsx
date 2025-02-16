import './App.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router'
import Home from './components/Home/Home'
import Layout01 from './components/Layout/Layout01'
import LoginOwner from './components/Login/LoginOwner.jsx'
import LoginStudent from './components/Login/LoginStudent.jsx'
import RegisterOwner from './components/Register/RegisterOwner.jsx'
import RegisterStudent from './components/Register/RegisterStudent.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout01 />} >
      <Route path='' element={<Home />} />
      <Route path='login' element={<Login />} >
        <Route path='loginowner' element={<LoginOwner />} />
        <Route path='loginstudent' element={<LoginStudent />} />
      </Route>
      <Route path='register' element={<Register />} >
      <Route path='registerowner' element={<RegisterOwner />} />
      <Route path='registerstudent' element={<RegisterStudent />} />
      </Route>
    </Route>
  )
)


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
