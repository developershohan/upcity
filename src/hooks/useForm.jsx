import { useState } from "react";

const useForm = (initialState) => {

    // set initial state
  const [input, setInput] = useState(initialState);

  // input on change

  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //form reset
  const resetForm = () => {
    setInput(initialState);
  };

  return { input, handleInputChange, resetForm };
};

export default useForm;
