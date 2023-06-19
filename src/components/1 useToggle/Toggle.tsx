import { FC } from "react";
import useToggle from './useToggle'

interface ToggleProps {
 
} 
const Toggle:FC<ToggleProps> = () => {
    const [value, toggleValue]:any = useToggle(false)

  return (
    <div className="bg-red-300">
        <p>{value.toString()}</p>
        <button className=" bg-blue-700  rounded-md w-24 h-10 text-yellow-200 font-bold border-s-blue-950 border-slate-50 mx-4" onClick={toggleValue}>Toggle</button>
        <button className=" bg-blue-700  rounded-md w-24 h-10 text-yellow-200 font-bold border-s-blue-950 border-slate-50 mx-4" onClick={()=>toggleValue(false)}>Toggle False</button>
        <button className=" bg-blue-700  rounded-md w-24 h-10 text-yellow-200 font-bold border-s-blue-950 border-slate-50 mx-4" onClick={()=>toggleValue(true)}>Toggle True</button>
    </div>
  )
}

export default Toggle