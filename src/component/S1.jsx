import {useState} from 'react'
import axios from "axios"
import { useEffect } from 'react'



const S1 = () => {

  const [pid,setid] = useState("")
  const [pname,setname] = useState("")
  const [pimg,setimg] = useState("")
  const [pprize,setprice] = useState("")
  const [pstar,setstar] = useState("")
  const [prev,setrev] = useState("")
  const [im,setim] = useState([])

useEffect(()=>{
    da();
},[])


const da = ()=>{
    axios.get("http://localhost:9000/img").then((sa)=>{
        setim(sa.data)
    }).catch((er)=>{
        console.log(er)
    })
}

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('pid',pid)
    formData.append('pname', pname);
    formData.append('pprize', pprize);
    formData.append('pstar', pstar);
    formData.append('pimg', pimg);
    formData.append('prev', prev);
    console.log(formData);
    

    axios.post("http://localhost:9000/sample", formData)
      .then(res => {
        console.log(res)
        alert("product added!!!")
        da()
      
  
      }).catch(err => {
        console.log(err);
      })

    document.getElementById("ss").value=null
    document.getElementById("ww").value=null
    document.getElementById("w").value=null
    document.getElementById("ff").value=null
    document.getElementById("f").value=null
    document.getElementById("fl").value=null
  
    
  }
  return (
    <div>
        <div>
            <form onSubmit={handleSubmit} encType="multipart/form-data" >
                <input   id="ss" name = "pid" onChange={(e)=>setid(e.target.value)} required />
                <input   id="ww" name ="pname" onChange={(e)=>{setname(e.target.value)}} required />
                <input   id="w" name="pimg" type="file" onChange={(e)=>setimg(e.target.files[0])} required accept='.jpeg,.png,.jpg,.svg'/>
                <input   id="ff" name="pprize" onChange={(e)=>setprice(e.target.value)} required />
                <input   id="f" name="pstar" onChange={(e)=>setstar(e.target.value)} required />
                <input  id="fl" name="prev" onChange={(e)=>setrev(e.target.value)} required />
                <button type='submit'>Submit</button>
            </form>

            <div className='continer row' >
               <form className='col-12'>
                <div className='row'>
                    <input className='input-field col-12'>
                    </input>
                    <label for="last_name">Last Name</label>
                    

                </div>
                <button className='btn'>ji</button>

               </form>
            </div>
            {im.map((da)=>{
                return(
                    <div>
                        <img src={`http://localhost:9000/st/${da.pimg}`} alt="noimg" width="100px" height="100px"/>
                        
                </div>

                )

            })}
        </div>
    </div>
  )
}

export default S1