import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) || initialValue;
  });

  const addProducts = (newProducts) => {
    if (!value.includes(newProducts)) {
      setValue([...value, newProducts]);
    }
  };

  const removeProducts = (removeId) => {
    setValue(value.filter((item) => item !== removeId));
  };

  const clearItems = () => {
    setValue([]);
  };
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  

  return [value, addProducts, removeProducts, clearItems];
};

export default useLocalStorage;
