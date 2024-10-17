import "./App.css";
import Counter from "./Counter";
import Users from "./User";

function App() {
  const hendelar = () => {
    alert("dos kmon aco re");
  };
  const heandelar2 = () => {
    alert("hello wold");
  };
  const addtonumber = (num) => {
    alert(num + 4);
  };
  return (
    <>
      <h1>Event Hendelar</h1>
      <Users></Users>
      <Counter></Counter>
      <button onClick={hendelar}>Clik me</button>
      <button onClick={heandelar2}>Click me 2</button>
      <button onClick={() => addtonumber(3)}>click me3</button>
    </>
  );
}

export default App;
