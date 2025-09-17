import { changeTheme, useTheme } from "./themeFunctions";

function Component() {
  const { Theme, setTheme } = useTheme();
  changeTheme(Theme);

  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Context API</h2>
      <button 
        onClick={() => {
          setTheme(Theme === 'Dark' ? 'Light' : 'Dark');
        }}
        style={{ 
          padding: '10px',
          cursor: 'pointer',
          position: 'fixed',
          top: '10px',
          right: '10px'
        }}      
      >Toggle Theme</button>
    </div>
  );
}
export default Component;
