import { useReducer, useEffect } from "react";

export default (key, initialValue, reducer) => {
  // Make piece of state, based off of value in localStorage or initial value
  const [state, setState] = useReducer(reducer, initialValue, () => {
    let value;

    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || String(initialValue)
      );
    } catch {
      value = initialValue;
    }

    return value;
  });

  // Update localStorage when state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
