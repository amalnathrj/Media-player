import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { addHistory, deleteVideo, getvideo } from "../services/allAPI";

const Allvideos = ({ videoResp,videoDeleteResponse }) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  useEffect(() => {
    getVideos();
  }, [videoResp,videoDeleteResponse]);

  const handleClose = () => setShow(false);
  const handleShow = async (videos) => {
    const { caption, imageUrl } = videos;

    let date = new Date();
    let formattedDate = date.toLocaleString("en-IN", { timeZoneName: "short" });
    const payload = { caption, imageUrl, formattedDate };
    try {
      await addHistory(payload);
    } catch (error) {
      console.error(error);
    }

    setSelectedVideo(videos);
    setShow(true);
  };

  const getVideos = async () => {
    try {
      let apiResponse = await getvideo();
      if (apiResponse.status >= 200 && apiResponse.status <= 300) {
        console.log(apiResponse);
        setData(apiResponse.data);
      } else {
        console.error(apiResponse.statusText);
      }
    } catch {
      console.error("error occured");
    }
  };
  const onDeleteclick = async (id) => {
    try {
      await deleteVideo(id);
      getVideos();
    } catch (error) {
      alert(error);
    }
  };
  const onVideoDrag = (e, id) => {
    console.log(e, id);
    e.dataTransfer.setData("videoDetails",id)
  };

  return (
    <>
      <div>
        <h1 className="ms-5">All Videos</h1>
        <div className="d-flex flex-wrap gap-5">
          {data.map((dataItem, index) => (
            <Card
              draggable={true}
              onDragStart={(e) => onVideoDrag(e, dataItem.id)}
              key={index}
              style={{ width: "12rem", backgroundColor: "#f0f5f5" }}
              className="ms-2 rounded border-0 shadow"
            >
              <Card.Img
                variant="top"
                height={"150px"}
                src={dataItem.image}
                className="rounded"
                onClick={() => handleShow(dataItem)}
              />
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <Card.Title onClick={() => handleShow(dataItem)}>
                    {dataItem.caption}
                  </Card.Title>
                  <button
                    onClick={() => onDeleteclick(dataItem.id)}
                    className="btn rounded border-0"
                  >
                    <i className="fa-solid fa-trash text-danger"></i>
                  </button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{selectedVideo.caption}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="border border-5 p-5 text-center ">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${selectedVideo.imageUrl}&autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
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
      )}
    </>
  );
};

export default Allvideos;