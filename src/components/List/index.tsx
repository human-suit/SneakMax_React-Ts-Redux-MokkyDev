import style from "./style.module.css";
import ItemList from "../ItemList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { useState } from "react";
import { customADD, setADD } from "../../store/action-creators/customer";

import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

const List = () => {
  const dispatch: any = useDispatch();
  const [page, setPage] = useState(8);

  const mas = ["36", "37", "38", "39", "40", "41", "42"];
  const [size, setSize] = useState(0);

  const [masFilter, setFilter] = useState<any>([]);

  const [statePol, setStatePol] = useState<any>(null);
  const { error, loading, sneakersMain } = useTypeSelector(
    (state) => state.customer
  );
  useEffect(() => {
    dispatch(customADD());
    console.log(sneakersMain);
  }, []);

  const changeChange = (e: any) => {
    setStatePol(e.target.value);
    console.log(statePol);
  };

  const changeClick = () => {
    if (page > 15) {
      setPage(8);
    } else {
      setPage(page + 9);
    }
  };

  const [value, setValue] = useState(0);
  const changeChangeValue = (e: any) => {
    setValue(Math.round(e));
    console.log(e);
  };

  const Slider = () => (
    <Nouislider
      range={{ min: 0, max: 35000 }}
      start={Math.round(value)}
      connect
      onChange={(e) => changeChangeValue(e)}
    />
  );

  const changeSize = (sizeVal: any) => {
    setSize(sizeVal);
    console.log(sizeVal);
  };
  const handleClick = () => {
    if (statePol == null || value <= 1) {
      alert("Не выбраны параметры!");
    } else {
      const getData = async () => {
        setFilter([]);
        try {
          const req = await fetch(
            `https://1742eb39e7f44ae8.mokky.dev/sneakers?sizes=*${size}*&gender=*${statePol}*`
          );
          const data = await req.json();
          for (let index = 0; index < data.length; index++) {
            const element: any = data[index];
            if (element.price < value) {
              masFilter.push(element);
            }
          }
          setFilter(masFilter);
          // console.log(data);
          console.log(masFilter);
        } catch (error) {
          console.log("Error->", error);
        }
      };
      getData();
    }
  };
  const handleBreak = () => {
    setFilter([]);
    setSize(0);
    setStatePol(null);
    setValue(0);
  };
  return (
    <>
      <div className={style.container}>
        <h2 id="Katalog">Каталог</h2>
        <div className={style.flex}>
          <div className={style.leftBord}>
            <div className={style.podbor}>
              <h4>
                Подбор <br /> по параметрам
              </h4>
              <p>Цена руб</p>
              {Slider()}
              {value}
              <div className={style.pol}>
                <label htmlFor="#">Пол</label>
                <div>
                  <input
                    type="checkbox"
                    onChange={(e) => changeChange(e)}
                    value={"Мужской"}
                  />
                  мужской
                  <input
                    type="checkbox"
                    onChange={(e) => changeChange(e)}
                    value={"Женский"}
                  />
                  женский
                </div>
              </div>
              <div className={style.size}>
                <h4>Размер</h4>
                <div className={style.flexSize}>
                  {mas.map((use, index) => (
                    <button onClick={() => changeSize(use)} key={index}>
                      {use}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <button onClick={handleClick} className="">
                  Применить
                </button>
                <button onClick={handleBreak} className={style.but}>
                  Сбросить
                </button>
              </div>
            </div>
            <div></div>
          </div>
          <div className={style.gridBord}>
            <div>
              {masFilter.length == 0 ? (
                <div className={style.rightBord}>
                  {sneakersMain.map((use, index: number) =>
                    index > page ? (
                      ""
                    ) : (
                      <div key={use.id} className={style.card}>
                        <ItemList
                          index={use.id}
                          name={use.title}
                          value={use.imgUrl}
                          price={use.price}
                        />
                      </div>
                    )
                  )}
                </div>
              ) : (
                <div className={style.rightBord}>
                  {masFilter.map((use: any, index: number) =>
                    index > page ? (
                      ""
                    ) : (
                      <div key={use.id} className={style.card}>
                        <ItemList
                          index={use.id}
                          name={use.title}
                          value={use.imgUrl}
                          price={use.price}
                        />
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
            <div>
              <button onClick={changeClick}>Показать еще</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
