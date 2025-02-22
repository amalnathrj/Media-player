import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import {
  createCategory,
  deleteCategory,
  getCategoryApi,
  getSingleVideo,
  updateCatagoryVideo,
  deleteVideo
} from "../services/allAPI";
import { Card } from "react-bootstrap";

const Categories = ({setvideoDeleteResponse}) => {
  const [show, setShow] = useState(false);
  const [categoryname, setCategoryname] = useState("");
  const [data, setData] = useState([]);
  const [vdata, setVdata] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const createNewCategory = async () => {
    if (categoryname) {
      try {
        const category = { categoryname, allVideos: [] };
        await createCategory(category);
        setShow(false);
        setCategoryname("");
        getCategory();
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please fill the form");
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    try {
      let apiResponse = await getCategoryApi();
      setData(apiResponse.data);
      console.log(apiResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onDeleteClick = async (id) => {
    try {
      await deleteCategory(id);
      getCategory();
    } catch (error) {
      console.log(error);
    }
  };
  const dragOverCategory = (e) => {
    e.preventDefault();
  };

  const dropped = async (e, catData) => {
    let vId = e.dataTransfer.getData("videoDetails");

   
    try {
      let response = await getSingleVideo(vId);
      setVdata(response.data);
      console.log(response);
      if(response.status >= 200 && response.status <= 300){
        catData.allVideos.push(response.data)
        await updateCatagoryVideo(catData.id,catData)
        getCategory();
        let responsee = await deleteVideo(vId);
        setvideoDeleteResponse(responsee);
        
      }
      
      
    } catch (error) {
      console.log(error);
      
      
    }
   
    // console.log(response.data);
  };

  return (
    <>
      <div>
        <h1>
          All categories{" "}
          <button
            onClick={handleShow}
            style={{
              backgroundColor: "Orange",
              border: "none",
              borderRadius: "50%",
              width: "45px",
              marginLeft: "50px",
            }}
          >
            {" "}
            +
          </button>
        </h1>
      </div>
      {data.length > 0 ? (
        data.map((val, index) => (
          <div
            onDragOver={(e) => dragOverCategory(e)}
            onDrop={(e) => dropped(e, val)}
            key={index}
            className="container-fluid border border-2 rounded mt-3"
          >
            <div className="d-flex justify-content-between">
              <h4>{val.categoryname}</h4>
              <button onClick={() => onDeleteClick(val.id)} className="btn">
                <i style={{ color: "red" }} className="fa-solid fa-trash"></i>
              </button>
            </div>
            <div className="row">
              {
                val.allVideos.map((dataItem,index)=>(
                  <div key={index} className="col-6">
              <Card key={index}>
              <Card.Img
                variant="top"
                height={"150px"}
                src={dataItem.image}
                className="rounded"
                // onClick={() => handleShow(dataItem)}
              />
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <Card.Title onClick={() => handleShow(dataItem)}>
                    {dataItem.caption}
                  </Card.Title>
                  
                </div>
              </Card.Body>
            </Card>
              </div>
                  
                )
              )
              
              
              
                
              }
              
              </div>
            
          </div>
        ))
      ) : (
        <h1>No category found</h1>
      )}

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add category details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="border border-5 p-5 ">
          <FloatingLabel
            controlId="floatingInput"
            label="category details"
            className="mb-3"
          >
            <Form.Control
              onChange={(e) => setCategoryname(e.target.value)}
              type="text"
              placeholder="upload video"
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={createNewCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Categories;
