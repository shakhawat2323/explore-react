import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const buttonhendelar = () => {
    const newcount = count + 1;
    setCount(newcount);
  };
  const buttonmines = () => {
    const newcount = count - 1;
    if (newcount < 0) {
      alert("no mane");
    } else {
      setCount(newcount);
    }
  };
  return (
    <div>
      <h2>Counter:{count}</h2>
      <button onClick={buttonhendelar}>Add</button>
      <button onClick={buttonmines}>Reduce</button>
    </div>
  );
}
