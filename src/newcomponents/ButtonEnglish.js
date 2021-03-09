import React from 'react'

function ButtonEnglish({setLanguage}) {
    return (
        <div>
            <button onClick={()=>setLanguage('ENGLISH')}>english</button>
        </div>
    )
}

export default ButtonEnglish
