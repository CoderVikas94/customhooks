import { useSessionStorage, useLocalStorage } from "./useStorage";

export default function StorageComponent() {
  const [name, setName, removeName] = useSessionStorage<string>("name", "Kyle");
  const [age, setAge, removeAge] = useLocalStorage<number>("age", 26);

  return (
    <div>
      <div>
        {name} - {age}
      </div>
      <button
        className=" bg-blue-700 p-2 rounded-md w-max h-10 text-yellow-200 font-bold border-s-blue-950 border-slate-50 mx-4"
        onClick={() => setName("John")}
      >
        Set Name
      </button>
      <button
        className=" bg-blue-700 p-2 rounded-md w-max h-10 text-yellow-200 font-bold border-s-blue-950 border-slate-50 mx-4"
        onClick={() => setAge(40)}
      >
        Set Age
      </button>
      <button
        className=" bg-blue-700 p-2  rounded-md w-max h-10 text-yellow-200 font-bold border-s-blue-950 border-slate-50 mx-4"
        onClick={removeName}
      >
        Remove Name
      </button>
      <button
        className=" bg-blue-700 p-2 rounded-md w-max h-10 text-yellow-200 font-bold border-s-blue-950 border-slate-50 mx-4"
        onClick={removeAge}
      >
        Remove Age
      </button>
    </div>
  );
}
