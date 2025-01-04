import axios from "axios";
import { useState } from "react";
export default function DropdownMenu({ list, caption, urlToSendTo, position }) {
  const [pkIdSelected, setPkIdSelected] = useState("");

  function sendSelection() {
    axios
      .post(urlToSendTo, { pkIdSelected, position })
      .then((response) => console.log(response.data));
  }

  function onSelectionChange(e) {
    setPkIdSelected(e.target.value);
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
      {console.log(position, pkIdSelected)}
      <div className="dropdown-caption">{caption}</div>
      <ul>
        {list.map((item) => {
          return (
            <div key={item.id} className="dropdown-content">
              <input
                type="radio"
                name="pkIdSelected"
                id={item.id}
                checked={pkIdSelected == item.id}
                onChange={onSelectionChange}
                value={item.id}
              />
              <label htmlFor={item.id}>{item.name}</label>
            </div>
          );
        })}
      </ul>
      <button onClick={sendSelection}>Submit</button>
    </div>
  );
}
