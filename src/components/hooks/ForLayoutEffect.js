import React, { useState } from 'react'

function ForLayoutEffect(ele, val) {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    
    React.useLayoutEffect(() => {
        const borderAn = ele.current.getBoundingClientRect();
        setHeight(borderAn.height);
        setWidth(borderAn.width);
    }, [val])
    return {width, height}
}

export default ForLayoutEffect
