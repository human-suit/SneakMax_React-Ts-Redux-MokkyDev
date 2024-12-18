import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SneakerType } from "../../types/types";
import style from "./style.module.css";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { setZakaz } from "../../store/action-creators/customer";
import { useDispatch } from "react-redux";
const SneakerPage = () => {
  const params = useParams();
  const dispatch: any = useDispatch();
  // console.log(params);
  // const [stateStar, setStars] = useState(0);
  const [stateSize, setSize] = useState(0);
  const [beanData, serBeanData] = useState<SneakerType | null>(null);
  const { caseZakaz } = useTypeSelector((state) => state.customer);
  // const stylesObj = {
  //   backgroundColor: beanData?.backgroundColor,
  // };
  useEffect(() => {
    const getData = async () => {
      try {
        const req = await fetch(
          `https://1742eb39e7f44ae8.mokky.dev/sneakers/${params.id}`
        );
        const data = await req.json();
        // console.log(data);
        serBeanData(data);
      } catch (error) {
        console.log("Error->", error);
      }
    };
    getData();
  }, []);

  const sizePrime = (size: number) => {
    setSize(size);
    console.log(size);
  };

  const zakazClick = () => {
    if (stateSize == 0) {
      alert("Выберите размер!");
    } else {
      caseZakaz.push({
        id: Date.now(),
        numberId: params.id,
        size: stateSize,
      });
      dispatch(setZakaz(caseZakaz));
      console.log(caseZakaz);
      alert("Заказ добавлен в корзину!");
    }
  };

  return (
    <div>
      {beanData && (
        <div className={style.back}>
          <div className={style.grid}>
            <img src={beanData.imgUrl} alt="#" />
            <div className={style.grid1}>
              <h3>Описание</h3>
              <p>{beanData.description}</p>
            </div>
          </div>
          <div className={style.back_white}>
            <div className={style.flex}>
              <p>Артикуль: {beanData.vendorСode}</p>
              <p className={style.left}>В наличии: {beanData.inStock}</p>
            </div>
            <h2>{beanData.title}</h2>
            <div>
              <div>
                <img src="../src/assets/Star 5.svg" alt="#" />
              </div>
              <p>Выберите размер</p>
              <div className={style.flex}>
                {beanData.sizes.map((use, index: number) => (
                  <button
                    key={index}
                    className={style.item}
                    onClick={() => sizePrime(use)}
                  >
                    {use}
                  </button>
                ))}
              </div>
            </div>

            <div className={style.flex}>
              <h3>{beanData.price}</h3>
              <h4>-</h4>
              <h4>{beanData.oldPrice} </h4>
            </div>

            <button onClick={zakazClick}>Заказать</button>
            <div className={style.grid}>
              <h3>Характеристики</h3>
              <p>Пол: {beanData.gender}</p>
              <p>Цвета: {beanData.color}</p>
              <p>Состав: {beanData.compound}</p>
              <p>Страна: {beanData.country}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SneakerPage;
