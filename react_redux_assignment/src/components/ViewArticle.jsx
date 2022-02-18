import React , { useState, useEffect } from 'react';
import axios from 'axios'

const ViewArticle = () => {
    
    const [mydata,setMydata] = useState([])
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos/').then((data)=>{
            return data.data
        })
        .then((data)=>{
            const transformData = data.map((user)=>{
                return {
                    "userId" : user.userId,
                    "id" : user.id,
                    "title" : user.title,
                    "completed" : user.completed
                }
            })
            
            setMydata( prevState => ([...transformData]) )
            console.log("indside handlechange") 
        
        }).catch((err)=>{
            console.log(err)
        })
        return () => {
            setMydata([])
          }

      },[]);
    
    return (
        <>
        <div className='display-4 bg-danger p-5 text-center'>
            Displaying data from API call...
            <br />
        </div>
        <div className='p-3 text-center  bg-info'>
            <a href="https://jsonplaceholder.typicode.com/todos/" className="text-dark" target="_blank">https://jsonplaceholder.typicode.com/todos/</a>
        </div>
        <div className='container bg-warning p-3'>
            <table className="table table-hover">
                <thead>
                    <tr className='p-5'>
                        <th scope="col" className='p-3 text-center'>USERID</th>
                        <th scope="col" className='p-3 text-center'>ID</th>
                        <th scope="col" className='p-3 text-center'>Title</th>
                        <th scope="col" className='p-3 text-center'>Status</th>
                    </tr>
                </thead>
                <tbody>
                {
                    mydata.map((user) => {
                        return (
                        <tr className='p-5'>
                            <td className='p-3 text-center' scope="row">{user.userId}</td>
                            <td className='p-3 text-center' scope="row">{user.id}</td>
                            <td className='p-3 text-center'>{user.title}</td>
                            <td className='p-3 text-center' >{String(user.completed)}</td>
                        </tr> 
                        )
                    })
                }
                </tbody>
            </table>
        </div>
        </>
    );
}

export default ViewArticle;
