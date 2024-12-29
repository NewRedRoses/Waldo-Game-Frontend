import axios from "axios";
import { useState } from "react";
export default function DropdownMenu({ list, caption, urlToSendTo, position }) {
  const [selection, setSelection] = useState("");

  function sendSelection() {
    axios
      .post(urlToSendTo, { selection, position })
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
        {list.map((item) => {
          return (
            <div key={item.id} className="dropdown-content">
              <input
                type="radio"
                name="selection"
                id={item.name}
                checked={selection == item.name}
                onChange={onSelectionChange}
                value={item.name}
              />
              <label htmlFor={item.name}>{item.name}</label>
            </div>
          );
        })}
      </ul>
      <button onClick={sendSelection}>Submit</button>
    </div>
  );
}
