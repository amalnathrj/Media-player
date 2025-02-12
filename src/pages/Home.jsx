import React from 'react'
import Add from '../components/Add'
import Allvideos from '../components/Allvideos'
import Categories from '../components/Categories'






const Home = () => {
  return (
    <div>
      < Add/>
     <div className='row'>
      <div className="col-6"> < Allvideos/> </div>
      <div className="col-6"> < Categories/> </div>
    

     </div>
      
    </div>

  )
}

export default Home
