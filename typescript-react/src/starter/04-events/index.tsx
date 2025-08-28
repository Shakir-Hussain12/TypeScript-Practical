import React, { useState } from "react";

function Component() {

  const [text, setText] = useState('');
  const [email, setEmail] = useState('');

  //if we're to use function outside of the element itself
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ text, email });
    /*
      if you're not using controlled inputs, you would need to access the values from the event object directly
      const formData = new FormData(e.currentTarget) || new FormData(e.target as HTMLFormElement);
      
      // Accessing as an object
      const data = Object.fromEntries(formData);
      console.log(data);

      // Accessing individual form fields
      const name = formData.get('name') as string; //non-null assertion
      const email = formData.get('email') as string;
    */
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value);
    setEmail(e.target.value);
  }

  return (
    <section>
      <h2>Controlled Form</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input 
          type="text"
          className="form-input mb-1" 
          value={text} 
          placeholder="Enter Text" 
          onChange={(e) => setText(e.target.value)}
          required
          />
        <input type="email" 
          className="form-input mb-1" 
          value={email} 
          placeholder="Please Enter Email" 
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="btn btn-block"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
export default Component;
