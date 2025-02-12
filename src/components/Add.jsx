import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


const Add = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <div className='d-flex justify-content-between py-5 px-5'>
    <div>
        <h1>Upload New video <button onClick={handleShow} style={{backgroundColor:'Orange', border:"none", borderRadius:"50%", width:"45px"}}> +</button></h1>
      
    </div>
    <div>
        <Link to={"/History"}> Watch History</Link>
    </div>

    
    </div>
    
    

   

<Modal show={show} onHide={handleClose} size='lg'>
<Modal.Header closeButton>
  <Modal.Title>Upload video details!!</Modal.Title >
</Modal.Header>
<Modal.Body className='border border-5 p-5 '>
<FloatingLabel
        controlId="floatingInput"
        label="Video type"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="upload video" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Video image URL "
        className="mb-3"
      >
        <Form.Control type="email" placeholder="upload video" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Video youtube Link"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="upload video" />
      </FloatingLabel>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
  <Button variant="primary" onClick={handleClose}>
    Save Changes
  </Button>
</Modal.Footer>
</Modal>
</>

  )
}

export default Add
