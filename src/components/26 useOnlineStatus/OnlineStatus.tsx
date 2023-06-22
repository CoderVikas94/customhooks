import useOnlineStatus from "./useOnlineStatus";

export default function OnlineStatusComponent() {
  const online: boolean = useOnlineStatus();
  console.log("online",online)


  return <div>{online.toString()}</div>;
}
