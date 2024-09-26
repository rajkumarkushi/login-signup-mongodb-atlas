import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import {Navbar} from './components/Navbar'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Navbar></Navbar>
     <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>

     </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App
