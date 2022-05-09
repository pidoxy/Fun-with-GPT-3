import { AppContextProvider } from "./context/AppContext";
import { ThemeContextProvider } from "./context/ThemeContext";
import Form from "./components/Form";
import Header from "./components/Header";
import Responses from "./components/Responses";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  localStorage.setItem("prompts", JSON.stringify([]));
  return (
    <>
      <ErrorBoundary>
        <ThemeContextProvider>
          <AppContextProvider>
            <div className="flex dark:bg-gray-800 bg-white flex-col min-h-screen">
              <Header />
              <Form />
              <Responses />
            </div>
          </AppContextProvider>
        </ThemeContextProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
