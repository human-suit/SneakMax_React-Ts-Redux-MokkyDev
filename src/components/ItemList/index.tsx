import { Link } from "react-router-dom";
import style from "./style.module.css";

const ItemList = ({ index, name, value, price }: any) => {
  return (
    <>
      <div className={style.container}>
        <div className={style.block}>
          <Link to={`/sneaker/${index}`}>
            <img src={value} alt="#" />
          </Link>
          <h2>{name}</h2>
          <h3>{price} р</h3>
        </div>
      </div>
    </>
  );
};

export default ItemList;
