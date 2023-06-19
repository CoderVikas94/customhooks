import useArray from "./useArray";

export default function ArrayComponent() {
  const { array, set, push, remove, filter, update, clear } = useArray<number>([
    1, 2, 3, 4, 5, 6,8,9,10
  ]);

  return (
    <div>
      <div>{array.join(",")}</div>
      <button
        className=" bg-blue-700  rounded-md w-24 h-10 text-yellow-200 font-bold border-s-blue-950 border-slate-50 mx-4"
        onClick={() => push(8)}
      >
        Add 7
      </button>
      <button
        className=" bg-blue-700  rounded-md w-max h-10 text-yellow-200 font-bold border-s-blue-950 border-slate-50 mx-4"
        onClick={() => update(5, 4)}
      >
        Change Sixth Element To 4
      </button>
      <button
        className=" bg-blue-700  rounded-md w-max h-10 text-yellow-200 font-bold border-s-blue-950 border-slate-50 mx-4"
        onClick={() => remove(8)}
      >
        Remove Second Element
      </button>
      <button
        className=" bg-blue-700  rounded-md w-max h-10 text-yellow-200 font-bold border-s-blue-950 border-slate-50 mx-4"
        onClick={() => filter((n) => n < 6)}
      >
        Keep Numbers Less Than 6
      </button>
      <button
        className=" bg-blue-700  rounded-md w-max h-10 text-yellow-200 font-bold border-s-blue-950 border-slate-50 mx-4"
        onClick={() => set([4, 8,9])}
      >
        Set To 4, 8,9
      </button>
      <button
        className=" bg-blue-700  rounded-md w-max h-10 text-yellow-200 font-bold border-s-blue-950 border-slate-50 mx-4"
        onClick={clear}
      >
        Clear
      </button>
    </div>
  );
}
