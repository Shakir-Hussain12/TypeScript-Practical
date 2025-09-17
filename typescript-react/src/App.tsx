import Component from "./starter/06-context";
import { ThemeProvider } from "./starter/06-context/context";

function App() {
  return (
    <main>
       <ThemeProvider>
        <Component />
       </ThemeProvider>
    </main>
  );
}

export default App;
