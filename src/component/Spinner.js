import React from 'react'
import  loading  from "../loading.gif";
import "../styles/bootstrap.min.css"
import"../styles/font-awesome.css"
import "../styles/templatemo-training-studio.css"
const Spinner =()=> {
  
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" />
      </div>
    )
  
}
export default Spinner;