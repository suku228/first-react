import React from 'react'

function FChildComponent() {
    const[name, setName]= React.useState('');
    // const nameChangeHandler = (event)=>{
    //     setName(event.target.value)
    // }
    return (
        <div>
            <input type="text" value={name} onChange={(event)=>setName(event.target.value)}/>{name}
        </div>
    )
}

export default FChildComponent
