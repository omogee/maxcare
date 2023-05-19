import React, { useState, useEffect } from 'react';

function OurPlan() {
    return ( 
        <div>
            <div className='container'>
                <div className='row'>
                <div className='col-12'>
                    <h2 className="header_text"  id="what_we_do">WHAT WE DO</h2>
                    <center>
                        <img style={{padding:"5px",border:"1px solid lightgrey"}} src={require(`./helpingchild.jpg`)} />
                       <br/><br/>
                        <p>The vision is to create a world where widows, autistic children, and the less privileged are empowered to lead fulfilling lives and have access to basic needs and essential services. We envision a society that values and supports these groups, and where they are not marginalized or discriminated against based on their circumstances.
                        The vision is to create a world where widows, autistic children, and the less privileged are empowered to lead fulfilling lives and have access to basic needs and essential services. We envision a society that values and supports these groups, and where they are not marginalized or discriminated against based on their circumstances.
                        </p>
                        <p>The vision is to create a world where widows, autistic children, and the less privileged are empowered to lead fulfilling lives and have access to basic needs and essential services. We envision a society that values and supports these groups, and where they are not marginalized or discriminated against based on their circumstances.</p>
                     
                    </center>
               
                        <img style={{width:'20%',display:"none"}} src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuWCEbMoyXhJbAKoF3iaWBUqG3cQt1x7rgjS_eEXxN6eD5KCtqPz_QepkxlYcAcSXnJiM&usqp=CAU`} />
                    <h2 className="header_text" id="how_we_achieve">HOW WE ACHIEVE IT ?</h2>
                 <ol>
                    <center>
                    <li><h4 className='header_text'>We Plan</h4>
                    <img style={{width:"20%"}} src={`https://thumbs.dreamstime.com/z/planning-28192287.jpg`}/>
                        <p>The vision is to create a world where widows, autistic children, and the less privileged are empowered to lead fulfilling lives and have access to basic needs and essential services. We envision a society that values and supports these groups, and where they are not marginalized or discriminated against based on their circumstances.
                        </p>
                        <p>The vision is to create a world where widows, autistic children, and the less privileged are empowered to lead fulfilling lives and have access to basic needs and essential services. We envision a society that values and supports these groups, and where they are not marginalized or discriminated against based on their circumstances.</p>
                    </li>
                    <li><h4 className='header_text'>We Act</h4>
                    <img style={{width:"30%"}} src={require(`./action.jpg`)}/>
                        <p>The vision is to create a world where widows, autistic children, and the less privileged are empowered to lead fulfilling lives and have access to basic needs and essential services. We envision a society that values and supports these groups, and where they are not marginalized or discriminated against based on their circumstances.
                        </p>
                        <p>The vision is to create a world where widows, autistic children, and the less privileged are empowered to lead fulfilling lives and have access to basic needs and essential services. We envision a society that values and supports these groups, and where they are not marginalized or discriminated against based on their circumstances.</p>
                       
                    </li>
                    </center>
                 </ol>
                
                 <h2 className="header_text"  id="how_can_i_help">HOW CAN I HELP ?</h2>
                 <center>
                        <p>The vision is to create a world where widows, autistic children, and the less privileged are empowered to lead fulfilling lives and have access to basic needs and essential services. We envision a society that values and supports these groups, and where they are not marginalized or discriminated against based on their circumstances.
                        </p>
                        <p>The vision is to create a world where widows, autistic children, and the less privileged are empowered to lead fulfilling lives and have access to basic needs and essential services. We envision a society that values and supports these groups, and where they are not marginalized or discriminated against based on their circumstances.</p>
                   <button className="btn btn-primary">Donate</button>
                    </center>
                </div>
                </div>
            </div>
        </div>
     );
}

export default OurPlan;