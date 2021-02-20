import React, { forwardRef } from 'react'

function RefForm({id, placeholder, keyDownHandler},refer) {
    return (
        <div>
            <input id={id} placeholder={placeholder} ref={refer} type="text" onKeyDown={(event)=>keyDownHandler(event)} />
        </div>
    )
}

export default React.forwardRef(RefForm)
