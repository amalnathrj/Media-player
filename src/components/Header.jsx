import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
       <Navbar className="bg-info sticky-top w-100">
        
        <Container>
        <Link style={{textDecoration:"none"}} to={"/"}>
          <Navbar.Brand style={{fontSize:"25px",fontWeight:"800"}}>
          <i className=" text-dark me-2 fa-solid fa-music fa-beat"></i>{' '}
            <i className='text-dark text-bolder '>Media Player</i>
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default Header
