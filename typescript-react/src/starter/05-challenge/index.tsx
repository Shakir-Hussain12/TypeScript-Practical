import { PropsWithChildren } from "react"

type prop1 = {
  type: 'basic',
  name: string,
}

type prop2 = {
  type: 'advanced',
  name: string,
  email: string
}

type propType = PropsWithChildren<prop1 | prop2>

function Component(props: propType) {
  if (props.type === 'basic') {
    return (
      <div className="alert alert-success">
        <h2>Name: {props.name}</h2>
        {props.children}
      </div>
    )
  }

  return (
    <div className="alert alert-danger">
      <h2>Name: {props.name}</h2>
      <h2>Email: {props.email}</h2>
      {props.children}
    </div>
  )
}

export default Component;

