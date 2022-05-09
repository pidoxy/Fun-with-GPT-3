import { createContext, useEffect } from "react";

const AppContext = createContext();
AppContext.displayName = "AppContext";

export const AppContextProvider = ({ children }) => {

    useEffect(() => {
        localStorage.setItem("prompts", JSON.stringify({}));
      }, []);
      
      const getPrompts = () => {
        return localStorage.getItem("prompts");
      };
      
      const setPrompts = (prompts) => {
          return localStorage.setItem("prompts", JSON.stringify(prompts));
        };
      
      useEffect(() => {
        getPrompts();
      }, []);

  return (
    <AppContext.Provider value={{ getPrompts, setPrompts }}>{children}</AppContext.Provider>
  );
};
