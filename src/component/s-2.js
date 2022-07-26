import React, { useState } from 'react'
import Tilt from 'react-parallax-tilt';
import Particles from "react-tsparticles";
import axios from "axios"

const S2 = () => {

    const [dis,setdis] = useState(null)
    const [bone,setban] = useState(null)
    const [btwo,setbtwo]= useState(null)

    const particlesInit = (main) => {
        console.log(main);
      };

      console.log(dis)

      const particlesLoaded = (container) => {
        console.log(container);
      };


      
      const submit = async(e)=>{
        e.preventDefault()

        const form = await new FormData()

        form.append('dis',dis);
        form.append("bone",bone);
        form.append("btwo",btwo);
        console.log(form)


console.log("huhuuu")
axios.post("http://localhost:9090/api/s1",form).then(res => {
  console.log(res)
  alert("product added!!!")
  


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
    <>
    
<Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#0e0e0f",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 20,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#fafbfc",
          },
          links: {
            color: "#269dff",
            distance: 150,
            enable: true,
            opacity: 0.7,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />


        <div className="container uy flex">
            <div className='full'>

                <Tilt>
                    <div className='card ju'>
                    <div className='row'>
                    <div className='col s8 offset-s5 po '> <i class="large material-icons" >account_circle</i></div>
                </div>  
                <form className='f'  onSubmit={submit}>
                    <div className='row'>
                        <div >
                        <div className='input-field fff col s8  offset-s2'>
                            
                            <input id="Uname" placeholder='DISCOUNT' type="text" className="validate" onChange={(e)=>setdis(e.target.value)} />  
                        <label htmlFor="Uname"></label>
                            </div>
                            <div className='input-field col s8  offset-s2'>
                            
                            <input id="email" placeholder='BANNER' type="text" className="validate" onChange={(e)=>setban(e.target.value)}  />  
                        <label htmlFor="email"></label>
                            </div>
                            
                            <div className='input-field col s8  offset-s2'>
                            <input id="pass" type="text" placeholder='SUB-BANNER' className="validate"  onChange={(e)=>setbtwo(e.target.value)}/>
                            <label htmlFor="pass"></label>
                        </div>
                            
            
                            
                        <div className='row'>
                            <div className='col s4 offset-s5'>
                                 <button className='btn center' type='submit'  >
                                Update
                            </button>
                            </div>
                           
                        </div>
                            
                        
                        </div>
                    </div>
                </form>

                <button className='btn center' onClick={submit}>coll</button>

                    </div>
                </Tilt>
              
            </div>
        </div>
        </>
  )
}

export default S2