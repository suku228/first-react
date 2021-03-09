import React from 'react'
import coreContext from './NewContextApi'

function Typelanguage() {
    let val = React.useContext(coreContext);
    console.log(val)
    return (
        <div>
            {val==='ENGLISH'&&<h1>HELLO</h1>}
            {val==='HINDI'&&<h1>NAMSTE</h1>}
        </div>
    )
}

export default Typelanguage
