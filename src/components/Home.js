import React from 'react';
import { useState } from 'react';


const Home = () => {
    var [count, setCount] = useState(0);
    var [name, upperCase] = useState("Nothing here")
    var [vis, novis] = useState(true)


    let increament = () => { setCount(count += 1) }
    let decreament = () => { setCount(count -= 1) }
    let reset = () => { setCount(count = 0) }
    let change = (event) => upperCase(event.target.value.toUpperCase())
    return (
        <div>
            <button className="border-4 to-black" onClick={() => novis(!vis)}>SHOW/HIDE</button>
            {vis && (
                <div><p>count-{count}</p>
                    <button className="h-10 w-28 border-2  bg-amber-400" onClick={increament}>+</button>
                    <button className="h-10 w-28 border-2  bg-amber-400" onClick={decreament}>-</button>
                    <button className="h-10 w-28 border-2 bg-" onClick={reset}>reset</button>

                    <br></br>
                    <input type="text" onChange={change} className="border-2" />
                    <p>Uppercase : {name}</p>
                </div>)
            }


        </div>
    )
}

export default Home