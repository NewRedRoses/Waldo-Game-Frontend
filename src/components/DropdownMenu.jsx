export default function DropdownMenu({ list, caption, urlToSendTo, position }) {
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
      <form action={urlToSendTo} method="POST">
        <ul>
          {list.map((item, index) => {
            return (
              <div key={index} className="dropdown-content">
                <input
                  type="radio"
                  name={caption}
                  id={item}
                  value={item}
                  required
                />
                <label htmlFor={item}>{item}</label>
              </div>
            );
          })}
        </ul>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
