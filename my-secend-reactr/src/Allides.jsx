import "./Allides.css";
export default function Allides({ allides }) {
  const { name, email } = allides;
  return (
    <div className="box">
      <h2>Name : {name}</h2>
      <h4>Email :{email} </h4>
    </div>
  );
}
