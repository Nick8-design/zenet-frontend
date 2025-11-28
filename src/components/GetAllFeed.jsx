import { useEffect, useState } from "react"
import { receiveFeed } from "../api"



export default function GetAllFeed(){

    const [feedbacks,setFeeds]= useState([])

    useEffect(()=>{

        ReceiveFeed()



    }, [])



    const ReceiveFeed= async ()=>{

        try{
        const res = await receiveFeed()
    
        const data= await res.json()

        setFeeds(data)

        
      
    
    }catch(err){
            console.log(`err ${err}`)
        }
    
    
     } 




    //  console.log(`feedbacks ${feedbacks}`)

    return(
        <div className="container mb-5">
        <h3 className="">
            All feedback will be displayed here
        </h3>

       
        
        
        {
    feedbacks?.length > 0
        ? feedbacks.map((feed, id) => (
            <p key={id}>{feed.msg}</p>
        ))
        : <p>No available feedback</p>
}
        
        







        </div>
    )


}




