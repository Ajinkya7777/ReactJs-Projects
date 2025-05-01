import { useState } from "react";
import Form from "./Form";
import Items from "./Items";
const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: Date.now(),
    };
    setItems([...items, newItem]);
  };

  const removeItem = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };
  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </section>
  );
};

export default App;
