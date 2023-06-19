import { useState } from "react"
import useTimeout from "./useTimeout"

const Timeout = () => {
    const [count, setCount] = useState(10)
    const { clear, reset } = useTimeout(() => setCount(20), 5000)
  return (
    <div>
         <div>{count}</div>
      <button className=" bg-blue-700  rounded-md w-24 h-10 text-yellow-200 font-bold border-s-blue-950 border-slate-50 mx-4" onClick={() => setCount(c => c + 1)}>Increment</button>
      <button className=" bg-blue-700  rounded-md max-w-max h-10 text-yellow-200 font-bold border-s-blue-950 border-slate-50 mx-4" onClick={clear}>Clear Timeout</button>
      <button className=" bg-blue-700  rounded-md max-w-max h-10 text-yellow-200 font-bold border-s-blue-950 border-slate-50 mx-4" onClick={reset}>Reset Timeout</button>
    </div>
  )
}

export default Timeout