import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className='flex flex-col min-h-[100vh]'>
      <div className='bg-[#faf8ff] sticky top-0'>
        <Navbar></Navbar>
      </div>
      <div className='flex-1'>
        <Outlet></Outlet>
      </div>
      <div className='mt-10'>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
