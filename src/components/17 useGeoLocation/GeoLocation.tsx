import useGeolocation from "./useGeoLocation";



export default function GeolocationComponent() {
  const {
    loading,
    error,
    data,
  } = useGeolocation();
  console.log(data)
  const {latitude,longitude} = data || {};

  return (
    <>
      <div>Loading: {loading.toString()}</div>
      <div>Error: {error?.message}</div>
      <div>
        {latitude} x {longitude}
      </div>
    </>
  );
}
