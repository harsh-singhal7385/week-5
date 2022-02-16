import React , { useState, useEffect } from 'react';
import axios from 'axios'

// https://dev.to/shareef/how-to-work-with-arrays-in-reactjs-usestate-4cmi

// https://stackoverflow.com/questions/65633364/how-to-use-usestate-hook-to-map-json-response-from-api/65633458

// https://dev.to/joelynn/react-hooks-working-with-state-arrays-2n2g

const ViewArticle = () => {
    
    const [mydata,setMydata] = useState([])
    
    // console.log(mydata)
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos/').then((data)=>{
            return data.data
        })
        .then((data)=>{
            const transformData = data.map((user)=>{
                return {
                    "id" : user.id,
                    "title" : user.title,
                    "completed" : user.completed
                }
            })
            
            setMydata( prevState => ([...transformData]) )
            // setMydata(([...transformData])  )
            
            console.log("indside handlechange") 
        
        }).catch((err)=>{
            console.log(err)
        })
      },[]);
    
      function handleChange(){
            axios.get('https://jsonplaceholder.typicode.com/todos/').then((data)=>{
                return data.data
            })
            .then((data)=>{
                const transformData = data.map((user)=>{
                    return {
                        "id" : user.id,
                        "title" : user.title,
                        "completed" : user.completed
                    }
                })
                
                setMydata( prevState => ([...transformData]) )
                // setMydata(([...transformData])  )
                
                console.log("indside handlechange") 
            
            }).catch((err)=>{
                console.log(err)
            })
      }
    return (
        <>
            <br />
            {/* {
                mydata.map((user) => {
                <div key={user.id}>
                    <p>{user.title}</p>
                    <p>{user.completed}</p>
                </div>
                })
            }  */}
            {
                mydata.map((user) => {
               return( <div key={user.id}>
                    <p>{user.title}</p>
                    <p>{user.completed}</p>
                        </div>
               )}
                )}
            
            <br />
            <button type='button' onClick={handleChange}>My Button</button>
        
        </>
    );
}

export default ViewArticle;
