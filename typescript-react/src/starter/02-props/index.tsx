function Component({ name, id }: { name: string; id?: number }): JSX.Element {
  return (
    <>
      <h2>Name: {name}</h2>
      <h2>ID : {id ? id : 'N/A'}</h2>
    </>
  );
}
export default Component;
 