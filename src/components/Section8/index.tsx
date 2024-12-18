import style from "./style.module.css";
import { useState } from "react";

import { messageADD } from "../../store/action-creators/customer";
const Section8 = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [errors, setError] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };
  const handleClick = () => {
    if (name.length < 3) {
      setError("Имя должно привышать 3 символа!");
    } else if (number.length < 11) {
      setError("Номер должен состоять из 11 чисел!");
    } else {
      let userMes = {
        id: Date.now(),
        name: name,
        number: number,
      };
      messageADD(userMes);
      setName("");
      setNumber("");
      setError("Сообщение отправлено! Менеджер скоро с вами свяжеться ");
    }
    setTimeout(() => {
      setError("");
    }, 3000);
  };

  // const { error, loading, sneakersMain } = useTypeSelector(
  //   (state) => state.customer
  // );

  return (
    <>
      <div className={style.blockX}></div>
      <div className={style.container}>
        <div className={style.blockSect5}>
          <div className={style.leftBlock}>
            <div className={style.grid}>
              <h2>Есть вопросы?</h2>
              <p>
                Заполните форму и наш <br />
                менеджер свяжеться с вами
              </p>
              <input
                onChange={handleChange}
                value={name}
                type="text"
                placeholder="Ваше имя"
              />
              <input
                onChange={handleChangeNumber}
                value={number}
                type="number"
                name="#"
                id="#"
                placeholder="Номер телефона"
              />
              <div className={style.red}>
                <p>{errors}</p>
              </div>
              <button onClick={handleClick}>Отправить</button>
            </div>
          </div>
          <div className={style.rightBlock}>
            <h3>Instagram</h3>
            <div className={style.flexImg}>
              <div className={style.gridImg}>
                <img src="./src/assets/Rectangle 37.jpg" alt="#" />
                <img src="./src/assets/Rectangle 40.jpg" alt="#" />
              </div>
              <div className={style.center}>
                <img src="./src/assets/Rectangle 38.jpg" alt="#" />
              </div>
              <div className={style.gridImg}>
                <img src="./src/assets/Rectangle 41.jpg" alt="#" />
                <img src="./src/assets/Rectangle 37.jpg" alt="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section8;
