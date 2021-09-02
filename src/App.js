import './App.css'
import { useState } from "react"
import RestrictedPage from './components/RestrictedPage'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const user = "Christian"
  
  const Login  = () => setIsLoggedIn(true)
  const Logout = () => setIsLoggedIn(false)



  return (
    <div className="App">

      <div className="App-header"> 

        <RestrictedPage 
          isLoggedIn = {isLoggedIn} 
          user       = {user}
          Login      = {Login}
          Logout     = {Logout}
        />

      </div>

    </div>
  )
}

export default App