function Component() {

  const rand = Math.random();
  
  if (rand < 0.33) {
    return 'starter1';
  }
  
  if (rand < 0.66) {
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
