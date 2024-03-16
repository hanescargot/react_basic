import *  as React  from  "react"
import { useState } from 'react';

interface IsState{
    counter : number
}

export function Counter() {
    const  [state, setState] = useState<IsState>({counter : 0}) //!!!!!

    const onIncrement =  () => {
        setState({
            counter : state.counter +1
        })
    }

    const onDecrement =  () => {
        setState({
            counter : state.counter -1
        })
    }

    return (
    <div>
        <h2>Counter</h2>
        <div>
            {state.counter}
        </div>
        <div>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>
    </div>
    )
}

