import { useState } from 'react'
import './App.css'
import  Navbar from './components/navbar/navbar'
import Sidebar from './components/sidebar/sidebaar'
import Mainsec from './components/mainsection/mainsec'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='maincontainer'>
    
    <Navbar />
    <div className="mainSectionContainerConstrain">
      <Sidebar />
      <Mainsec />
    </div>
    </div>
    </>

  )
}
export default App
