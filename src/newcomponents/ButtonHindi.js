import React from 'react'

function ButtonHindi({setLanguage}) {
    return (
        <div>
            <button onClick={()=>setLanguage('HINDI')}>hindi</button>
        </div>
    )
}

export default ButtonHindi
