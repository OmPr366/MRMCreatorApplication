import React from "react";

interface ChangerProps {
    value: number;
    onIncrement: (val:number) => void;
    onDecrement: () => void;
}



const Changer = ({value,onIncrement,onDecrement}:ChangerProps) => {
  return (
    <div>
             <h1>{value}</h1>
             <button onClick={()=>onIncrement(value+10)}>Increment</button>
             <button onClick={onDecrement}>Decrement</button>
            
         </div>
  )
}

export default Changer
