import { useState } from "react";

function Component() {
  const [text, setText] = useState("");
  const [num, setNum] = useState(0);

  const updateValues = (): void => {
    setText(() => {
      const newState = 'State Updated';
      console.log(newState);
      return newState;
    })

    setNum((prev) => {
      const newState = prev + 1;
      console.log(newState);
      return newState;
    })

  }

  return (
    <div>
      <h2>State</h2>
      <button className="btn btn-center" onClick={updateValues}>Add State</button>
    </div>
  );
}
export default Component;
