import { useEffect } from "react";

const Responses = () => {

    const getPrompts = () => {
        return localStorage.getItem("prompts");
    };
    
  useEffect (() => {
    let prompts = getPrompts() || [];
    console.log(prompts)
  });

  const response = [
    {
      id: 1,
      prompt: "Hello, how are you?",
      response: "I'm fine, thanks for asking!",
    },
    {
      id: 2,
      prompt: "What's your name?",
      response: "My name is Flowbite.",
    },
    {
      id: 3,
      prompt: "What's your favorite color?",
      response: "My favorite color is blue.",
    },
  ];
  return (
    <div className="flex flex-col px-5">
      <div className="flex justify-center">
        <h2 className=" text-2xl font-semibold dark:text-slate-300 text-gray-900 sm:text-3xl sm:truncate">
          Responses
        </h2>
      </div>
      {response.map((response, index) => {
        return (
          <div key={index} className="flex justify-center">
            <div className="bg-slate-200 w-full md:w-1/2 my-3 rounded px-5 py-5">
              <div className="response">
                <div className="response-text">
                  <p>
                    <span className="font-semibold">Prompt:</span>{" "}
                    {response.prompt}
                  </p>
                </div>
                <div className="response-image">
                  <p>
                    <span className="font-semibold">Response:</span>{" "}
                    {response.response}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Responses;
