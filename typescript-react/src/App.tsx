import { FirstComponent, SecondComponent } from "./starter/02-props";

function App() {
  return (
    <main>
      <FirstComponent name="Shakir" id={1} />
      <SecondComponent name="John">
        <p>This is the children prop</p>
      </SecondComponent>
    </main>
  );
}

export default App;
