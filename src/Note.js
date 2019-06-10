import React from "react";

export default function Note(props) {
  return (
    <li>
      <div>{props.noteTitle}</div>
      <div>{props.noteText}</div>
    </li>
  );
}
