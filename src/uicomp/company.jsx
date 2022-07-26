import {useState,useEffect} from 'react'
import axios from "axios"


const Company = () => {

const [da,setda] = useState(null);

useEffect(()=>{

    fun()


},[])


const fun = async()=>{
    const ji = await axios.get("http://localhost:5002/hod")
    setda(ji.data)
    console.log(ji.data.data)

}


  return (
    <div className='container hki'>
        
    <div class="row">

        {
            da==null ? (<><div>Loding...!</div></>) : (da.map((das)=>{
                return(
                    <div class="col s2">
        <img src={`http://localhost:5002/${das.pimg}`} className="kl" alt="1" width="auto" height="auto">
        </img>
        <p>{das.name}</p>
      </div>
                )

            }))
        }
    </div>
    </div>
  )
}

export default Company