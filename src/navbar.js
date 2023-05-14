import {useState, useContext, useEffect} from "react"

function App() {
    const [navlinks, setnavlinks] = useState([
        {id:0,link:"about us", sublinks:[{dis:"meet our team",link:""},{dis:"financial growth",link:""}]},
        {id:1,link:"our plan", sublinks:[{dis:"what we do",link:""},{dis:"how we achieve it",link:""},{dis:"how can you help",link:""}]},
        {id:2,link:"assist us", sublinks:[{dis:"donate online",link:""},{dis:"pick a child",link:""},{dis:"create a donation plan",link:""},{dis:"donate items",link:""},{dis:"donate crypto",link:""}]},
        {id:3,link:"join us", sublinks:[{dis:"volunteer",link:""},{dis:"start a fundraiser",link:""},{dis:"foundational member",link:""},{dis:"coporate partnership",link:""}]}
    ])
    const [viewid, setviewid] = useState(-1)
    const [displaynav, setdisplaynav] = useState(false)
    const [iconclass, seticonclass] = useState("fa fa-bars")
    const [displaysearch, setdisplaysearch] = useState(false)


    const hoverlink =(data)=>{
    setviewid(data)
    }
  return (
    <div onMouseLeave={()=>hoverlink(-1)} className="App" style={{position:"fixed",width:"100%",top:"0px",zIndex:"30"}} >
<div style={{backgroundColor:"white"}}>
<div style={{display:"flex",borderBottom:"1px solid lightgrey",justifyContent:'space-between',padding:"0",margin:"0"}}>
    <div className="nav_brand" style={{padding:"10px"}}>
        <img style={{width:'100%',height:"100%"}} src={require(`./logo.png`)} />
    </div>
    <div className="nav_linksection"  style={{width:"55%",alignItems:"center",alignContent:'center',justifyContent:"space-evenly"}}>
       {navlinks.map(navlink =>
    <div className="mt-3" onMouseOver={()=>hoverlink(navlink.id)}  style={{width:"20%",marginTop:"50px",textTransform:"uppercase",fontWeight:"bold",fontSize:"15px",cursor:"pointer"}}><p className="nav_link" style={{color:`${viewid === navlink.id ? "indianred" : "black"}`}}>{navlink.link}<small><span className={viewid === navlink.id ? "fa fa-chevron-up ml-1" : "fa fa-chevron-down ml-1"} style={{color:"grey",fontSize:"11px"}}></span></small></p></div>
        )}
         <div style={{width:'13%',padding:"0px 5px"}}><button style={{width:"100%",padding:"5px 7px",border:"none",borderRadius:"0",fontWeight:"bolder",color:"white",backgroundColor:"indianred",textTransform:"uppercase"}}><small><b>Donate</b></small></button></div>
         <div style={{width:'10%',padding:"10px"}}><span onClick={()=> setdisplaysearch(prev=> !prev)} className="fa fa-search"></span></div>
    </div>
    <div className="nav_bar" style={{width:"20%",padding:"5px",justifyItems:"center",alignItems:"center"}}>
    <span onClick={()=>{ setdisplaynav(prev => !prev);seticonclass(iconclass === "fa fa-bars" ? "fa fa-times" : "fa fa-bars")}} className={`${iconclass}`} style={{fontSize:"30px",float:"right",padding:"3px",border:"1px solid lightgrey"}}></span>
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
    {navlinks[`${viewid}`] && navlinks[`${viewid}`].sublinks.map(sublink=>
    <li className="nav_sublinks" style={{padding:"7px",fontWeight:"bold",textTransform:"uppercase",cursor:"pointer",width:"100%",textAlign:"center"}}>{sublink.dis}</li>
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
   {navlinks[`${viewid}`] && navlinks[`${viewid}`].link === navlink.link ? navlinks[`${viewid}`].sublinks.map(sublink=>
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
