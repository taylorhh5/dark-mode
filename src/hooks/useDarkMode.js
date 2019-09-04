
import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage.js'

const useDarkMode =(key, intialValue) => {

const [darkMode, setDarkMode] = useLocalStorage (key, intialValue);
useEffect (()=> {
darkMode?
document.body.classList.add("dark-mode")
:
document.body.classList.remove("dark-mode");
}
 , [darkMode])
return [darkMode, setDarkMode]

}


export default useDarkMode;