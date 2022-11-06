import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import NewPage from '../Pages/NewPage'
import Navbar from '../components/Navbar'
import Login from '../Pages/Login'
import SearchPage from '../Pages/SearchPage';


const MainRoutes = () => {
  return (
    <div>
       {/* <Navbar/> */}
        <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/New_Page' element={<NewPage/>}/>
        <Route path='/Search_Page/:item' element={<SearchPage/>} />
        <Route path="/login" element={<Login/>}/>
        {/* <Route path='/' element={<Login/>}/>
        <Route path='/' element={<Signup/>}/> */}
        </Routes>
    </div>
  )
}

export default MainRoutes