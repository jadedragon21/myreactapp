import React, { useEffect, useState } from 'react';//react and hooks import
import './example.css';//example.css import
const Example = () => {
    //count is the getter, count invoke the number used in useState
    //setCount is the setter
    const [count, setCount] = useState(0);
    
    // hook effect useEffect example-use effect is a replacement for life cycle methods-title is going to update
    //Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        document.title = `You clicked ${count} times`;
        // alert('this is an alert');
        console.log('This is a log');
    })

    return (
       <div>
           <p>You clicked {count} times.</p>
           <button onClick={() => setCount(count + 1)}>
               Click Me!
           </button>
       </div>

    )
}

export default Example