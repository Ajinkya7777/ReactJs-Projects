import React from "react";
import SingleColor from "./SingleColor";
const ColorList = ({ colors }) => {
  return (
    <section className="colors">
      {colors.map((color, index) => {
        return <SingleColor color={color} key={index} index={index} />;
      })}
    </section>
  );
};

export default ColorList;
