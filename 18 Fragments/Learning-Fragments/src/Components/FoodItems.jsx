import Item from "./Item";
import { useState } from "react";

const FoodItems = ({ items }) => {
  const [activeItem, setActiveItem] = useState([]);

  console.log(items);

  let onBuyButton = (item) => {
    setActiveItem([...activeItem, item]);
  };

  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <Item
          key={index}
          foodItems={item}
          bought={activeItem.includes(item)}
          handleBuyButton={() => {
            onBuyButton(item);
          }}
        />
      ))}
    </ul>
  );
};

export default FoodItems;
