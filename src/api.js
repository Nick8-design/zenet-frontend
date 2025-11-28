 

 export async function PayWifi(phone, amount) {
    try {
      const res = await fetch("https://zenet.onrender.com/connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone,
          amount: parseFloat(amount),
        }),
      });

      return res;
    } catch (err) {
      console.error("Error sending request:", err);
      throw err;
    }
  }
 export default PayWifi


  

   
 export async function sendFeedback(msg){


  try {

    
    const respond = await  fetch("https://zenet.onrender.com/feedback",{
      method : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body :JSON.stringify({msg})
    } )



    if (respond.status===200){
     
      return respond
    }
    else{
     console.log(respond.status)
    }

    
  } catch (err) {
    console.log(`catch error ${err}`)
    
  }

}
 
 

export async function receiveFeed(){
  try{
    const respond = await fetch ("https://zenet.onrender.com/feedback")
  

    if (respond.status===200){
    return respond
  }
    else {
      console.log(respond.status)
      return []
    }


}catch (err ){
  console.log( err)
}




}


export async function ServerStatus() {
  try
  {
    const respond = await fetch ("https://zenet.onrender.com")

    if (respond.status===200){
      return respond
    }else{
      console.log(respond.status)
      return ""
    }




  } catch (err){
    console.log(err)
  }
  
}
