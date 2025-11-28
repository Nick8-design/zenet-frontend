
import "../css/AppNavBar.css"


export default function AppNavBar(){
   
    return(


     <div className="head position-fixed w-100"  >
<nav class="navbar  navHeader  " >
    
  <div className="container-fluid ">
    <a href="home" className="navbar-brand ">
       <img src="/public/zee.png" alt="Logo" width="24" height="24" className="d-inline-block align-text-top me-2" />

       <span className="text-white fw-bold fs-3">ZENET</span>
        </a>



      <a href="#confirm" className="text-success lead fs-6 btn nav-link">
        Already Paid? Click Here.
      </a>


  </div>
</nav>



     </div>


    )
}

