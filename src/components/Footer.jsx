import { useEffect, useState } from "react"
import "../css/Foot.css"
import { sendFeedback } from "../api"


export default function Footer(){

  const [feedback, setFeed] = useState("")
  const [received, setResponse] = useState("")

  useEffect(()=>{

    const timer = setTimeout(() => setResponse(""), 2000);
    return () => clearTimeout(timer);
    
  },[received])
  


  const handleSub = async (m) => {


    try {


      const res = await sendFeedback(m);

      
      const data = await res.json();
    
   

      setResponse(data.massage );


    } catch (err) {
      console.error("Error submitting feedback:", err);
      setResponse("Failed to send feedback.");
    }



  };



  



return(
   

<footer className="foot p-5">
{received !== "" ? (
  <div className="text-center text-light py-3">{received}</div>
) : null}

<div className="container text-light ">
  
  <div className="row info">
    <div className="col-sm">
        <div className="row fw-bold">CONTACT US</div>
        <div className="row">Whatsapp:wa.me/</div>
        <div className="row">Phone:</div>
    </div>

    <div className="col-sm">
        <div className="row fw-bold">QUICK LINKS</div>
        <div className="row">About Us</div>
        <div className="row">Our Services</div>
        <div className="row">FAQ</div>
        <div className="row">Support</div>
    </div>


    <div className="col-sm">
        <div className="row fw-bold">FOLLOW US</div>
        <div className="row">
           <p className="ps-0 pt-1">
        <a className="text-white pe-2" href="https://www.facebook.com/ "> <i className="bi bi-facebook "></i> </a>  
         <a className="text-white pe-2" href="https://x.com/"><i className="bi bi-twitter "></i></a> 
        <a className="text-white pe-2" href="https://www.instagram.com/">  <i className="bi bi-instagram "></i></a>

         <a className="text-white pe-2" href="https://linkedin.com/in/nick-dieda-a0b623250"> <i className="bi bi-linkedin"></i></a>
          </p>
        </div>


        

        <div className=" fw-bold">Give feedback</div>
 <div className="row ps-0 pe-2">


        <input 
        type="text" 
        className="form-control" 
        placeholder="Feedback, complaint and any relevant issue" 
        value={feedback}
        onChange={(f)=>{
          setFeed(f.target.value)
        }}
        />
        
        <button 
        className="btn btn-primary my-2 "

        onClick={
          ()=>{

          handleSub(feedback)


            setFeed("")}}


        >Submit
        </button>
        </div>

       
    </div>
  </div>


  <hr />


<p className="d-flex justify-content-between fs-6 lead " >
     <span className="">© {new Date().getFullYear()} Your Company Name. All rights reserved.</span>


     


     <span className="">
        <a className="text-white pe-2" href="https://www.facebook.com/ "> <i className="bi bi-facebook "></i> </a>  
         <a className="text-white pe-2" href="https://x.com/"><i className="bi bi-twitter "></i></a> 
        <a className="text-white pe-2" href="https://www.instagram.com/">  <i className="bi bi-instagram "></i></a>

         <a className="text-white pe-2" href="https://linkedin.com/in/nick-dieda-a0b623250"> <i className="bi bi-linkedin"></i></a>
          </span>

</p>



</div>



</footer>

 
)

}
