import FoodItems from "./FoodItems";

const Item = ({ foodItems }) => {
  return <li className="list-group-item">{foodItems}</li>;
};

export default Item;
