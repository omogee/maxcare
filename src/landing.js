import React, { useState, useEffect, useRef } from 'react';
import cryingbaby from "./cryingbaby.jpg"
import groupchildren from "./groupchildren.jpg"
import womancrying from "./womancrying.jpeg"
import "./App.css"

function Landing() {
    const [images, setimages] = useState([{color:"white",image:cryingbaby},{color:"white",image:groupchildren},{color:"white",image:womancrying}])
    const [slidecounter, setslidecounter] = useState(0)
    const [slide, setslide] = useState(1)
    const [slidedirection, setslidedirection] = useState("forward")
    const [opacity, setopacity]= useState("1")
    const [corevalues, setcorevalues] = useState(
        [{id:1,value:"intergrity",extend:`Max Care Foundation focuses on integrity as a core value thereby placing a high value on honesty, transparency, and ethical behavior...`,
        full_extend:`Max Care Foundation focuses on integrity as a core value thereby placing a high value on honesty, transparency, and ethical behavior in all of its actions and decisions. Through proper feeding and empowerment, children and widow accomplish their life aspirations.`
        },{id:2,value:"Charity",extend:`Max Care Foundation focuses on integrity as a core value thereby placing a high value on honesty, transparency, and ethical behavior...`,
        full_extend:`Max Care Foundation focuses on integrity as a core value thereby placing a high value on honesty, transparency, and ethical behavior in all of its actions and decisions. Through proper feeding and empowerment, children and widow accomplish their life aspirations.`
        },{id:3,value:"Hospitality",extend:`Max Care Foundation focuses on integrity as a core value thereby placing a high value on honesty, transparency, and ethical behavior...`,
        full_extend:`Max Care Foundation focuses on integrity as a core value thereby placing a high value on honesty, transparency, and ethical behavior in all of its actions and decisions. Through proper feeding and empowerment, children and widow accomplish their life aspirations.`
        },{id:4,value:"Humanitarianism",extend:`Max Care Foundation focuses on integrity as a core value thereby placing a high value on honesty, transparency, and ethical behavior...`,
        full_extend:`Max Care Foundation focuses on integrity as a core value thereby placing a high value on honesty, transparency, and ethical behavior in all of its actions and decisions. Through proper feeding and empowerment, children and widow accomplish their life aspirations.`
        },{id:5,value:"Willfulness",extend:`Max Care Foundation focuses on integrity as a core value thereby placing a high value on honesty, transparency, and ethical behavior...`,
        full_extend:`Max Care Foundation focuses on integrity as a core value thereby placing a high value on honesty, transparency, and ethical behavior in all of its actions and decisions. Through proper feeding and empowerment, children and widow accomplish their life aspirations.`
        },{id:6,value:"Comitment",extend:`Max Care Foundation focuses on integrity as a core value thereby placing a high value on honesty, transparency, and ethical behavior...`,
        full_extend:`Max Care Foundation focuses on integrity as a core value thereby placing a high value on honesty, transparency, and ethical behavior in all of its actions and decisions. Through proper feeding and empowerment, children and widow accomplish their life aspirations.`
        }])

    const [imgtimer, setimagetimer] = useState(0)
    const [userdetails, setuserdetails] = useState({})
    const [payerr, setpayerr] = useState(false)
    const [successalert, setsuccessalert] = useState(false)
   

      const [onlinepayment, setonlinepayment] = useState(false)
      const [offlinepayment, setofflinepayment] = useState(false)
   
      const [hovergrid, setHovergrid] = useState("unhoveredapp")
      const [displaymodal, setdisplaymodal] = useState(false)
      const [modaldetails, setmodaldetails] = useState("")
      const [currentPage, setCurrentPage] = useState(0)

    

 useEffect(()=>{
  if(payerr){
   setTimeout(()=>{
    setpayerr(false)
   },5000)
  }
 },[payerr])

     useEffect(()=>{
        console.log("userdetails",userdetails)
        const nextindex = imgtimer === 3 ? 0 : imgtimer + 1
        const element = document.querySelector(".section_One")
       const intervalOne= setInterval(()=>{
            element.style.visibility ="hidden"
            element.style.opacity ="0"
         //   element.style.transform ="translateX(-100%)"
        },8000)
       const intervalTwo= setInterval(()=>{
            setimagetimer(nextindex)
            element.style.visibility ="visible"
            element.style.opacity ="1"
        //    element.style.transform ="translateX(0px)"
        },8500)
    return ()=>{
         clearInterval(intervalOne)
        clearInterval(intervalTwo)
    }
    })
     useEffect(()=>{
        const elements = document.querySelectorAll(".observeY")
        const elementsX = document.querySelectorAll(".observeX")
        const options = {
            root:null,
            rootMargin:"0px",
            threshold:0.3
        }
        const callback_x =(entries)=>{
            entries.forEach(entry =>{
                if(entry.isIntersecting){
                     entry.target.style.visibility ="visible"
                     entry.target.style.opacity ="1"
                     entry.target.style.transform ="translateX(0%)"       
                }
            })
          }
        const callback_y =(entries)=>{
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.style.visibility ="visible"
            entry.target.style.opacity ="1"
            entry.target.style.transform ="translateY(0%)" 
                }
            });
        }
        const observer = new IntersectionObserver( callback_y,options)
        const observer_x = new IntersectionObserver( callback_x,options)
       elements.forEach(element=>{
        observer.observe(element)
       })
       elementsX.forEach(element=>{
        observer.observe(element)
       })
    })

const hoverapp =()=>{
    setHovergrid("hoveredlandingapp")
}
const setmodal =(e)=>{
  setdisplaymodal(true)
 
  setmodaldetails(e.target.textContent)
}
  
    useEffect(()=>{
        if(opacity === "0"){
           setTimeout(()=> setopacity("1"), 1500)
        }
    },[opacity])
    useEffect(()=>{
        let slider = document.querySelector(".slider")
        let sliderbox = document.querySelector(".sliderbox")
        if(slidecounter === 8){
            setopacity("0")
        }
            if(slidecounter === 10 && slidedirection === "backward"){
             sliderbox.scrollLeft -= slider.clientWidth
             setslidecounter(0)
             setslide(prev => prev -1)
            }else if(slidecounter === 10){
           sliderbox.scrollLeft += slider.clientWidth
           setslidecounter(0)
           setslide(prev => prev + 1)
            }
    },[slidecounter])
    useEffect(()=>{
      if(slide === 3){
        setslidedirection("backward")
      }else if(slide === 1){
        setslidedirection("forward")
      }
    },[slide])
    useEffect(()=>{
        setInterval(()=> setslidecounter(prev => prev +1 ),1000)
    },[])
    const hello=()=>{
        let slider = document.querySelector(".slider")
        let sliderbox = document.querySelector(".sliderbox")
           sliderbox.scrollLeft += slider.clientWidth
       
    }
    return ( 
        <div>          
            <div className='sliderbox' style={{display:"flex",scrollBehavior:"smooth",overflow:'hidden',width:"100%"}}>
            {images.map(image =>
            <div className='col-12 slider' style={{width:"100%",opacity:`${opacity}`,transition:"opacity linear 2s",height:'600px',backgroundPosition:"center left",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundImage:`url(${image.image})`}}>
             <div onClick={hello} style={{position:"absolute",padding:"20px",width:"50%",color:`${image.color}`,backgroundColor:"rgba(13,13,13,0.4)",left:"3%",top:"200px",height:"400px"}}>
                <h3 style={{textTransform:"uppercase",fontWeight:"bolder",fontSize:"40px"}}>HELP THE MOVING TRAIN TO CARE FOR THE VULNERABLES</h3>
                <p style={{fontSize:"18px",textTransform:"capitalize",fontSize:"30px"}}> Focuses on Widow, Less Priviledge, and Autistic Children to Providing them with essential needs.</p>
               <br/><br/>
                <button className='btn' style={{backgroundColor:"indianred",color:"white",fontSize:"13px",textTransform:"uppercase",fontWeight:'bold',padding:"14px 35px"}}>
                  LEARN MORE
                </button>
             </div>
            </div>
      )}
      </div>
      <div className='container-fluid' style={{backgroundColor:"rgba(153, 153, 153,0.1)",color:"black",padding:"30px"}}>
        <div className='row' style={{padding:"30px"}}>
            <div className='col-12 col-md-4' style={{alignItems:"center",justifyContent:"center",alignSelf:"center"}}>
                <img className='observeY' style={{width:"100%",transform:"translateY(70%)",transition:"all linear 2s",opacity:"0",backgroundColor:"lightblue",borderRadius:"10px",border:"1px solid grey",padding:"5px"}} src={`https://media.istockphoto.com/id/155068480/photo/many-environmentally-aware-hands-gently-supporting-the-earth.jpg?s=612x612&w=0&k=20&c=0uAMQ39R8NnnmbwKZtDmMva0Zv7emtKNCy6Hq65ba8c=`} />
            </div>
            <div className='col-12 col-md-8'>
                <div className='observeX' style={{transform:"translateX(70%)",opacity:"0",transition:"all linear 2s"}}>
                    <p style={{fontSize:"25px",color:"indianred",textShadow:"2px 2px lightblue"}}>Our Vision</p>
                    <p>The vision is to create a world where widows, autistic children, and the less privileged are empowered to lead fulfilling lives and have access to basic needs and essential services. We envision a society that values and supports these groups, and where they are not marginalized or discriminated against based on their circumstances.
                    </p>
                    <p>We strive to create a future where every widow has the support and resources they need to navigate their grief and rebuild their life, where every autistic child has access to education and support to reach their full potential, and where every less privileged person can meet their basic needs and achieve financial stability.</p>
                    <p>Through our programs and services, we aim to create a community that is inclusive, supportive, and empowering for these groups. We believe that by working together and supporting each other, we can create a better world for all.</p>
                    <br/>
                    <center>
                        <button className='btn' style={{textTransform:"uppercase",width:"50%",fontWeight:"bold",color:"white",backgroundColor:"#006080"}}>Learn More</button>
                    </center>
                </div>
            </div>
        </div>
      </div>
  <div className='container-fluid'>
    <div style={{width:"100%",padding:"40px"}}>
        <center>
            <div style={{width:"70%"}}>
                <small style={{fontSize:"30px",fontWeight:"bold",letterSpacing:"0.001em",borderBottom:"5px solid lightgrey",textShadow:"2px 2px lightgrey"}}>We Can Collectively elevate children prone to hardship</small>
            <div style={{padding:"50px 0px"}}>
                <p>
                The Max Care Foundation is aware of the multiple difficulties and obstacles that vulnerable children must overcome to develop and succeed. To help these kids reach their full potential and realize their aspirations, the foundation focuses on establishing a nurturing and empowering atmosphere for them.
                </p>
                <p>Many children's lives are being significantly impacted by Max Care Foundation's programs and initiatives, which support them in overcoming hardship and creating better futures for both themselves and their communities.</p>
            </div>
            <div>
                <button className='btn' style={{textTransform:"uppercase",color:"white",backgroundColor:"orange",fontWeight:"bolder",letterSpacing:"0.001em"}}>
                    Learn more about child sponsorship
                </button>
            </div>
            </div>
        </center>
    </div>
  </div>
    <div className='container'>
        <div className='row'>
            <div className='col-12 col-md-5'>
                <img style={{width:"100%"}} src={`https://www.wvi.org/sites/default/files/styles/large_square/public/2019-03/Screen%20Shot%202019-03-25%20at%2010.39.12%20AM.png?itok=zBOMvoUB`}/>
            </div>
            <div className='col-12 col-md-7'>
             <center style={{padding:"40px"}}>
             <div style={{width:"80%"}}>
                <small style={{fontSize:"35px",fontWeight:"bold",padding:"0px"}}>All It Takes</small><br/>
                <small style={{color:"green",fontSize:"30px",textTransform:"uppercase",fontWeight:"bolder",padding:"0px",letterSpacing:"0.001em",wordSpacing:"0.0001em"}}> to shape the next generation</small>
               <div style={{padding:"30px"}}>
               <p>Is simply a will and a drive to rid a child from deprivation and starvation...</p>
                <p>By simply joining this mission you have helped rid the streets of an helpless child and this in
                    turn would help shape the world to become a better place
                </p>
               </div>
               <div>
               <button className='btn' style={{backgroundColor:"green",color:"white",fontSize:"13px",textTransform:"uppercase",fontWeight:'bold',padding:"14px 35px"}}>
                  Join our child mentorship 
                </button>
               </div>
             </div>
             </center>
            </div>
        </div>
    </div>
      <div className='container'>
        <div className='row' style={{padding:"30px"}}>
            <div className='col-12 col-md-6' style={{padding:"20px"}}>
                <div className='row'>
                    <div className='col-12'>
                    <div className='observeX' style={{position:"relative",transform:"translateX(-70%)",opacity:"0",transition:"all linear 2s"}}>
                    <div style={{position:"absolute",zIndex:"563",height:"100%",backgroundColor:"rgba(13,13,13,0.2)", width:"100%"}}>
                                <div style={{position:"absolute",top:"40%",right:"35%",backgroundColor:"rgba(13,13,13,0.5)",border:"3px solid white"}}>
                             <p style={{fontWeight:"bold",textTransform:"uppercase",color:"white",padding:'5px'}}>our testimony</p>
                                </div>
                            </div>
                        <img style={{width:'100%',height:"250px"}} src={`https://www.feedthechildren.org/images/home/stories-featured.jpg`} />
                     </div>
                     <div className='observeY' style={{transform:"translateY(-70%)",opacity:"0",transition:"all linear 2s"}}>
                      <p style={{fontSize:"25px",color:"orange",fontWeight:"bold",padding:"10px",textTransform:"uppercase"}}>What We Have Achieved...</p>
                    <p >As a result of monthly donations and giving, Max Care Foundation has achieved a lot through the support of donors. Through the support of donors who have committed to monthly donations and giving, Max Care Foundation has been able to make a significant impact in the lives of vulnerable children and widows. By working together, we can continue to support organizations like Max Care Foundation and make a positive difference in the world. Max Care Foundation has provided educational support to vulnerable children and orphans, ensuring that they have access to quality education, provision of food and nutritional support to widows and vulnerable children, ensuring that they have access to healthy and nutritious meals. This has helped to reduce hunger and malnutrition, thereby improving their health and well-being. Every bit of donations contribute immensely towards achieving these goals.
                         hunger. Each dollar of your gift will provide food and life essentials for
                         vulnerable children and families every month of the year.
                         Monthly giving is the most effective and efficient way to partner in the fight against
                         hunger. Each dollar of your gift will provide food and life essentials for
                         vulnerable children and families every month of the year.
                         <span className='ml-2 btn' style={{padding:"0px 2px",fontWeight:"bold",fontSize:"11px",cursor:"pointer",color:"white",backgroundColor:"orange",borderRadius:"5px"}}>read more ...</span></p>
                   </div>
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-6' style={{padding:"20px"}}>
                <div className='row'>
                    <div className='col-12'>
                        <div className='observeX' style={{position:"relative",transform:"translateX(70%)",opacity:"0",transition:"all linear 2s"}}>
                            <div style={{position:"absolute",zIndex:"563",height:"100%",backgroundColor:"rgba(13,13,13,0.2)", width:"100%"}}>
                                <div style={{position:"absolute",top:"0%",right:"0",backgroundColor:"rgba(13,13,13,0.5)",border:"10px solid white"}}>
                             <p style={{fontWeight:"bold",textTransform:"uppercase",color:"white",padding:'10px'}}>What keeps us going?</p>
                                </div>
                            </div>
                        <img style={{width:'100%',height:"250px"}} src={`https://www.feedthechildren.org/images/home/monthly-giving-featured.jpeg`} />
                        </div>
                        <div className='observeY' style={{transform:"translateY(-70%)",opacity:"0",transition:"all linear 2s"}}>
                        <p style={{fontSize:"25px",color:"orange",padding:"10px",textTransform:"uppercase",fontWeight:"bold"}}>What keeps us going</p>
                    <p>As a result of monthly donations and giving, Max Care Foundation has achieved a lot through the support of donors. Through the support of donors who have committed to monthly donations and giving, Max Care Foundation has been able to make a significant impact in the lives of vulnerable children and widows. By working together, we can continue to support organizations like Max Care Foundation and make a positive difference in the world. Max Care Foundation has provided educational support to vulnerable children and orphans, ensuring that they have access to quality education, provision of food and nutritional support to widows and vulnerable children, ensuring that they have access to healthy and nutritious meals. This has helped to reduce hunger and malnutrition, thereby improving their health and well-being. Every bit of donations contribute immensely towards achieving these goals. </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className='container-fluid' style={{backgroundColor:"indianred",color:"white",padding:"30px"}}>
        <div className='row' style={{padding:"30px"}}>
            <div className='col-12 col-md-8'>
                <div className='observeY' style={{transform:"translateY(70%)",opacity:"0",transition:"all linear 2s"}}>
                    <p style={{fontWeight:"bold"}}>How To Donate Gifts/Items</p>
                    <p>We appreciate your desire to help the MaxiCare Foundation. Your gift will enable us to offer crucial assistance and support to widows, autistic kids, and the less fortunate members of our community.
                    </p>
                    <p>Please visit our website and select the "Donate" option to make an online donation. After entering your information, you will be taken to a secure payment page where you can use your credit card or PayPal account to make a donation.</p>
                    <p>You can choose to make your donation once a month if you'd like to make it a regular occurrence. This will enable us to make future plans and make sure we can keep helping those in need.</p>
                    <p>We value your generosity and commitment to our cause. Your gift will have a significant impact on the lives of individuals we assist. We appreciate you working with us to make the world a better place for everyone.</p>
                    <br/>
                    <center>
                        <button className='btn d-none d-md-block' style={{textTransform:"uppercase",fontWeight:"bold",width:"50%",color:"white",backgroundColor:"#003366"}}>Learn More</button>
                    </center>
                </div>
            </div>
            <div className='col-12 col-md-4' style={{alignSelf:"center"}}>
                <img className='observeX' style={{width:"100%",transform:"translateX(70%)",opacity:"0",transition:"all linear 2s",backgroundColor:"lightblue",borderRadius:"10px",border:"1px solid grey",padding:"5px"}} src={`https://media.istockphoto.com/id/1283154274/photo/woman-holding-cardboard-donation-box-full-with-folded-clothes.jpg?s=170667a&w=is&k=20&c=2VIK6C6u1OomV_nWqKjZaBrd7MBZwWNPv9S3b7-b34g=`} />
                <center>
                    <br/><br/>
                        <button className='btn  d-md-none' style={{textTransform:"uppercase",fontWeight:"bold",width:"50%",color:"white",backgroundColor:"#003366"}}>Learn More</button>
                    </center>
            </div>
        </div>
      </div>
  
      <div className='container'>
        <div className='row' style={{padding:"50px"}}>
            <div className='col-12' style={{padding:"0",margin:"0"}}>
                <p style={{fontWeight:"lighter",textShadow:"2px 2px indianred",fontSize:"35px",color:"orange"}}>Our Core Values</p>
            </div>
        
            {corevalues.map(corevalue =>
               
            <div className='col-12 col-md-4' key={corevalue.id} style={{border:"1px solid lightgrey",position:"relative",padding:"20px 10px"}}>
               <div className='full_extend' style={{position:"absolute",transition:"opacity linear 2s",padding:"20px",color:"white",top:"0",left:"0",width:"100%",height:"100%",backgroundColor:"rgb(13, 13, 13,0.6)"}}>
                <h2>{corevalue.value}</h2>
                <p>
             {corevalue.full_extend}
                </p>
               </div>
                <center>
                    <div  style={{width:"80%"}}>
 <img src={`https://www.feedthechildren.org/images/our-work/Food-Icon.png`} />
 <p>{corevalue.value}</p>
 <p>{corevalue.extend}</p>
</div>
 </center>
            </div>
           )}
        </div>
      </div>
      <div className='container-fluid' style={{backgroundColor:"lightblue",padding:"30px"}}>
        <div className='row' style={{padding:"30px"}}>
            <div className='col-12 col-md-4' style={{alignSelf:"center"}}>
                <img style={{width:"100%",backgroundColor:"indianred",borderRadius:"10px",border:"1px solid grey",padding:"5px"}} src={require(`./cash.jpg`)} />
            </div>
            <div className='col-12 col-md-8'>
                <div>
                    <p>How To Make Cash Donations</p>
                    <p>MWe appreciate your desire to help the MaxiCare Foundation. Your gift will enable us to offer crucial assistance and support to widows, autistic kids, and the less fortunate members of our community.
                    </p>
                    <p>Please visit our website and select the <b>"Donate"</b> option to make an online donation. After entering your information, you will be taken to a secure payment page where you can use your credit card or PayPal account to make a donation.</p>
                    <p>You can choose to make your donation once a month if you'd like to make it a regular occurrence. This will enable us to make future plans and make sure we can keep helping those in need.</p>
                    <p>We value your generosity and commitment to our cause. Your gift will have a significant impact on the lives of individuals we assist. We appreciate you working with us to make the world a better place for everyone.</p>
                    <br/>
                    <center>
                        <button className='btn' style={{textTransform:"uppercase",fontWeight:"bold",width:"50%",color:"white",backgroundColor:"#003366"}}>Learn More</button>
                    </center>
                </div>
            </div>
        </div>
      </div>
      <div className='container' style={{padding:"50px"}}>
        <div className='row' style={{padding:"50px"}}>
            <div className='col-6 col-md-2' style={{position:"relative"}}>
                <div style={{position:"absolute",left:"-10%",top:"0"}}>
                <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1tGoH9_cQ8cZLtTXH4CezEYXuyzoBZjfP_g&usqp=CAU`} style={{width:"50%",border:"1px solid lightgrey",padding:"5px"}} />
                </div>
                <div style={{position:"absolute",right:"-30%",top:"30%"}}>
                <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1tGoH9_cQ8cZLtTXH4CezEYXuyzoBZjfP_g&usqp=CAU`} style={{width:"50%",border:"1px solid lightgrey",padding:"5px"}} />
                </div>
                <div  style={{position:"absolute",left:"-10%",bottom:"0"}}>
        <img style={{width:"50%",border:"1px solid lightgrey",padding:"5px"}} src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXyYnvB7_Yv9L1BsdE60WNVKbq2LAc9Um8CA&usqp=CAU`} />
        </div>
            </div>
            <div className='col-6 col-md-2' style={{position:"relative"}}>
            <div  style={{position:"absolute",left:"-30%",top:"40%"}}>
        <img style={{width:"50%",border:"1px solid lightgrey",padding:"5px"}} src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXyYnvB7_Yv9L1BsdE60WNVKbq2LAc9Um8CA&usqp=CAU`} />
        </div>
                <div style={{position:"absolute",left:"-10%",top:"0"}}>
                <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1tGoH9_cQ8cZLtTXH4CezEYXuyzoBZjfP_g&usqp=CAU`} style={{width:"50%",border:"1px solid lightgrey",padding:"5px"}} />
                </div>
                <div style={{position:"absolute",right:"-30%",top:"30%"}}>
                <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1tGoH9_cQ8cZLtTXH4CezEYXuyzoBZjfP_g&usqp=CAU`} style={{width:"50%",border:"1px solid lightgrey",padding:"5px"}} />
                </div>
                <div  style={{position:"absolute",left:"-10%",bottom:"0"}}>
        <img style={{width:"50%",border:"1px solid lightgrey",padding:"5px"}} src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXyYnvB7_Yv9L1BsdE60WNVKbq2LAc9Um8CA&usqp=CAU`} />
        </div>
            </div>
            <div className='col-12 col-md-7'>
                <div style={{justifyContent:"center",alignContent:'center',alignItems:"center",padding:"20px"}}>
                <p style={{fontWeight:"bold",fontSize:"25px"}}>Fact</p>
                <p>Malnutrition is a significant problem for children living in poverty. According to the World Health Organization (WHO), an estimated 149 million children under the age of five are stunted due to chronic malnutrition.
                </p>
                <p>Malnutrition can have serious long-term effects on a child's health, cognitive development, and future prospects.</p>
                </div>
            </div>
        </div>
      </div>
      <div className='container d-none' style={{position:"relative",width:"100%"}}>
      <div style={{position:"absolute",zIndex:"473",display:"none", width:'100%',height:"100%",backgroundColor:"rgba(13,13,13,0.3)"}}></div>
        <div style={{display:"flex",padding:"30px", justifyContent:"space-evenly"}}>
            <div style={{width:"20%"}}>
            <span className='fa fa-chevron-left' style={{padding:"15px",marginTop:"20%",backgroundColor:"lightgrey",border:"1px solid grey",borderRadius:"50px"}}></span>
            </div>
            <div  style={{padding:"10px",width:"20%"}}>
                                    <img style={{width:'100%',borderRadius:"50%",height:"100%"}} src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy5Gm5_sMFqNrS13LasDwqkwTFoFU2LQnjYQ&usqp=CAU`} />
                                </div>
                        <div style={{width:"20%",padding:"20px"}}>
                        <center style={{backgroundColor:"indianred",color:"white",padding:"20px"}}>
                                <p style={{fontSize:"20px"}}>Present in over 20+ countries</p>
                               </center>
            </div>
            <div style={{width:"20%"}}>
            <span className='fa fa-chevron-right' style={{padding:"15px",float:"right",marginTop:"20%",backgroundColor:"lightgrey",border:"1px solid grey",borderRadius:"50px"}}></span>
            </div>
        </div>
      </div>
    <div className='container-fluid'>
        <div className="row">
            <div className='col-12 col-lg-6' style={{padding:"0",margin:"0"}}>
                <img style={{width:'100%',height:"500px"}} src={`https://www.wvi.org/sites/default/files/styles/large_square/public/2019-03/Screen%20Shot%202019-03-25%20at%2010.42.29%20AM.png?itok=JJDtGHpb`} />
            </div>
            <div className='col-12 col-lg-6' style={{padding:"0",margin:"0",backgroundColor:"#006bb3",width:'100%',height:"500px"}}>
      <center>
        <div style={{width:"80%",padding:"10px"}}>
        <h1 style={{color:"white",fontStyle:"italic",fontSize:"35px",fontWeight:"bold",padding:"20px"}}>
        Collectively we've been able to alleviate poverty among over 200 million children using different methods to mitigate the effect.
              </h1>
              <br/>
              <div>
              <button className='btn' style={{border:"2px solid white",color:"white",fontSize:"13px",textTransform:"uppercase",fontWeight:'bold',width:"50%",padding:"10px 45px"}}>
                  LEARN MORE
                </button>
              </div>
        </div>
      </center>
            </div>
        </div>
    </div>
      <div className='container-fluid d-none' style={{backgroundColor:"rgba(245,245,245)",marginBottom:"100px",padding:"0",margin:"0",width:"100%"}}>
              <div style={{position:"fixed",display:`${displaymodal ? "block" : "none"}`,zIndex:"999900",backgroundColor:"rgba(0,0,0,0.7)",top:"5%",left:"0%",width:"100%",height:"95%"}}>
          <div className='shopcartdeldiv' style={{position:"fixed",fontWeight:"bold",backgroundColor:"white",boxShadow:"2px 2px 3px 2px lightgrey",padding:"30px",zIndex:"999900"}}>
           <span style={{float:"right",fontWeight:"lighter",color:"grey",fontSize:"25px"}} onClick={()=>setdisplaymodal(false)} className='fa fa-times'></span>
            <center>

              <h5 style={{fontWeight:"lighter"}}>{modaldetails}</h5>
              <br/>
             
              <p style={{fontWeight:"lighter",color:"grey"}}>{modaldetails} Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                 Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the</p>
            </center>
            </div>      
            </div>
        
        
                  <div style={{backgroundColor:"white",width:"100%",marginBottom:"50px"}}>
                   <div className='container-fluid'>
                    <div className='row'>
                    <div className='col-12 col-md-4 observeX'  style={{marginBottom:"40px",padding:"30px"}}>
                            <h5 onClick={setmodal} style={{fontWeight:"lighter",cursor:"pointer"}}>About Us</h5>
                            <p onClick={setmodal} style={{fontWeight:"lighter",cursor:"pointer"}}>View Our Profile</p>
                            <div onMouseOver={hoverapp} className={`${hovergrid} unhoveredapp`}>
                                <div style={{position:"relative"}}>
                                    <div className='underdiv' style={{position:"absolute",height:"100%",backgroundColor:"rgba(0,0,0,0.3)",width:"100%"}}>
                                       
                                    </div>
                                <img style={{width:"100%",height:"180px"}} src={`https://www.pacificprime.com/assets/b/home_aboutus_01.jpg`} />
                                </div>
                                
                               <br/>
                                <small style={{fontWeight:"lighter"}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                 Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
                                 <br/>
                           <span className='readmorebtn' style={{padding:"2px",fontWeight:"bolder",cursor:"pointer",color:"white",backgroundColor:"orange",border:"1px solid lightgrey",borderRadius:"5px"}}>read more ...</span></small>
                            </div>
                        </div>
                        <br/><br/>
                        <div className='col-12 col-md-4 observeY'  style={{padding:"30px",marginBottom:"40px"}}>
                            <h5 onClick={setmodal} style={{fontWeight:"lighter",cursor:"pointer"}}>Our Policy/Plans</h5>
                            <p onClick={setmodal} style={{fontWeight:"lighter",cursor:"pointer"}}>view Our Policies</p>
                            <div onMouseOver={hoverapp} className={`${hovergrid} unhoveredapp`}>
                                <div style={{position:"relative"}}>
                                    <div className='underdiv' style={{position:"absolute",height:"100%",backgroundColor:"rgba(0,0,0,0.3)",width:"100%"}}>
                                       
                                    </div>
                                <img style={{width:"100%",height:"180px"}} src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF9WIVIT6ufv7ipmIUbqz5CrUBkjXBG9l_RA&usqp=CAU`} />
                                </div>
                               <br/>
                                <small style={{fontWeight:"lighter"}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                 Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
                                 <br/>
                           <span className='readmorebtn' style={{padding:"2px",fontWeight:"bolder",cursor:"pointer",color:"white",backgroundColor:"orange",border:"1px solid lightgrey",borderRadius:"5px"}}>read more ...</span>
                           <br/><br/></small>
                           <br/><br/>
                            </div>
                        </div>
                        <br/><br/>
                        <div className='col-12 col-md-4 observeX'  style={{marginBottom:"40px",padding:"30px"}}>
                            <h3 onClick={setmodal} style={{fontWeight:"lighter",cursor:"pointer"}}>Our Binding Power </h3>
                            <p onClick={setmodal} style={{fontWeight:"lighter",cursor:"pointer"}}>View What Binds us</p>
                            <div onMouseOver={hoverapp} className={`${hovergrid} unhoveredapp`}>
                                <div style={{position:"relative"}}>
                                    <div className='underdiv' style={{position:"absolute",height:"100%",backgroundColor:"rgba(0,0,0,0.3)",width:"100%"}}>
                                       
                                    </div>
                                <img style={{width:"100%",height:"180px"}} src={`https://media.istockphoto.com/id/1344872631/photo/portrait-of-a-group-of-confident-young-businesspeople-working-together-in-a-modern-office.jpg?b=1&s=170667a&w=0&k=20&c=b5s611E4oqhs67lv8a8wSXuiqN8ZL3mFSdV_8ZE5AAQ=`} />
                                </div>
                                
                               <br/>
                                <small style={{fontWeight:"lighter"}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                 Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
                                 <br/>
                           <span className='readmorebtn' style={{padding:"2px",fontWeight:"bolder",cursor:"pointer",color:"white",backgroundColor:"orange",border:"1px solid lightgrey",borderRadius:"5px"}}>read more ...</span></small>
                            </div>
                        </div>
                    </div>
                    <br/><br/>
     
                   </div>
                    </div>
          <div className="footersm" style={{width:"100%",backgroundColor:"#002e4d"}}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 col-md-5'>
                    <small style={{fontSize:"50px",padding:"40px"}}>
                    <span style={{color:"white",fontWeight:"lighter"}}>Brand<span style={{color:"orange",fontWeight:"bold"}}>Icon</span></span>
                </small>
                    </div>
                    
                    <div className="col-12 col-md-7">
                        <input type="text" className='form-control' placeholder='complaints/feedback'></input><br/>
                        <div className='d-none d-md-block' style={{padding:"0",margin:"0"}}>
                        <button className='btn' style={{backgroundColor:"orange",width:'50%',color:"white"}}>
                            Send
                        </button>
                        </div>
                    </div>
                    <div className='d-done d-md-block col-md-7'></div>
                    <div className='col-12 d-md-none'>
                    <button className='btn' style={{backgroundColor:"orange",width:'100%',color:"white"}}>
                            Send
                        </button>
                    </div>
                </div>
                <br/><br/>
                <div className='row'>
                    <div className='col-6 col-md-3' style={{color:"white",padding:"20px"}}>
                     <h5>Our Profile</h5>
                     <div>
                        <p className="linker" style={{padding:"0",margin:"5px"}}>About Us</p>
                        <p className="linker" style={{padding:"0",margin:"5px"}}>Partners</p>
                        <p className="linker" style={{padding:"0",margin:"5px"}}>Contact Us</p>
                        <p className="linker" style={{padding:"0",margin:"5px"}}>Our Focus</p>
                        <p className="linker" style={{padding:"0",margin:"5px"}}>Testimonies</p>
                     </div>
                    </div>
                    <div className='col-6 col-md-3' style={{color:"white",padding:"20px"}}>
                     <h5 >News</h5>
                     <div>
                        <p className="linker" style={{padding:"0",margin:"5px"}}>Latest</p>
                        <p className="linker" style={{padding:"0",margin:"5px"}}>Blogs</p>
                        <p className="linker" style={{padding:"0",margin:"5px"}}>Trending </p>
                     
                     </div>
                    </div>
                    <div className='col-6 col-md-3' style={{color:"white",padding:"20px"}}>
                    <h5><span className='fa fa-globe'></span> Location</h5>
                     <div>
                        <p className="linker" style={{padding:"0",margin:"5px"}}>Lagos</p>
                        <p className="linker" style={{padding:"0",margin:"5px"}}>Osun</p>
                        <p className="linker" style={{padding:"0",margin:"5px"}}>Ogun</p>
                        <p className="linker" style={{padding:"0",margin:"5px"}}>Ekiti</p>
                        <p className="linker" style={{padding:"0",margin:"5px"}}>Oyo</p>
                     </div>
                    </div>
                    <div className='col-6 col-md-3' style={{color:"white",padding:"20px"}}>
                   <h5>Socials</h5>
                     <div>
                        <p className="linker" style={{padding:"0",margin:"5px"}}><span style={{color:"skyblue",fontSize:"25px"}} className='fa fa-facebook-square '></span> Facebook</p>
                        <p className="linker" style={{padding:"0",margin:"5px"}}><span style={{color:"blue",fontSize:"25px"}} className='fa fa-twitter '></span> twitter</p>
                        <p className="linker" style={{padding:"0",margin:"5px"}}><span style={{color:"orange",fontSize:"25px"}} className='fa fa-instagram '></span> instagram</p>
                        <p className="linker" style={{padding:"0",margin:"5px"}}><span style={{color:"blue",fontSize:"25px"}} className='fa fa-linkedin fa-2x'></span> linkedin</p>
                        <p className="linker" style={{padding:"0",margin:"5px"}}><span style={{color:"lightgreen",fontSize:"25px"}} className='fa fa-whatsapp'></span> whatsapp</p>
                     </div>
                    </div>
                </div>
                <br/><br/><br/>
                <div className='col-12'>
                    <span style={{float:"right",color:"white"}}><small className='linker'>Home</small> | <small className='linker'>Terms of use</small> | <small className='linker'>Privacy</small> | <small className='linker'>Cookie policy</small> | <small className='linker'>faq</small></span>
                </div>
            </div>
          </div>
        </div>
        </div>
     );
}

export default Landing;