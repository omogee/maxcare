import {useState, useContext, useEffect} from "react"
import {Link} from "react-router-dom"

function App() {
    const [navlinks, setnavlinks] = useState([
        {id:0,link:"home",route:"/"},
        {id:1,link:"about us",route:"/#about_us"},
        {id:2,link:"our plan",route:"/our_plans", sublinks:[{dis:"what we do",link:"/our_plans/#what_we_do"},{dis:"how we achieve it",link:"/our_plans/#how_we_achieve"},{dis:"how can you help",link:"/our_plans/#how_can_i_help"}]},
        {id:3,link:"assist us", sublinks:[{dis:"assist altrustic children",link:"/how_to_assist/altruistic children"},{dis:"assist widows",link:"/how_to_assist/widows"},{dis:"assist under priviledged",link:"/how_to_assist/under_priviledged"}]}
    ])
    const [viewid, setviewid] = useState(-1)
    const [displaynav, setdisplaynav] = useState(false)
    const [iconclass, seticonclass] = useState("fa fa-bars")
    const [displaysearch, setdisplaysearch] = useState(false)



    const hoverlink =(data)=>{
    setviewid(data)
    }
   
  return (
    <div  onMouseLeave={()=>hoverlink(-1)} className="App topnav" style={{position:"sticky",width:"100%",top:"0px",zIndex:"30"}} >
<div style={{backgroundColor:"white"}}>
<div style={{display:"flex",borderBottom:"0",justifyContent:'space-between',padding:"0",margin:"0"}}>
    <div className="nav_brand" style={{padding:"10px"}}>
        <img style={{zIndex:"87686",width:"100%"}} src={require(`./logo.png`)} />
    </div>
    <div className="nav_linksection"  style={{width:"63%",alignItems:"center",alignContent:'center',justifyContent:"space-evenly"}}>
       <div style={{position:"absolute",display:"flex",bottom:"0px",width:"100%"}}>
       {navlinks.map(navlink =>
    <div className="mt-3"  onMouseOver={()=>hoverlink(navlink.id)}  style={{width:"15%",marginTop:"50px",textTransform:"uppercase",fontWeight:"bold",fontSize:"15px",cursor:"pointer"}}>
        <a href={navlink.route} style={{textDecoration:"none"}}>
        <p className="nav_link" style={{color:`${viewid === navlink.id ? "#006080" : "black"}`,textAlign:"center"}}>{navlink.link}<small>{navlink.sublinks && navlink.sublinks.length > 0 ? <span className={viewid === navlink.id ? "fa fa-chevron-up ml-1" : "fa fa-chevron-down ml-1"} style={{color:"grey",fontSize:"11px"}}></span> : null}</small></p>
        </a>
    </div>
        )}
         <div style={{width:'9%',padding:"0px 5px"}}><button style={{width:"100%",padding:"5px 7px",border:"none",borderRadius:"0",fontWeight:"bolder",color:"white",backgroundColor:"indianred",textTransform:"uppercase"}}><small><b>Donate</b></small></button></div>
         <div style={{width:'10%',textAlign:"center",padding:"10px"}}><span onClick={()=> setdisplaysearch(prev=> !prev)} className="fa fa-search"></span></div>
        </div>
        
    </div>
    <div className="nav_bar" style={{width:"20%",padding:"5px",justifyItems:"center",alignItems:"center"}}>
    <span onClick={()=>{ setdisplaynav(prev => !prev);seticonclass(iconclass === "fa fa-bars" ? "fa fa-times" : "fa fa-bars")}} className={`${iconclass}`} style={{fontSize:"30px",cursor:"pointer",float:"right",padding:"3px",border:"1px solid lightgrey"}}><small>expand</small></span>
</div>
</div>
<div style={{position:"relative"}}>
    {displaysearch ?
    <input type="text" placeholder="Search...." style={{position:"absolute",boxshadow:"none",padding:"6.3px",border:"none",borderBottom:"1px solid lightgrey",right:"0px",width:"500px"}} />
: null }
</div>
<div style={{position:"relative"}}>
<div style={{width:"100%",position:"absolute",width:"100%",backgroundColor:"#006bb3",borderBottom:"1px solid lightgrey",padding:"0px",margin:"0px",color:"black"}}>
<ul style={{listStyleType:"none",margin:"0px",padding:"0px",width:'100%'}}>
    {navlinks[`${viewid}`] && navlinks[`${viewid}`].sublinks && navlinks[`${viewid}`].sublinks.map(sublink=>
    <a href={sublink.link}>
    <li className="nav_sublinks" style={{padding:"7px",fontWeight:"bold",textTransform:"uppercase",cursor:"pointer",width:"100%",textAlign:"center"}}>{sublink.dis}</li>
    </a>
        )}
</ul>
</div>
</div>
</div>
<div  style={{position:"relative",height:`${displaynav ? "100vh" : "0px"}`,backgroundColor:"rgba(13,13,13,0.4)"}}>
<div style={{width:"100%",position:"absolute",width:"100%",backgroundColor:"#006bb3",overflow:"hidden",height:`${displaynav && viewid == -1 ? "50vh":displaynav && viewid != -1 ? "60vh" : "0px"}`,transition:"all linear 2s",borderBottom:"1px solid lightgrey",padding:"0px",margin:"0px",color:"black"}}>
<ul style={{listStyleType:"none",margin:"0px",padding:"0px",width:'100%'}}>
    {navlinks && navlinks.map((navlink,index)=>
    <div key={index}>
    <li className="nav_sublinks" onClick={()=> setviewid(navlink.id)}  style={{padding:"7px",fontWeight:"bold",textTransform:"uppercase",cursor:"pointer",width:"100%",textAlign:"center"}}>{navlink.link}</li>
   <div style={{backgroundColor:"#4db8ff",width:"100%",padding:"0px",margin:"0px"}}>
   {navlinks[`${viewid}`] && navlinks[`${viewid}`].sublinks && navlinks[`${viewid}`].link === navlink.link ? navlinks[`${viewid}`].sublinks.map(sublink=>
    <li className="nav_sublinks" style={{padding:"7px",fontWeight:"bold",textTransform:"uppercase",cursor:"pointer",width:"100%",textAlign:"center"}}>{sublink.dis}</li>
        ) : null}
   </div>
    </div>
        )}
</ul>
</div>
</div>

</div>
   
  );
}

export default App;
