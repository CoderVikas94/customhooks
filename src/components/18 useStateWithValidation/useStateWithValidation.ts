import { useState, useCallback } from "react";

interface ValidationFunction<T> {
  (value: T): boolean;
}

export default function useStateWithValidation<T>(
  validationFunc: ValidationFunction<T>,
  initialValue: T
): [T, (nextState: T | ((prevState: T) => T)) => void, boolean] {
  const [state, setState] = useState<T>(initialValue);
  const [isValid, setIsValid] = useState<boolean>(() => validationFunc(state));

  const onChange = useCallback(
    (nextState: T | ((prevState: T) => T)) => {
      const value =
        typeof nextState === "function" ? (nextState as (prevState: T) => T)(state) : nextState;
      setState(value);
      setIsValid(validationFunc(value));
    },
    [state, validationFunc]
  );

  return [state, onChange, isValid];
}
