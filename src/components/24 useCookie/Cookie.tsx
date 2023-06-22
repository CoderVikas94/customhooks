import useCookie from "./useCookie";

export default function CookieComponent() {
  const [value, update, remove] = useCookie("name", "John");

  return (
    <div className="w-full bg-slate-900">
      <div className="text-white">{value}</div>
      <button className="text-white" onClick={() =>{update("Molly")}}>Change Name To Sally</button>
      <button className="text-white" onClick={remove}>Delete Name</button>
    </div>
  );
}
