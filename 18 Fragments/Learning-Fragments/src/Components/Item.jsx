import style from "./Item.module.css";
import FoodItems from "./FoodItems";

const Item = ({ foodItems }) => {
  const itemBought = (event) => {
    console.log(event);
    console.log(`${foodItems} is being bought`);
  };

  return (
    <li className={`list-group-item`}>
      <span className={style["kgSpan"]}>{foodItems}</span>
      <button
        className={style["kgButton"]}
        onClick={(event) => itemBought(event)}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
