import { useTheme } from "./context";

function Component() {
  const currTheme = useTheme();
  console.log(currTheme);
  
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Context API</h2>
    </div>
  );
}
export default Component;
