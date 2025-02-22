import React, { useState } from 'react'
import Add from '../components/Add'
import Allvideos from '../components/Allvideos'
import Categories from '../components/Categories'







const Home = () => {

  const [videoResponse,setVideoResponse] =useState("")
  const [videoDeleteResponse,setvideoDeleteResponse] =useState("")
  return (
    <div>
      < Add setVideoresp = {setVideoResponse}/>
     <div className='row'>
      <div className="col-6"> < Allvideos videoResp = {videoResponse} videoDeleteResponse = {videoDeleteResponse}/> </div>
      <div className="col-6"> < Categories setvideoDeleteResponse = {setvideoDeleteResponse}/> </div>
    

     </div>
      
    </div>

  )
}

export default Home
