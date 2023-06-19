import useAsync from "./useAsync";

export default function AsyncComponent() {
  const { loading, error, value } = useAsync(() => {
    return new Promise<string>((resolve, reject) => {
      const success = false;
      setTimeout(() => {
        success ? resolve("Hi") : reject("Error");
      }, 2000);
    });
  });

  return (
    <div>
      <div >Loading: {loading.toString()}</div>
      <div>{error}</div>
      <div>{value}</div>
    </div>
  );
}
