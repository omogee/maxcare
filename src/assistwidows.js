import {useState, useContext, useEffect} from "react"
import {Link} from "react-router-dom"

function AssistWidows() {
  return (
   <div>
     <div className="container">
     <div className="row">
        <div className="col-6">
     <img style={{width:"100%",padding:"10%",borderRadius:"50%",height:"500px"}} src={require(`./womancrying.jpeg`)} />
        </div>
        <div className="col-6" style={{alignSelf:"center"}}>
         <div>
            <h2 className="header_text">
                Help widows Live
            </h2>
            <p>do not do more than your self, but remember to be happy always
            do not do more than your self, but remember to be happy always
            do not do more than your self, but remember to be happy always
            </p>
            <p>You Can make your donations and contributions through the following simple steps</p>
            <ul>
                <li>do not do more than your self, but remember to be happy always </li>
                <li>do not do more than your self, but remember to be happy always </li>
                <li>do not do more than your self, but remember to be happy always </li>
                <li>do not do more than your self, but remember to be happy always </li>
                <li>do not do more than your self, but remember to be happy always </li>
            </ul>
         </div>
        </div>
     </div>
     </div>
       <div className="container-fluid" style={{backgroundColor:"lightblue"}}>
        <div className="container">
     <div className="row">
    <div className="col-12">
    <center>
        <h1 className="header_text" style={{textDecoration:"underline"}}>Why widows are important to us</h1>
     </center>
    </div>
     </div>

     <div className="row">
     <div className="col-12" style={{padding:"30px"}}>
        <center>
            <img src={require(`./womancrying.jpeg`)} style={{width:'30%',height:"300px",borderRadius:"50%",border:"20px solid blue"}} />
        </center>
     </div>
     <div className="col-12">
        <p>Children have always been the backbone of any society and a hope for a better future.
        An popular addage says "children are our investment for a life we wish we had...."
        </p>
        <p>Every day hundreds of this children are born with a sad disability and no hope to live but butthanks to Maxi foundation, we have created a platform 
            that helps us absobs this kids into a care plan that oversees that this kids are well mentored to stand a competing chance with their peers and accomplishto ensuee deppression doesnt kick in.
        </p>
        <p>do not do more than your self, but remember to be happy alwaysdo not do more than your self, but remember to be happy always
        do not do more than your self, but remember to be happy alwaysdo not do more than your self, but remember to be happy always
        </p>
        <p>do not do more than your self, but remember to be happy always
        do not do more than your self, but remember to be happy always
        do not do more than your self, but remember to be happy always
        do not do more than your self, but remember to be happy always
        </p>
     </div>
   </div>
   </div>
   </div>
   </div>
  );
}

export default AssistWidows;
