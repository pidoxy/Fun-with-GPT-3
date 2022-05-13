import { useEffect, useState } from "react";

const Form = () => {
  const [prompt, setPrompt] = useState("");
  const [prompts, setPrompts] = useState([]);

  const handlePrompt = (e) => {
    e.preventDefault();

    // Capitalize first letter of each word in the prompt
    const capitalizeTheFirstLetterOfEachWord = (words) => {
      let separateWord = words.toLowerCase().split(" ");
      for (let i = 0; i < separateWord.length; i++) {
        separateWord[i] =
          separateWord[i].charAt(0).toUpperCase() +
          separateWord[i].substring(1);
      }
      return separateWord.join(" ");
    };
    let newPrompt = capitalizeTheFirstLetterOfEachWord(prompt);

    // Check if prompt ends with question mark
    if (newPrompt.endsWith("?")) {
      // If it does, add a period to the end
      return newPrompt;
    } else {
      // If it doesn't, add a question mark to the end
      newPrompt = newPrompt + "?";
      setPrompts([...prompts, { newPrompt }]);
    }
    setPrompts([...prompts, prompt], () => {
      console.log(prompts);
    });
    console.log(newPrompt);
    console.log(prompts);
    localStorage.setItem("prompts", JSON.stringify(prompts));
  };

  return (
    <form
      onSubmit={(e) => handlePrompt(e)}
      className="flex justify-center px-5"
    >
      <div className="my-3 w-full md:w-1/2 space-y-5">
        <label
          htmlFor="prompt"
          className="form-label inline-block mb-2 dark:text-slate-100 text-gray-700"
        >
          Enter Prompt
        </label>
        <textarea
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
          id="prompt"
          name="Prompt"
          rows="7"
          placeholder="Your message"
          value={prompt}
          aria-required="true"
          aria-label="prompt"
          onChange={(e) => setPrompt(e.target.value)}
        ></textarea>
        <input
          type={"submit"}
          value={"submit"}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        />
      </div>
    </form>
  );
};
export default Form;
