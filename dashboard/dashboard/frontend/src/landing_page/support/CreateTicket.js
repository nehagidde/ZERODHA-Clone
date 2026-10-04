import React from 'react';

function CreateTicket() {
    return ( 
        
         <div className="container">
      < div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2" >
          To create a ticket, select a relevant topic
        </h1>
      
         <div style={{display: "flex", width: "100%"}}>
        <div className="row p-5 mt-5 mb-5">
        <h4>
          Account Openings
        </h4>

        <a href="" style={{textDecoration:"none" , lineHeight:"2.5"}} > Online Account Opening</a>
          <br/>
         <a href=""style={{textDecoration:"none" , lineHeight:"2.5"}}> Company , Patnership and HUF Account</a>
         <br/>
         <a href=""style={{textCombineUpright:"none", lineHeight:"2.5"}}> Opening </a>
         <br/>
         <a href=""style={{textCombineUpright:"none", lineHeight:"2.5"}}> NRI Account Opening</a>
         <br/>
          <a href=""style={{textCombineUpright:"none", lineHeight:"2.5"}}>Charges at Zerodha</a>
          <br/>
          <a href=""style={{textCombineUpright:"none", lineHeight:"2.5"}}>Getting Started</a>
          <br/>
          </div>
      

       <div className="col-4 p-5 mt-5 mb-5">
        <h4>
          Your Zerodha Account
        </h4>

        <a href="" style={{textDecoration:"none" , lineHeight:"2.5"}} > Your Zerodha Account</a>
          <br/>
         <a href=""style={{textDecoration:"none" , lineHeight:"2.5"}}> Log Credentials</a>
         <br/>
         <a href=""style={{textCombineUpright:"none", lineHeight:"2.5"}}> Account Modification</a>
         <br/>
         <a href=""style={{textCombineUpright:"none", lineHeight:"2.5"}}> DP ID and bank details</a>
         <br/>
          <a href=""style={{textCombineUpright:"none", lineHeight:"2.5"}}>Your Profile</a>
          <br/>
          <a href=""style={{textCombineUpright:"none", lineHeight:"2.5"}}> Transfer and conversion of shares </a>
          <br/>
      </div>


       <div className="col-4 p-5 mt-5 mb-5">
        <h4>
            Funds
        </h4>

        <a href="" style={{textDecoration:"none" , lineHeight:"2.5"}} > Adding Funds</a>
          <br/>
         <a href=""style={{textDecoration:"none" , lineHeight:"2.5"}}> Fund Withdrawal</a>
         <br/>
         <a href=""style={{textCombineUpright:"none", lineHeight:"2.5"}}> eMandates </a>
         <br/>
         <a href=""style={{textCombineUpright:"none", lineHeight:"2.5"}}> Adding Bank Account</a>
         <br/>
          <a href=""style={{textCombineUpright:"none", lineHeight:"2.5"}}> Roprts</a>
          <br/>
          <a href=""style={{textCombineUpright:"none", lineHeight:"2.5"}}> Portfolio</a>
          <br/>
        </div>
         </div>
         </div>
         </div>
    
    

     );
}

export default CreateTicket; 