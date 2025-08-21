function Component(): JSX.Element | null {

  const rand = Math.random();
  
  if (rand < 0.5) {
    return null;
  }

  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Return Type</h2>
    </div>
  );
}
export default Component;
