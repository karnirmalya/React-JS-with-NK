import { useState } from 'react'

import UserContextProvider from './context/UserContextProvider'
import LogIn from './Components/LogIn'
import Profile from './Components/Profile'


function App() {


  return (
    <UserContextProvider >
      <h1>LETS LEARN CONTEXT API</h1>
      <LogIn />
      <Profile />
    </UserContextProvider>
    
      
  )
}

export default App
