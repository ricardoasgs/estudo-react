import React from "react";

const childrenWithProps = (children, props) =>
  React.Children.map(props.children, child =>
    React.cloneElement(child, { ...props })
  );

export default props => (
  <div>
    <h1>Família</h1>
    {childrenWithProps(React.Children, { ...props })}
  </div>
);
