import React from "react";

function Form({ title, ...props }) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default Form;
