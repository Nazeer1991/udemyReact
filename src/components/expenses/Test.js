import React from "react";

const Test = (props) => {
  props.props.map((prop) => {
    return (
      <>
        <h1>{prop.id}</h1>
      </>
    );
  });

  return <div>testing my code!!!</div>;
};

export default Test;
