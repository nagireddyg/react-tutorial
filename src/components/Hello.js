import React from 'react'

const Hello = (props) => {
  return (
    <div>
      <h1>Hello, {props.firstName} {props.lastName}</h1>
      {props.children}
    </div>
  )
}
Hello.defaultProps = {
  firstName: "Nagi",
  lastName: "Readdy"
}
export default Hello