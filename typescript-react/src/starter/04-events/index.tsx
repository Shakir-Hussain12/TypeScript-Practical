import { useState } from "react";

function Component() {

  const [text, setText] = useState('');
  const [email, setEmail] = useState('');

  //if we're to use function outside of the element itself
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value);
    setEmail(e.target.value);
  }

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
        <button
          type="submit"
          className="btn btn-block"
          onClick={(e) => {
            e.preventDefault();
            console.log({ text, email });
          }}
        >
          Submit
        </button>
      </form>
    </section>
  );
}
export default Component;
