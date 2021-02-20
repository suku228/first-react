import React from 'react'

function usePrevious(value){
const ref = React.useRef(null);
console.log("first time")
React.useEffect(()=>{
    ref.current = value;
})
return ref.current;
}
export default usePrevious;