import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { deleteHistory, getAllHistory } from "../services/allAPI";

const History = () => {
  const [historyData, setHistoryData] = useState({});
  useEffect(() => {
    getHistory();
  }, []);

  const getHistory = async () => {
    try {
      let apiRes = await getAllHistory();
      setHistoryData(apiRes.data);
    } catch (error) {
      console.error(error);
    }
  };
  const onDeleteclick = async (id) => {
    try {
      await deleteHistory (id);
      getHistory()
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        style={{ marginLeft: "300px" }}
        className="row d-flex justify-content-between py-5 "
      >
        <div style={{ fontWeight: "800", fontSize: "30px" }} className="col-6">
          Watch History
        </div>
        <div className="col-6">
          {" "}
          <Link to={"/Home"}> Back to Home </Link>
        </div>
      </div>

      <Table
        style={{ width: "90%", marginLeft: "70px" }}
        striped
        bordered
        hover
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Link</th>
            <th>Time stamp</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {historyData.length > 0
            ? historyData.map((value, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{value.caption}</td>
                  <td>
                    {" "}
                    <Link
                      to={`https://www.youtube.com/watch?v=${value.imageUrl}`}
                      target="_blank"
                    >
                      https://www.youtube.com/watch?v={value.imageUrl}
                    </Link>
                  </td>
                  <td>{value.formattedDate}</td>
                  <td>
                    {" "}
                    <button onClick={() => onDeleteclick(value.id)}>
                      <i
                        style={{ color: "red" }}
                        className="fa-solid fa-trash"
                      ></i>
                    </button>
                  </td>
                </tr>
              ))
            : <div><p className="text-danger text-center ">No History found</p></div>}
        </tbody>
      </Table>
    </>
  );
};

export default History;
