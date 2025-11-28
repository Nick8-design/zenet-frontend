


export default function ConfirmationMessage(){

  





    return(
 <section className=" d-flex justify-content-center " id="confirm">

        <div className="container w-50   mx-5 px-5 mb-4 mt-4 fw-bold">
            <p className="text-center "> Already Have an Active Package?</p>
        
           <label class="form-label">Mpesa Message</label>
         
           <span class="form-label" ></span>
           <textarea
            class="form-control" 
            placeholder="Enter your full Mpesa message" 
            label="With textarea"
            rows={5}
            
            >


            </textarea>



          <button type="button" className="btn btn-success mt-3">Submit Mpesa Message</button>
    
        
      </div>

      </section>
    )
}