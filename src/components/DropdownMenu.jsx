import axios from "axios";
import { useState } from "react";
export default function DropdownMenu({ list, caption, urlToSendTo, position }) {
  const [selection, setSelection] = useState("");

  function sendSelection() {
    axios
      .post(urlToSendTo, selection)
      .then((response) => console.log(response.data));
  }

  function onSelectionChange(e) {
    setSelection(e.target.value);
  }

  return (
    <div
      className="dropdown-container"
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {console.log(position)}
      <div className="dropdown-caption">{caption}</div>
      <ul>
        {list.map((item, index) => {
          return (
            <div key={index} className="dropdown-content">
              <input
                type="radio"
                name="selection"
                id={item}
                checked={selection == item}
                onChange={onSelectionChange}
                value={item}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          );
        })}
      </ul>
      <button onClick={sendSelection}>Submit</button>
    </div>
  );
}
