import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imagecard from '../assets/images/image2.png'
import imagecard2 from '../assets/images/image3.webp'



const Content = () => {
  return (
    <section className=''>
    <div style={{display:"flex",marginTop:"100px",marginLeft:"200px"}}>
      <div style={{width:"400px",marginLeftpx:"120px"}}>
        <h1>Welcome to <span style={{fontWeight:"800"}}>music player</span></h1>
        <p className='mt-3'>"Welcome to PlayTunes – your go-to music player for a seamless and immersive listening experience. Enjoy your favorite tracks with crystal-clear sound and an easy-to-use interface designed for music lovers. Tune in, press play, and let the rhythm take over!"</p>
        <button  className="btn btn-lg btn-primary mt-3" type="button"><Link style={{textDecoration:"none"}} to={"/Home"}>Get started</Link></button> 

       </div>
       <div style={{width:"400px",marginLeft:"200px"}}>
        <img src="https://cdn.pixabay.com/animation/2023/10/22/03/31/03-31-40-761_512.gif" alt="" />

       </div>
      
    </div> 
    <div className='row'>
      
      <h1 style={{textAlign:"center",marginTop:"100px"}}>Features</h1>
      <div className='row d-flex ms-5 mt-5'>
      <div className="col-1"></div>
        <div className='col-3'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= "https://cdni.iconscout.com/illustration/premium/thumb/people-playing-music-illustration-download-in-svg-png-gif-file-formats--illustrations-3135577.png?f=webp" />
      <Card.Body>
        <Card.Title style={{fontWeight:"800"}}>Managing videos</Card.Title>
        <Card.Text>
          users can upload,view and remove videos
        </Card.Text>
        
      </Card.Body>
    </Card>

        </div>
        <div className='col-3 ms-4'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {imagecard2} />
      <Card.Body>
        <Card.Title style={{fontWeight:"800"}}>Categorize videos</Card.Title>
        <Card.Text>
          users can categorize the videos
        </Card.Text>
   
      </Card.Body>
    </Card>

        </div>
        <div className=' col-3 ms-4'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdni.iconscout.com/illustration/premium/thumb/music-party-illustration-download-in-svg-png-gif-file-formats--celebrating-people-partying-mood-festival-doing-celebration-pack-illustrations-3723283.png?f=webp" />
      <Card.Body>
        <Card.Title style={{fontWeight:"800"}}>Managing Hiostory</Card.Title>
        <Card.Text>
          Users can manage the watch history
        </Card.Text>
      
      </Card.Body>
    </Card>

        </div>
      </div>
    </div>

    <div style={{border:"3px,solid", borderRadius:"10px", padding:'30px', width:"90%", marginLeft:"60px", marginTop:"80px"}} className='row'>
      <div className="col-1"></div>
      <div className="col-5"><h1 style={{fontWeight:"900"}}>Simple and powerfull</h1>
      <h2 style={{fontSize:"20px", marginTop:"20px"}}> <span style={{fontWeight:"600", fontSize:"28px"}}>Play everything :</span> Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
      <h2 style={{fontSize:"20px", marginTop:"20px"}}> <span style={{fontWeight:"600", fontSize:"28px"}}>Categorize videos:</span> Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
      <h2 style={{fontSize:"20px", marginTop:"20px"}}> <span style={{fontWeight:"600", fontSize:"28px"}}>Managing history:</span> Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
      

      
      </div>
      <div className="col-5">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Po3jStA673E?si=DRapr68meBL9qU2r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

    </div>

  
    </section>
    
    
  

  )
}

export default Content
