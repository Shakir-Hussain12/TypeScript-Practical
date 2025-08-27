import { useState } from "react";

function Component() {
  const [text, setText] = useState("");
  
  const updateValues = (): void => {
    setText("State Updated");
    console.log(text);
  }

  return (
    <div>
      <h2>State</h2>
      <button className="btn btn-center" onClick={updateValues}>Add State</button>
    </div>
  );
}
export default Component;
