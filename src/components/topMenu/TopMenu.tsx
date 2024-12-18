import { FC, useEffect, useState } from "react";
import style from "./style.module.css";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { delADD } from "../../store/action-creators/customer";
import { useDispatch } from "react-redux";

type Props = {
  isModal: Boolean;
  onClick: () => void;
};
const TopMenu: FC<Props> = ({ isModal, onClick }) => {
  if (!isModal) {
    return null;
  }

  const dispatch: any = useDispatch();

  const NumberZapaz = Date.now();
  const [beanData, serBeanData] = useState<any>(null);

  const [allPrice, setPrice] = useState<number>(0);
  const [beanSneakers, serSneakers] = useState<any[]>([]);
  const { caseZakaz, sneakersMain } = useTypeSelector(
    (state) => state.customer
  );
  useEffect(() => {
    const getData = async () => {
      serBeanData(caseZakaz);
    };
    const getSneakers = async () => {
      const array: { id: any; img: any; name: any; price: any; size: any }[] =
        [];
      let price = 0;
      beanData?.map((use: any) =>
        sneakersMain.map((state: any) => {
          if (use.numberId == state.id) {
            array.push({
              id: use.id,
              img: state.imgUrl,
              name: state.title,
              price: state.price,
              size: use.size,
            });
            price += state.price;
          }
        })
      );
      serSneakers(array);
      setPrice(price);
    };
    getData();
    getSneakers();
  }, [NumberZapaz]);

  const deleteClick = (id: any) => {
    dispatch(delADD(id));
  };

  const modalRoot = document.getElementById("menu") as HTMLElement;

  return createPortal(
    <div className={style.popupBox}>
      <div className={style.box}>
        <span className={style.closeIcon} onClick={onClick}></span>
        <div className={style.body}>
          <div className={style.block}>
            {beanSneakers.length != 0 ? (
              beanSneakers?.map((use: any, index: number) => (
                <div key={index} className={style.Blockdis}>
                  <div className={style.dis}>
                    <img src={use.img} alt="#" />
                    <div className={style.grid}>
                      <h4>{use.name}</h4>
                      <p>{use.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteClick(use.id)}
                    className={style.delet}
                  >
                    Удалить
                  </button>
                </div>
              ))
            ) : (
              <div className={style.zakaz}>
                <p>У вас еще нет заказов!</p>
              </div>
            )}
          </div>
          <div className={style.flexS}>
            <div className={style.Item}>
              <h4>Итого:</h4>
              <h3>{allPrice}</h3>
            </div>

            <Link onClick={onClick} to={`/box`}>
              Перейти в корзину
            </Link>
          </div>
        </div>
      </div>
    </div>,
    //где распологать
    modalRoot
  );
};

export default TopMenu;
