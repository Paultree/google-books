import { useState, createContext } from "react";

export const InputValueContext = createContext();


const InputValueProvider = ({children}) => {

    const [inputValue, setInputValue] = useState("");

    const [btnClicked, setBtnClicked] = useState(false);

    const handleChange = (event) => {
        console.log(event.target.value);
      setInputValue(event.target.value);
    };

    const handleSearch = () => {
      setBtnClicked(true);
    };

    console.log(inputValue);

    const data = {inputValue, btnClicked, handleChange, handleSearch}

    return (
      <InputValueContext.Provider value={data}>
        {children}
      </InputValueContext.Provider>
    );
}

export default InputValueProvider
