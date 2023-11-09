import style from "./Item.module.css";

const Item = ({ foodItems, bought, handleBuyButton }) => {
  return (
    <li className={`list-group-item ${style["kgSpan"]} ${bought && "active"}`}>
      <span className={style["kgSpan"]}>{foodItems}</span>
      <button className={style["kgButton"]} onClick={handleBuyButton}>
        Buy
      </button>
    </li>
  );
};

export default Item;
