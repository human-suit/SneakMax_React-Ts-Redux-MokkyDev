import { Link } from "react-router-dom";
import style from "./style.module.css";
import { setZakaz } from "../../store/action-creators/customer";

import { useDispatch } from "react-redux";
import { useTypeSelector } from "../../hooks/useTypeSelector";

const ItemList = ({ index, name, value, price }: any) => {
  const dispatch: any = useDispatch();
  const { caseZakaz } = useTypeSelector((state) => state.customer);
  const zakazClick = () => {
    caseZakaz.push({
      id: Date.now(),
      numberId: index,
      size: "37",
    });
    dispatch(setZakaz(caseZakaz));
    console.log(caseZakaz);
    alert("Заказ добавлен в корзину!");
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.block}>
          <Link to={`/sneaker/${index}`}>
            <img src={value} alt="#" />
          </Link>
          <h2>{name}</h2>
          <h3>{price} р</h3>
          <div className={style.flex}>
            <Link to={`/sneaker/${index}`}>Просмотреть</Link>
            <button onClick={zakazClick}>Добавить</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemList;
