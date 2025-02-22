import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { uploadVideo } from "../services/allAPI";

const Add = ({setVideoresp}) => {
  const [video, setVideo] = useState({
    caption: "",
    image: "",
    imageUrl: "",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [error, setError] = useState(false);

  console.log(video);

  const seperateYoutubeurl = (value) => {
    console.log(value);
    if (value.includes(".be/")) {
      const videoId = value.split("be/")[1];
      setVideo({ ...video, imageUrl: videoId });
      setError(false);
    } else {
      setError(true);
      console.error("Invalid youtube link");
    }
  };

  const handleSave = async () => {
    if (video.caption && video.image && video.imageUrl) {
      try {
        let response = await uploadVideo(video);
        setVideoresp(response)
        if (response.status >= 200 && response.status <= 300) {
          alert("Succesfully added you video");
          setShow(false);
          setVideo({
            caption: "",
            image: "",
            imageUrl: "",
          });
        } else {
          alert("An error occured please contact the admin");
        }
      } catch {
        alert("an error occured");
      }
    } else {
      alert("Please fill the form");
    }
  };
  return (
    <>
      <div className="d-flex justify-content-between py-5 px-5">
        <div>
          <h1>
            Upload New video{" "}
            <button
              onClick={handleShow}
              style={{
                backgroundColor: "Orange",
                border: "none",
                borderRadius: "50%",
                width: "45px",
              }}
            >
              {" "}
              +
            </button>
          </h1>
        </div>
        <div>
          <Link to={"/History"}> Watch History</Link>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Upload video details!!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="border border-5 p-5 ">
          <FloatingLabel
            controlId="floatingInput"
            label="Video caption"
            className="mb-3"
          >
            <Form.Control
              onChange={(e) => {
                setVideo({ ...video, caption: e.target.value });
              }}
              type="email"
              placeholder="upload video"
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Video image URL "
            className="mb-3"
          >
            <Form.Control
              onChange={(e) => {
                setVideo({ ...video, image: e.target.value });
              }}
              type="email"
              placeholder="upload video"
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Video youtube Link"
            className="mb-3"
          >
            <Form.Control
              onChange={(e) => seperateYoutubeurl(e.target.value)}
              type="email"
              placeholder="upload video"
            />
          </FloatingLabel>

          {error ? (
            <div>
              <p>Invalid link</p>
            </div>
          ) : (
            ""
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;
