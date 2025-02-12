import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='row mt-5 ms-5'>
    <div className="col-1"></div>
    <div className="col-3">
    <h1 style={{fontSize:"25px",fontWeight:"800"}} >Media Player</h1>
    <p>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>

    <p>Code licensed Luminar, docs CC BY 3.0.</p>

   <p>Currently v5.3.2.0</p>
    
    </div>

    
    
    <div style={{fontWeight:"800", fontSize:"30px"}} className="col-2">
      <h1><h1 style={{fontSize:"25px",fontWeight:"800"}} >Links</h1></h1>
      <h2 style={{fontSize:"18px"}}><Link style={{textDecoration:"none"}} to={"/"} >Landing page</Link></h2>
      <h2 style={{fontSize:"18px"}}><Link style={{textDecoration:"none"}}  to={"/Home"} >Home page</Link></h2>
      <h2 style={{fontSize:"18px"}}> <Link style={{textDecoration:"none"}}  to={"/History"} >History page</Link></h2>
    </div>
    <div style={{fontWeight:"800", fontSize:"30px"}} className="col-2">
      <h1><h1 style={{fontSize:"25px",fontWeight:"800"}} >Guides</h1></h1>
      <h2 style={{fontSize:"18px"}}><Link style={{textDecoration:"none"}} to={"/"} >React</Link></h2>
      <h2 style={{fontSize:"18px"}}><Link style={{textDecoration:"none"}}  to={"/Home"} >React Router</Link></h2>
      <h2 style={{fontSize:"18px"}}> <Link style={{textDecoration:"none"}}  to={"/History"} >React Bootstrap</Link></h2>
    </div>
    <div className="col-3">
    <h1><h1 style={{fontSize:"25px",fontWeight:"800"}} >Contact</h1></h1> <br />

    <form>
      <input style={{border:"none", borderRadius:"5px", backgroundColor:"white"}} type="text" />
      <input style={{border:"none", padding:"2px",marginLeft:"10px", fontSize:"15px", borderRadius:"5px"}} type="button" value="ok" />

      <div className='row d-flex mt-3'>
      <div className="col-2"><i className="fa-brands fa-twitter"></i></div>
      <div className="col-2"><i className="fa-brands fa-instagram"></i></div>
      <div className="col-2"> <i className="fa-brands fa-facebook"></i></div>
      <div className="col-2"> <i className="fa-brands fa-linkedin"></i></div>
      <div className="col-2"> <i className="fa-brands fa-github"></i></div>
      <div className="col-2"> <i className="fa-solid fa-phone"></i></div>
      </div>
    </form>
    </div>

    <h4 style={{textAlign:"center", fontSize:"18px",  marginTop:"25px"}}>Copyright© July 2024 Batch, Media Player App. Built with React</h4>

  </div>
  )
}

export default Footer
