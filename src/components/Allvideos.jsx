import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from 'react-bootstrap/Modal';


const Allvideos = () => {
  const [show, setShow] = useState(false);
  
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
  return (
    <>
    <div>
      <h1 className="ms-5">All Videos</h1>
      <div className="d-flex">
      <Card onClick={handleShow} style={{ width: '18rem',marginLeft:"50px" }}>
      <Card.Img className="w-75 ms-4 mt-3" variant="top" src="https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202309/thalapathy-vijay-leo-tamil-poster-out-203320686-1x1.jpg?VersionId=Cq.urUGEHbf1ZoJlVdM3H6d42UdwCVrh"/>
      <Card.Body>
        <Card.Title style={{fontWeight:"800"}}>Leo Trailer</Card.Title>
        <Card.Text>
        <i style={{color:"red"}} class="fa-solid fa-trash"></i>
        </Card.Text>

      </Card.Body>
    </Card>

    
    </div>
    </div>

<Modal show={show} onHide={handleClose} size='lg'>
<Modal.Header closeButton>
  <Modal.Title>Caption</Modal.Title >
</Modal.Header>
<Modal.Body className='border border-5 p-5 text-center '>
<iframe width="560" height="315" src="https://www.youtube.com/embed/Po3jStA673E?si=DRapr68meBL9qU2r&autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

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
  );
};

export default Allvideos;
