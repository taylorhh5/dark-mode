// it can be used just like useState, but it will persist data to localStorage
import { useState } from 'react';

 const useLocalStorage = (key, initialValue) => {
  // define some state --> will receive an initial value to set up our localStorage property
  const [storedValue, setStoredValue] = useState(()=>{
  const item = window.localStorage.getItem(key);
  return item ? JSON.parse (item) : initialValue;
});

  // define a setter function that set's a value to localStorage when called, also set our state property to the new value
  const setValue = value => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  };

  return [storedValue, setValue];
};

export default useLocalStorage;