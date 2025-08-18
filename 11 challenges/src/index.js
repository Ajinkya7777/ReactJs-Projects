import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList html="Html & Css" color="yellow" />
        <SkillList html="Javascript" color="red" />
        <SkillList html="Java & Spring-Boot" color="purple" />
        <SkillList html="MySQL" color="maroon" />
        <SkillList html="React JS" color="cyan" />
        <SkillList html="DevOps" color="orange" />
      </div>
    </div>
  );
}
function Avatar() {
  return (
    <div>
      <img
        className="avatar"
        src="https://wallpaperaccess.com/full/1109805.jpg"
        alt=""
      />
    </div>
  );
}

function Intro() {
  return (
    <header className="intro">
      <h1>Ajinkya Shinde</h1>
      <p>
        Full-Stack Java Developer and I love to read books. When not coding or
        reading, I like to play Soccer, or also like to cook (and eat),or to
        just enjoy the European Soccer.
      </p>
    </header>
  );
}

function SkillList(props) {
  return (
    <div>
      <ul className="skill-list">
        {/* <button>HTML & CSS</button>
      <button>Javascript</button>
      <button>Web Design</button>
      <button>Java & Spring-Boot</button>
      <button>MySQL</button>
      <button>React JS</button> */}
        <li className="skill" style={{ backgroundColor: props.color }}>
          {props.html}
        </li>
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
