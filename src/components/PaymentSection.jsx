import PayCard from "./PayCard";

 

 export default function PaymentSection(){

   const plans = [
 {
        "planName":"ZENET",
        "price":5,
        "duration":"10 Mins",
        "id":1
    },
    {
        "planName":"    800 MBs",
        "price":5,
        "duration":"30 Mins",
        "id":2
    },
    {
        "planName":"1 HOUR",
        "price":8,
        "duration":"1 Hrs",
        "id":3
    },

    {
        "planName":"2 HOURS UNLIMITED",
        "price":15,
        "duration":"2 Hrs",
        "id":4
    },
    {
        "planName":"  2 HOURS STREAMER",
        "price":18,
        "duration":"2 Hrs",
        "id":5
    },
    {
        "planName":"5 HOURS UNLIMITED",
        "price":25,
        "duration":"5 hrs",
        "id":6
    },
    {
        "planName":"5 HOURS STREAMER",
        "price":28,
        "duration":"5 Hrs",
        "id":7
    },
    {
        "planName":"  12 HOURS UNLIMITED",
        "price":30,
        "duration":"12 Hrs",
        "id":8
    },
    {
        "planName":"12 HOURS STREAMER",
        "price":35,
        "duration":"12 Hrs",
        "id":9
    },

    {
        "planName":"24 HOURS UNLIMITED",
        "price":40,
        "duration":"24 Hrs",
        "id":10
    },
    {
        "planName":"24 HOURS STREAMER",
        "price":45,
        "duration":"24 Hrs",
        "id":11
    },
    {
        "planName":"TV 24 HOURS UNLIMITED",
        "price":45,
        "duration":"24 Hrs",
        "id":12
    },

    {
        "planName":"TV 24 HOURS STREAMER ",
        "price":50,
        "duration":"24 Hrs",
        "id":13
    },
    {
        "planName":"TV WEEK UNLIMITED",
        "price":300,
        "duration":"7 Days",
        "id":14
    },
    {
        "planName":"TV WEEK STREAMER",
        "price":350,
        "duration":"7 Days",
        "id":15
    },
    {
        "planName":"5 GB UNLIMITED DEVICES",
        "price":60,
        "duration":"4 Days",
        "id":16
    },
    {
        "planName":"12 GB UNLIMITED DEVICES",
        "price":120,
        "duration":"6 Days",
        "id":17
    },
    {
        "planName":"3 DAYS UNLIMITED",
        "price":90,
        "duration":"3 Days",
        "id":18
    },
    {
        "planName":"3 DAYS STREAMER",
        "price":100,
        "duration":"3 Days",
        "id":19
    },
    {
        "planName":"7 DAYS UNLIMITED",
        "price":170,
        "duration":"7 Days",
        "id":20
    },
    {
        "planName":"7 DAYS STREAMER",
        "price":200,
        "duration":"7 Days",
        "id":21
    },
    {
        "planName":"21 DAYS UNLIMITED",
        "price":400,
        "duration":"21 Days",
        "id":22
    }


   ]


    return(

     <section className="container " id="paysection">
        <div className="row">

      
        {

            plans.map(item=>{

                return(
                <div className="col position-static " key={item.id} >
            <PayCard item={item}   />
              
               
            
                </div>
            )
        }
            )
        }
  </div>
     </section>
     


    )
 }