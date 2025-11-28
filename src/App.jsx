import AlreadyPaid from "./components/AlreadyPaid"
import AppNavBar from "./components/AppNavBar"
import ConfirmationMessage from "./components/ConfirmationMessage"
import Footer from "./components/Footer"
import GetAllFeed from "./components/GetAllFeed"
import Home from "./components/Home"
import CallUs from "./components/Icon"
import PayCard from "./components/PayCard"
import PaymentSection from "./components/PaymentSection"
import Voucher from "./components/Voucher"



function App() {
 

  return (

    <>
    <AppNavBar/>

  

    <Home/>
    
    <GetAllFeed/>

   <PaymentSection/>

   <AlreadyPaid/>

   <ConfirmationMessage/>

   <Voucher/>

   
   <Footer/>
  <CallUs/>

    </>
  )
}

export default App
