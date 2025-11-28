import { useEffect, useState } from "react"
import "../css/Voucher.css"
import { ServerStatus } from "../api"

export default function Voucher(){

    const [phn, setphn]= useState(2547)
    const [mac, setMac]= useState("62:9D:B9:EF:7E:71")

    const [serverStatus, setServerState]= useState("")
    
 useEffect(()=>{
    setMac("88:88:B9:EF:7E:71")

    ReceiveStatus()

 },[100])


    
 



 const ReceiveStatus= async ()=>{

     try{
     const res = await ServerStatus()
 


     const data= await res.json()

     console.log(data.status)
   
     setServerState(data.state)

     
   
 
 }catch(err){
         console.log(`server err ${err}`)
     }
 
 
  } 



    return(
        <section className="voucher">
            
        <p className="text-center fw-bold  ">Have a voucher code? Activate your voucher code here</p>
        <div className="d-flex justify-content-center ">
            
        <div className="card p bg-light  w-50  mx-5 px-5 voucher">
        
        <div className=" fw-bold text-center">
           
          
             <label className="form-label pt-3">Voucher Code</label>
            <input type="text" className="form-control mb-4" placeholder="e.g.,v123456"></input> 

        
        </div>

<div className=" fw-bold text-center">

 <label className="form-label">Phone Number</label>
<input type="text"
 className="form-control mb-4"
  placeholder="e.g.,2547"
 value={phn}
 onChange={
(no)=>setphn(no.target.value)

 }

  ></input> 

<button type="button"  className="btn btn-success w-100 mb-3">Activate Voucher</button>


</div>
</div>

</div>
<p className="text-center fw-bold mt-4">Lost Voucher connection? Reconnect here</p>

<div className="d-flex justify-content-center mb-3">
<div className="card p bg-light  w-50  mx-5 px-5 voucher fw-bold text-center">
        
   


 <label className="form-label pt-3">Phone Number or Voucher Code</label>
<input type="text"
 className="form-control mb-4"
  placeholder="e.g.,2547 or v12345"
 value={phn}
 onChange={
(no)=>setphn(no.target.value)

 }

  ></input> 

<button type="button"  className="btn btn-success w-100 mb-3">Reconnect</button>

</div>

</div>


<div className="row w-100 ">
    <div className="col">Your MAC Address: {mac}    </div>

    {
        (serverStatus && serverStatus!=="")?  <div className="col text-end ">Server : {serverStatus}</div>:<div className="col text-end ">Server : Sarver is asleep</div>

    }
    
    
   

</div>




</section>

    )
}