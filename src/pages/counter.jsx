import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, print } from '../store/slices/counterSlices';


const Counter = () => {
    //const[counter, setCounter] = useState(0);
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
     

    return (
        <div>
            <button onClick = { () => dispatch(increment())}>Increment
                
            </button>
            <button onClick = { () => dispatch(decrement())}>Decrement
               
            </button>

            <button onClick = { () => dispatch(print())}>Print
               
            </button>
        </div>
    )
}

export default Counter;