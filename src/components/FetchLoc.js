import React,{useState, useEffect} from 'react'
import axios from 'axios'

function FetchLoc() {
    const pointerInit ={
        x:null,
        y:null
    }
    const [locations, setLocation] = useState(Date);
    const [pointer, setPointer] = useState(pointerInit)
    
    async function getMasterLoc (){
        const response =  fetch('http://localhost:8080/practice/dash/location/master')
        .then(res=>{
            // const json = res.json();
            res.json().then(resp=>{
                console.log('console.log', resp);
                return resp;
            })
            
        });  
        console.log('outside response', response)
        // console.log(response.json(), 'before')
        // const json = await response.json();
        // console.log('response',json, json.list)
        // console.log(response)
        // axios.get('http://localhost:8080/practice/dash/location/master')
        // .then(res =>console.log(res))

        // async function  a(){
        //     let res = await fetch('https://jsonplaceholder.typicode.com/users');
        //     res = await res.json();
        //     console.log(res)
        // }
        
        
        // a();
    }

    useEffect(() => {
        getMasterLoc()

        // const timeInterval = setTimeout(() => {
            // setLocation(Date)
        // }, 1000);

        // return ()=>{
        //     clearInterval(timeInterval)
        // }
        console.log('another useeffect')

    })

    const moveMoveHandler = (event)=>{
        console.log('inside the effect hook')
        setPointer({
            x:event.clientX,
            y:event.clientY
        })
    }

    useEffect(() => {
        window.addEventListener('mousemove',moveMoveHandler)
        console.log('outside the effect hook')
    },[])
    console.log('global scope the effect hook')
    return (
        <div>
            <p>{locations}</p>
            <p>{`x: ${pointer.x}, y:${pointer.y}`}</p>
        </div>
    )
}

export default FetchLoc
