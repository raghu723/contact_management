import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const CardContact=(props)=>{
      const {id,name,email}=props.contact;
     return(
        <div className="item">
                <div className="content">
                  <Link to ={`/contact/${id}`}>
                  <img className="ui avatar image" src={user} alt="user"/>
                  <div className="header">{name}</div>
                  <div>{email}</div>
                  </Link>
                </div>
                <i className="trash alternate outline icon" style={{color:"red",margin:"100px"}}  
                        onClick={()=>props.clickHander(id)}></i>
               </div>
     );
};
 export default CardContact;