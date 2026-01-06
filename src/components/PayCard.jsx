import { useEffect, useState,useRef } from "react";
import "../css/PayCard.css";
import PayWifi, { Checkpay } from "../api";

import { useNavigate } from "react-router-dom";


export default function PayCard({ item }) {

  const [phnNum, setPhn] = useState("");
  const [msg, setMsg] = useState("");
  const [reference, setReference] = useState(null);
  const [checkingPayment,setCheckingPayment] = useState(false);



  const navigate = useNavigate();

  const payModalRef = useRef(null);
  const phoneModalRef = useRef(null);

useEffect(() => {
  if (phoneModalRef.current) {
    phoneModalRef.current = new window.bootstrap.Modal(phoneModalRef.current);
  }

  if (payModalRef.current) {
    payModalRef.current = new window.bootstrap.Modal(payModalRef.current);
  }
}, []);


  useEffect(() => {
    if (!checkingPayment || !reference) return;

    let visible = true;
    const startTime = Date.now();

    const interval = setInterval(async () => {
      try {
        // ⏱ stop after 3 minutes
        if (Date.now() - startTime > 180000) {
          clearInterval(interval);
          setCheckingPayment(false);
          payModalRef.current?.hide();
          setMsg("⌛ Payment timed out.");
          return;
        }

        // 🔄 blink modal
        visible ? payModalRef.current?.hide() : payModalRef.current?.show();
        visible = !visible;

        const data = await Checkpay(reference);

        if (data.status === "success") {
          clearInterval(interval);
          setCheckingPayment(false);
          payModalRef.current?.hide();

          // ✅ perform success action
          handlePaymentSuccess(data);

        } else if (data.status === "failed") {
          clearInterval(interval);
          setCheckingPayment(false);
          payModalRef.current?.hide();
          setMsg("❌ Payment failed.");
        }

      } catch (err) {
        console.error("Verification error", err);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [checkingPayment, reference]);

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = async () => {
    if (!isValidKenyanPhone(phnNum)) {
      new window.bootstrap.Modal(
        document.getElementById("alizen")
      ).show();
      return;
    }

    const formatted = formatKenyanPhone(phnNum);
    setPhn(formatted);

    try {
      const res = await PayWifi(formatted, item.price);
      const data = await res.json();

      if (!res.ok) {
        setMsg("Payment request failed.");
        return;
      }

      setReference(data.data.reference);
      setCheckingPayment(true);
      setMsg("🔄 Checking for payment...");

      // 🔴 hide phone modal
      phoneModalRef.current?.hide();

      // 🟢 show checking modal
      payModalRef.current?.show();

    } catch (err) {
      console.error(err);
      setMsg("❌ Server error.");
    }
  };

  /* ---------------- SUCCESS HANDLER ---------------- */
  const handlePaymentSuccess = (data) => {
    // any logic (save receipt, unlock wifi, etc.)
    console.log("PAID:", data);

    navigate("/paidstatus", {
      state: {
        reference,
        amount: item.price,
        plan: item.planName,
      },
    });
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

      {/* Phone Input Modal */}
      <div className="modal fade" id="enterPhoneModal"   ref={phoneModalRef}   >
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
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Cancel
              </button>

              <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Invalid Phone Modal */}
      <div className="modal fade" id="alizen">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content text-center p-3">
            <i className="bi bi-x-circle text-danger ex"></i>
            <h1>Oops...</h1>
            <p>Phone number is invalid, please confirm.</p>
            <div className="p-3 d-flex justify-content-center">
              <button className="btn btn-primary okbtn" data-bs-dismiss="modal">OK</button>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Status Modal */}


      <div className="modal fade" id="payplan"    ref={payModalRef}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content text-center p-3">
            <h3>Payment Initiated</h3>
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

  function formatKenyanPhone(number) {
  // remove spaces
  number = number.replace(/\s+/g, "");

  // remove leading +
  if (number.startsWith("+")) {
    number = number.slice(1);
  }

  // if starts with 0, replace with 254
  if (number.startsWith("0")) {
    number = "254" + number.slice(1);
  }

  // if starts with 7, prepend 254
  if (number.startsWith("7")) {
    number = "254" + number;
  }

  return `+${number}`;
}

}
