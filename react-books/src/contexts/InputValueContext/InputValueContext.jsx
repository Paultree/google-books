import { createContext, useState } from "react";

export const InputValueContext = createContext();

const InputValueProvider = ({children}) => {

    const [inputValue, setInputValue] = useState('');

    const [btnClicked, setBtnClicked] = useState('');

    const data = { inputValue};
    
    const handleChange = (event) => {
      setInputValue(event.target.value);
    };

    const handleSearch = (event) => {
      event.preventDefault();
      console.log("old value", inputValue);
      setBtnClicked(true);
    };

    return (
        <InputValueContext.Provider value={data}>
            {children}
            </InputValueContext.Provider>
    )

}