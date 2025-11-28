import { useState } from "react"

export default function AlreadyPaid(){
    const [phn,setphn] = useState("254700742362-5:B9")
    const [pass,setpass] = useState("1234")





    return(
 <section className=" d-flex justify-content-center">

        <div className="container w-50   mx-5 px-5 mb-4 mt-4 fw-bold">
            <p className="text-center "> Already Have an Active Package?</p>
        
           <label class="form-label">Username</label>
           <input 
           type="text" 
           class="form-control" id="username" placeholder="2547xxxxxxxx"
            value={phn}
            onChange={(e)=>{setphn(e.target.value)}}
            
            />

           <label 
           class="col-form-label">Password</label>
        
        
          <input type="password"

           id="password" 
           class="form-control"
           value={pass}
           onChange={e=>setpass(e.target.value)}
          placeholder="****"/>

          <button type="button"  className="btn btn-success mt-3 {disabled}">Click Here to Connect</button>
    
        
      </div>

      </section>
    )
}