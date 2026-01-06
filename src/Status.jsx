import { useLocation, useNavigate } from "react-router-dom";

export default function PaidStatus() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    navigate("/");
    return null;
  }

  return (
    <div className="container text-center mt-5">
      <h1>✅ Payment Successful</h1>
      <p><b>Plan:</b> {state.plan}</p>
      <p><b>Amount:</b> Ksh {state.amount}</p>
      <p><b>Reference:</b> {state.reference}</p>

      <button className="btn btn-success mt-3" onClick={() => navigate("/")}>
        Go Home
      </button>
    </div>
  );
}
