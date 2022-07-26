import {useState} from 'react'
import axios from "axios"

import Tilt from 'react-parallax-tilt';
import Particles from "react-tsparticles";

const S4 = () => {

  const [pimg,setid] = useState("")
  const [pname,setname] = useState("")

    const particlesInit = (main) => {
        console.log(main);
    
        
      };

      const particlesLoaded = (container) => {
        console.log(container);
      };

      const handleSubmit = async(e) => {
        e.preventDefault();

        console.log("fddlfd")
    
        const formData = await new FormData();
        formData.append('pimg', pimg);
        formData.append('pname',pname)

        
        console.log(formData);
        
    
         axios.post("http://localhost:5002/s2", formData)
          .then(res => {
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
                <form className='f' onSubmit={handleSubmit}>
                    <div className='row'>
                        <div >
                        <div className='input-field fff col s8  offset-s2'>
                            
                            <input id="file" placeholder='Company-logo' type="file" className="validate"  onChange={(e)=>setid(e.target.files[0])} accept=".jpeg,.png" />  
                        <label htmlFor="file"></label>
                            </div>
                            <div className='input-field col s8  offset-s2'>
                            
                            <input id="name" placeholder='Company-name' type="text" className="validate" onChange={(e)=>setname(e.target.value)} />  
                        <label htmlFor="name"></label>
                            </div>
                            
                        <div className='row'>
                            <div className='col s4 offset-s5'>
                                 <button className='btn center ff' type='submit' >
                                Update
                            </button>
                            </div>
                           
                        </div>
                            
                        
                        </div>
                    </div>
                </form>

                    </div>
                </Tilt>
              
            </div>
        </div>
        </>
  )
}

export default S4