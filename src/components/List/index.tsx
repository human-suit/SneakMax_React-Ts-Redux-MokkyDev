import style from "./style.module.css";
import ItemList from "../ItemList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { useState } from "react";
import { customADD } from "../../store/action-creators/customer";
import useDeviseType from "../../hooks/useDeviceType";

import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

const List = () => {
  const dispatch: any = useDispatch();
  const [page, setPage] = useState(8);

  // const [isVib, setVib] = useState(false);

  const mas = ["36", "37", "38", "39", "40", "41", "42"];

  const [size, setSize] = useState<any>(0);

  const [masFilter, setFilter] = useState<any>([]);

  const [statePol, setStatePol] = useState<any>([]);
  const { error, loading, sneakersMain } = useTypeSelector(
    (state) => state.customer
  );
  useEffect(() => {
    dispatch(customADD());
    console.log(sneakersMain);
  }, []);

  const changeChange = (e: any) => {
    if (statePol.length == 0) {
      statePol.push(e.target.value);
      setStatePol(statePol);
    } else {
      for (let index = 0; index < statePol.length; index++) {
        if (statePol[index] == e.target.value) {
          statePol.splice(index, 1);
          setStatePol(statePol);
          break;
        } else if (index == statePol.length - 1) {
          statePol.push(e.target.value);
          setStatePol(statePol);
          break;
        }
      }
    }
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

  // const handleClickSvap = () => {
  //   let element: HTMLElement | null = document.getElementById("1");
  //   element!.classList.add(className);
  // };

  const Slider = () => (
    <Nouislider
      range={{ min: 0, max: 35000 }}
      start={Math.round(value)}
      connect
      onChange={(e) => changeChangeValue(e)}
    />
  );

  const changeSize = (sizeVal: any, index: any) => {
    if (size == 0) {
      let element: HTMLElement | null = document.getElementById(index);
      element!.classList.add(style.new);
      setSize(sizeVal);
    } else {
      let element: HTMLElement | null = document.getElementById(size);
      element!.classList.remove(style.new);
      setSize(sizeVal);
      console.log(sizeVal);
      element = document.getElementById(index);
      element!.classList.add(style.new);
    }
  };
  const handleClick = () => {
    if (size == 0) {
      alert("Выберите размер!");
    } else {
      const getData = async () => {
        setFilter([]);
        try {
          let req: any;
          if (statePol.length == 0) {
            req = await fetch(
              `https://1742eb39e7f44ae8.mokky.dev/sneakers?sizes=*${size}*`
            );
          } else {
            req = await fetch(
              `https://1742eb39e7f44ae8.mokky.dev/sneakers?sizes=*${size}*&gender=*${statePol}*`
            );
          }
          const data = await req.json();
          let mas = [];
          for (let index = 0; index < data.length; index++) {
            const element: any = data[index];
            if (value == 0) {
              mas.push(element);
            } else {
              if (element.price <= value) {
                mas.push(element);
              }
            }
          }
          setFilter(mas);
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
    if (size > 0) {
      let element: HTMLElement | null = document.getElementById(size);
      element!.classList.remove(style.new);
    }
    setFilter([]);
    setSize(0);
    setStatePol([]);
    setValue(0);
  };

  const windowSize = useDeviseType();

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
                  {windowSize < 801 ? "М" : "Мужской"}
                  <input
                    type="checkbox"
                    onChange={(e) => changeChange(e)}
                    value={"Женский"}
                  />
                  {windowSize < 801 ? "Ж" : "Женский"}
                </div>
              </div>
              <div className={style.size}>
                <h4>Размер</h4>
                <div className={style.flexSize}>
                  {mas.map((use, index) => (
                    <button
                      id={use}
                      className=""
                      onClick={() => changeSize(use, use)}
                      key={index}
                    >
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
