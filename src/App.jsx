import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Shared/Header/Header'
import Footer from './Shared/Footer/Footer'

function App() {

  return (
    <>
    <Header/>
    <div className=''>

      <Outlet/>
    </div>
      <Footer/>
    </>
  )
}

export default App
