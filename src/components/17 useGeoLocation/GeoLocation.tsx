import useGeolocation, { PositionError } from "./useGeolocation";

interface GeolocationData {
  latitude: number;
  longitude: number;
}

export default function GeolocationComponent() {
  const {
    loading,
    error,
    data: { latitude, longitude },
  } = useGeolocation();

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
