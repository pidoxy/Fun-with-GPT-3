import { AppContextProvider } from "./context/AppContext";
import { ThemeContextProvider } from "./context/ThemeContext";
import Form from "./components/Form";
import Header from "./components/Header";
import Responses from "./components/Responses";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <AppContextProvider>
          <div className="flex dark:bg-gray-800 bg-white flex-col min-h-screen">
            <Header />
            <Form />
            <Responses />
          </div>
        </AppContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
