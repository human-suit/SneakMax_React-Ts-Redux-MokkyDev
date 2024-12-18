import { useEffect, useState } from "react";
import style from "./style.module.css";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { setZakaz, delADD } from "../../store/action-creators/customer";
import { useDispatch } from "react-redux";
const Recipes = () => {
  const dispatch: any = useDispatch();

  const [beanData, serBeanData] = useState<any>(null);
  const [beanSneakers, serSneakers] = useState<any[]>([]);
  const [allPrice, setPrice] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [numberTel, setnumberTel] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { caseZakaz, sneakersMain } = useTypeSelector(
    (state) => state.customer
  );

  const NumberZapaz = Date.now();
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

  const zakazClick = () => {
    if (numberTel == "" || name == "" || email == "") {
      setError("Допущена ошибка!");
    } else if (caseZakaz.length == 0) {
      setError("Добавте в заказ итемы!");
    } else {
      setError("");
      setName("");
      setnumberTel("");
      setEmail("");
      dispatch(setZakaz([]));
      serBeanData(null);
      alert("Заказ оформлен");
    }
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setnumberTel(e.target.value);
  };
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const deleteClick = (id: any) => {
    dispatch(delADD(id));
  };

  return (
    <div>
      <div className={style.container}>
        <div className={style.main}>
          <div className={style.flex}>
            <h2>Оформление заказа</h2>
            <p className={style.bottom}>Заказ № {Date.now()}</p>
          </div>
          <div className={style.center}>
            <div>
              <p>
                товара в заказе:{" "}
                <span>{beanData == null ? 0 : beanData.length} шт</span>
              </p>
              <p>
                Общая сумма заказа: <span>{allPrice} р</span>
              </p>
            </div>
            <h3>Состав заказа -</h3>
            {beanSneakers.length != 0 ? (
              beanSneakers?.map((use: any, index: number) => (
                <div key={index} className={style.dis}>
                  <div className={style.flex}>
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
              <div className={style.flex}>
                <p>У вас еще нет заказов!</p>
              </div>
            )}

            <input
              onChange={handleChangeName}
              value={name}
              type="text"
              placeholder="Ваше имя"
            />
            <input
              onChange={handleChangeNumber}
              value={numberTel}
              type="number"
              placeholder="Номер телефона"
              name="#"
              id="#"
            />
            <input
              onChange={handleChangeEmail}
              value={email}
              type="email"
              placeholder="E-mail"
              name="#"
              id="#"
            />
            <h3>{error}</h3>
            <button onClick={zakazClick}>Оформить заказ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
