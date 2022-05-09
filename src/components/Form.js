import { useState, useContext, useEffect } from "react";
import { AppContextProvider } from "../context/AppContext";
const Form = () => {
    const {getPrompts, setPrompts} = useContext(AppContextProvider);

    const [prompt, setPrompt] = useState("");

    useEffect(() => {
        setPrompts(getPrompts());
    }, [prompt])
    
  return (
    <form className="flex justify-center px-5">
      <div className="my-3 w-full md:w-1/2 space-y-5">
        <label
          htmlFor="prompt"
          className="form-label inline-block mb-2 dark:text-slate-100 text-gray-700"
        >
          Enter Prompt
        </label>
        <textarea
          className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none
      "
          id="prompt"
          name="prompt"
          rows="7"
          placeholder="Your message"
        ></textarea>
        <input type={"submit"} onClick={(e) => setPrompt(e.target.value)} value={"submit"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
      </div>
    </form>
  );
};
export default Form;
