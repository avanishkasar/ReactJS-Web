import React, { Component, useState } from "react"
function counter(){
    const [count,setCount] = useState(0)
    return 
    {
        <div>
              <h1>
                   {count}
               </h1>
              <h2 onClick={() => setCount(count + 1)}>
            ADD
            </h2>
          </div>
    }
}
export default counter