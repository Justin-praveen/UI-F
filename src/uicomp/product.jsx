import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios"



const Product = () => {

    const [da,setda] = useState(null);

    useEffect(()=>{

        fun()


    },[])


    const fun = async()=>{
        const ji = await axios.get("http://localhost:5002/get")
        setda(ji.data)
        console.log(ji.data.data)

    }
  return (
    <div className='container hki'>     <nav className="ll">
    <div class="nav-wrapper">
        
      <a href="#" class="brand-logo">Feature Products</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        
        <li><a class="dropdown-trigger" href="#!" data-target="dropdown2"></a></li>
        <li><a class="dropdown-trigger" href="#!" data-target="dropdown2">Power Tool</a></li>
        <li><a class="dropdown-trigger" href="#!" data-target="dropdown2">Hand Tools</a></li>
       
        
      </ul>
    </div>
  </nav>


<div class="row s-12">
        {da==null ? (<> <div><h1>Loding...!</h1></div></>):(da.map((da,ind)=>{
            return(
                
      <div class="col s3">

<div class="card responsive">
        <div class="card-image">
          <img src={`http://localhost:5002/${da.pimg}`} className="responsive-img" width="200px" height="200px"/>
          <span class="card-title">{da.pid}</span>
        </div>
        <div class="card-content">
          <p>{da.pname}</p>
          <div >{da.pstar} <i class="material-icons left gold">star</i></div>
        </div>
        <div class="card-action">
            <div className='row'>
                <div className='col s6'>
<h5>$ {da.pprice}</h5>
                </div >
                <div className='col s6 center'>
                    <div>
                        <a href="#"><i class="material-icons center">add_shopping_cart</i></a>
                    </div>
                    
                </div>
            </div>
            
          
        </div>
      </div>

      
      </div>
     
            )

        })) }
          </div>
    </div>
  )
}

export default Product