import { useState, useEffect } from "react";

interface GeolocationOptions {
  enableHighAccuracy?: boolean;
  timeout?: number;
  maximumAge?: number;
}

interface PositionError {
  code: number;
  message: string;
  PERMISSION_DENIED: number;
  POSITION_UNAVAILABLE: number;
  TIMEOUT: number;
}

export default function useGeolocation(options: GeolocationOptions) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<PositionError | null>(null);
  const [data, setData] = useState<GeolocationCoordinates | null>(null);

  useEffect(() => {
    const successHandler = (e: GeolocationPosition) => {
      setLoading(false);
      setError(null);
      setData(e.coords);
    };
    const errorHandler = (e: PositionError) => {
      setError(e);
      setLoading(false);
    };

    const id = navigator.geolocation.watchPosition(
      successHandler,
      errorHandler,
      options
    );

    return () => navigator.geolocation.clearWatch(id);
  }, [options]);

  return { loading, error, data };
}
