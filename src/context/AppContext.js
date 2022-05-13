import { createContext, useEffect } from "react";

const AppContext = createContext();
AppContext.displayName = "AppContext";

export const AppContextProvider = ({ children }) => {

    useEffect(() => {
        localStorage.setItem("prompts", JSON.stringify([]));
      }, []);
      
      const getPrompts = () => {
        return localStorage.getItem("prompts");
      };
      
      const savePrompts = (prompts) => {
          return localStorage.setItem("prompts", JSON.stringify(prompts));
        };

  return (
    <AppContext.Provider value={{ getPrompts, savePrompts }}>{children}</AppContext.Provider>
  );
};
