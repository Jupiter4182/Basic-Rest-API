import { useState } from 'react'

import Navbar from './Components/Navbar.jsx'
import User from './Components/User.jsx'
import {Route,Routes} from 'react-router-dom'
import Create from './Components/Create.jsx'
import Edit from './Components/Edit.jsx'
function App() {

  return (
 <Routes>
  <Route path='/' element={<User/>} />
  <Route path='/create' element={<Create/>} />
  <Route path='/edit/:id' element={<Edit/>} />

 </Routes>
     
  
  )
}

export default App
