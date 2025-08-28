import { useState } from "react";

function Component() {

  const [text, setText] = useState('');
  const [email, setEmail] = useState('');

  return (
    <section>
      <h2>Controlled Form</h2>
      <form className="form">
        <input 
          type="text"
          className="form-input mb-1" 
          value={text} 
          placeholder="Enter Text" 
          onChange={(e) => setText(e.target.value)}
          />
        <input type="email" 
          className="form-input mb-1" 
          value={email} 
          placeholder="Please Enter Email" 
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
    </section>
  );
}
export default Component;
