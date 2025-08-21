import { PropsWithChildren } from "react";

// first method
function FirstComponent({ name, id }: { name: string, id?: number }): JSX.Element {
  return (
    <>
      <h2>Name: {name}</h2>
      <h2>ID : {id ? id : 'N/A'}</h2>
    </>
  );
}


// second method
// type propType = { 
//   name: string,
//   id?: number,
//   children?: React.ReactNode;
// }

// another children prop method
type propType = PropsWithChildren<{
  name: string;
  id?: number;
}>

const SecondComponent = (props: propType): JSX.Element => {
  return (
    <>
      <h2>Name: {props.name}</h2>
      <h2>ID : {props.id ? props.id : 'N/A'}</h2>
      {props.children}
    </>
  )
}

export {FirstComponent, SecondComponent};