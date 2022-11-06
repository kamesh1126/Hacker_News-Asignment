import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

    const navigate = useNavigate();
    const user_data = JSON.parse(localStorage.getItem("user_data"));
    
  return (
    <div className='navbar-main'>
         <div><img  style={{cursor:"pointer",height:"68px",width:"80px",border:"2px solid white"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Y_Combinator_logo.svg/2048px-Y_Combinator_logo.svg.png" alt="" /></div>
         <div  style={{cursor:"pointer",fontFamily:"poppins",fontSize:"30px",fontWeight:"Bold",marginLeft:"-100px",marginTop:"10px"}} className='navbar-inner' ><Link to='/'>Hacker News</Link></div>
         <div style={{cursor:"pointer",fontFamily:"poppins",fontSize:"22px",marginTop:"18px",marginLeft:"-70px"}} className='navbar-inner' >Welcome</div>
         <div style={{fontFamily:"poppins",fontSize:"40px",marginTop:"0px",marginLeft:"-90px",}} className='navbar-inner' >|</div>
         <div  style={{cursor:"pointer",fontFamily:"poppins",fontSize:"22px",marginTop:"18px",marginLeft:"-90px"}} className='navbar-inner' ><Link to='/New_Page'>new</Link></div>
         <div style={{fontFamily:"poppins",fontSize:"40px",marginTop:"0px",marginLeft:"-90px",}} className='navbar-inner' >|</div>
         <div style={{cursor:"pointer",fontFamily:"poppins",fontSize:"22px",marginTop:"18px",marginLeft:"-90px"}} className='navbar-inner' >threads</div>
         <div style={{fontFamily:"poppins",fontSize:"40px",marginTop:"0px",marginLeft:"-90px",}} className='navbar-inner' >|</div>
         <div  style={{cursor:"pointer",fontFamily:"poppins",fontSize:"22px",marginTop:"18px",marginLeft:"-90px"}} className='navbar-inner' >past</div>
         <div  style={{fontFamily:"poppins",fontSize:"40px",marginTop:"0px",marginLeft:"-90px",}} className='navbar-inner' >|</div>
         <div    style={{cursor:"pointer",fontFamily:"poppins",fontSize:"22px",marginTop:"18px",marginLeft:"-90px"}} className='navbar-inner' >comments</div>
         <div   style={{fontFamily:"poppins",fontSize:"40px",marginTop:"0px",marginLeft:"-90px",}} className='navbar-inner' >|</div>
         <div   style={{cursor:"pointer",fontFamily:"poppins",fontSize:"22px",marginTop:"18px",marginLeft:"-90px"}} className='navbar-inner' >ask</div>
         <div style={{fontFamily:"poppins",fontSize:"40px",marginTop:"0px",marginLeft:"-90px",}} className='navbar-inner' >|</div>
         <div   style={{cursor:"pointer",fontFamily:"poppins",fontSize:"22px",marginTop:"18px",marginLeft:"-90px"}} className='navbar-inner' >show</div>
         <div  style={{fontFamily:"poppins",fontSize:"40px",marginTop:"0px",marginLeft:"-90px",}} className='navbar-inner' >|</div>
         <div   style={{cursor:"pointer",fontFamily:"poppins",fontSize:"22px",marginTop:"18px",marginLeft:"-90px"}} className='navbar-inner' >jobs</div>
         <div  style={{fontFamily:"poppins",fontSize:"40px",marginTop:"0px",marginLeft:"-90px",}} className='navbar-inner' >|</div>
         <div   style={{cursor:"pointer",fontFamily:"poppins",fontSize:"22px",marginTop:"18px",marginLeft:"-90px"}} className='navbar-inner' >submit</div>

         <div className='navbar-side2'>
         {/* {user_data ? <div style={{fontFamily:"poppins",fontWeight:"bolder"}} onClick={()=>navigate("./Login")}  className='navbar-inner inner1'><span>Login</span></div>:
            <div style={{fontFamily:"poppins"}} onClick={()=>navigate("./Login")} className='navbar-inner inner1'><span> LogOut</span></div>
            
            } */}
             <div  style={{cursor:"pointer",fontFamily:"poppins",fontSize:"22px",marginTop:"18px",marginLeft:"90px"}} className='navbar-inner' ><Link to='/Login'>LOGIN</Link></div>
            
            
        </div>

        
    </div>
  )
}

export default Navbar