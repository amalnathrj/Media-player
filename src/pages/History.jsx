import React from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';


const History = () => {
  return (

    <>
    <div style={{marginLeft:"300px"}} className='row d-flex justify-content-between py-5 ' >
      <div style={{fontWeight:"800", fontSize:"30px"}} className="col-6">Watch History</div>
      <div className="col-6"> <Link to={"/Home"} > Back to Home </Link></div>
       
      
    </div>

<Table style={{width:"90%", marginLeft:"70px"}} striped bordered hover>
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
  <tr>
    <td>1</td>
    <td>Js tutorial</td>
    <td> <Link to={"https://youtu.be/U-wcvTgXKaI"}>https://youtu.be/U-wcvTgXKaI</Link></td>
    <td>Time</td>
    <td><i style={{color:"red"}} class="fa-solid fa-trash"></i></td>
  </tr>

</tbody>
</Table>

</>
  )
}

export default History
