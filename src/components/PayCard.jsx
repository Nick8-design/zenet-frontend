import { useState } from "react";
import "../css/PayCard.css";
import PayWifi from "../api";


export default function PayCard({ item }) {
  const [phnNum, setPhn] = useState("");

  const [msg,setMsg]=useState("")

 

  const handleSubmit = async () => {
    const isValid = isValidKenyanPhone(phnNum);
  

    if (isValid) {
      
      try {
  const res = await PayWifi(phnNum, item.price);
  const data = await res.json();

  if (res.ok) {
    setMsg(` ${data.message}`);
    console.log("message:", data.message);
  } else {
    setMsg(`${data.error || "Payment failed"}`);
  }

  
  const modal = new window.bootstrap.Modal(
    document.getElementById("payplan")
  );

  modal.show();

  
} catch (err) {
  console.error("Error:", err);
  setMsg(" Error connecting to server.");
}




    } else {
     //replace window with boostrap incase the modal doesnt show
      const modal = new window.Modal(document.getElementById("alizen"));
      modal.show();
    }
  };

  return (

    <div className="mb-3" key={item.id}>


      <div className="card paycard text-center">
        <div className="card-body green rounded-top">
          <p className="bg-success text-white fw-bold mx-4 rounded-4 py-1 planName">
            {item.planName}
          </p>
          <p className="text-success">
            ksh <span className="fw-bolder fs-1">{item.price}</span>
          </p>
          <p className="text-success">{item.duration} Limited</p>
        </div>

        <div className="card-footer bg-green-500">
          <button
            className="btn btn-light linkPay text-success fw-bold"
            data-bs-toggle="modal"
            data-bs-target="#enterPhoneModal"
          >
            Click Here To Connect
          </button>
        </div>
      </div>

      


      <div className="modal fade" id="enterPhoneModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center">
              <h2>Enter Your Phone Number</h2>
              <input
                type="tel"
                className="form-control"
                placeholder="Your phone number here"
                value={phnNum}
                onChange={(e) => setPhn(e.target.value)}
              />
            </div>
            <div className="p-3 d-flex justify-content-center gap-2">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>

              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* Error Modal */}
      <div className="modal fade" id="alizen">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content text-center p-3">
            <i className="bi bi-x-circle text-danger ex "></i>
            <h1>Oops...</h1>
            <p>Phone number is invalid, please confirm.</p>
          
            <div className=" p-3 d-grid gap-2 d-flex justify-content-center"> 
              <button className=" btn btn-primary okbtn " data-bs-dismiss="modal">OK</button>
             </div>
          </div>
        </div>
      </div>

     
      <div className="modal fade" id="payplan">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content text-center p-3">
            <h3>Successful</h3>
         <p className="lead text-primary">{msg}</p>
            
          
          </div>
        </div>
      </div>
    </div>
  );



  function isValidKenyanPhone(number) {
    number = number.replace(/\s+/g, "").replace(/^(\+)?/, "");
    const regex = /^(?:254|0)?7\d{8}$/;
    return regex.test(number);
  }
}



