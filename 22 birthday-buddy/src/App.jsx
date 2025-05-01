import { useState } from "react";
import data from "./data.js";

const App = () => {
  const [people, setPeople] = useState(data);
  const [birthdayCount, setBirthdayCount] = useState(data.length);
  const clearHandler = () => {
    setPeople([]);
    birthDayCountHandler();
  };

  const birthDayCountHandler = () => {
    setBirthdayCount(people.length);
    console.log(people.length);
  };
  {
    return (
      <div>
        <h1>{people.length}</h1>
        {people.map((person) => {
          return (
            <ul key={person.id}>
              <img src={person.img} className="img" alt={person.name} />
              <h5>{person.name}</h5>
              <h6>{person.age}</h6>
            </ul>
          );
        })}
        <button className="btn" onClick={clearHandler}>
          clear
        </button>
      </div>
    );
  }
};
export default App;
