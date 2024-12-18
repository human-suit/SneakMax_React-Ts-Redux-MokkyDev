import style from "./style.module.css";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import ItemQues from "../ItemQues";
import { useState } from "react";
const Section4 = () => {
  const { models } = useTypeSelector((state) => state.customer);
  const [numberPage, SetPage] = useState(1);

  const sizeMas = ["36", "36-38", "39-41", "42-44", "45 и больше"];

  const [text, setText] = useState("");
  const [size, setSize] = useState<any | never>([]);

  const [vid, setVid] = useState<any | never>([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const nextPage = () => {
    SetPage(numberPage + 1);
  };
  const sendMessage = () => {
    if (text == "" || name == "" || email == "") {
      alert("Есть ошибки!");
      SetPage(1);
    } else {
      setText("");
      setName("");
      setEmail("");
      setSize([]);
      SetPage(1);
      alert("Отправлено!");
    }
  };
  const refresh = () => {
    SetPage(1);
  };

  const handleChange = (e: any) => {
    const val: any | never = e.target.value;
    const check = e.target.checked;
    if (size.length == 0) {
      size.push(val);
    } else {
      for (let index = 0; index < size.length; index++) {
        const element = size[index];
        if (check == true) {
          if (val == element) {
            continue;
          } else {
            size.push(val);
            break;
          }
        } else {
          if (val == element) {
            size.splice(index, 1);
            break;
          }
        }
      }
    }

    setSize(size);
    console.log(val, check);
    console.log(size);
  };

  const pageOne = () => {
    return (
      <div className={style.backPink}>
        <div className={style.topHeader}>
          <h2>Мы подберем идеальную пару для вас</h2>
          <p>
            Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для
            вас моделями
          </p>
        </div>
        <div className={style.line}></div>
        <div className={style.bodySect}>
          <h3>Какой тип кроссовок рассматриваете?</h3>
          <div className={style.list}>
            {models.map((use, index) => (
              <div key={use.id} className={style.card}>
                <ItemQues name={use.name} value={index} />
              </div>
            ))}
          </div>
          <div className={style.line}></div>
          <div className={style.footerFlex}>
            <h4>{numberPage} из 3</h4>
            <button onClick={nextPage}>Следующий шаг</button>
          </div>
        </div>
      </div>
    );
  };
  const pageTwo = () => {
    return (
      <div className={style.backPink}>
        <div className={style.topHeader}>
          <h2>Мы подберем идеальную пару для вас</h2>
          <p>
            Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для
            вас моделями
          </p>
        </div>
        <div className={style.line}></div>
        <div className={style.bodySect}>
          <h3>Уточните какие-либо моменты</h3>
          <div className={style.list}>
            <input
              placeholder="Введите сообщение"
              type="text"
              onChange={handleChangeText}
              value={text}
            />
          </div>
          <div className={style.line}></div>
          <div className={style.footerFlex}>
            <h4>{numberPage} из 3</h4>
            <button onClick={nextPage}>Следующий шаг</button>
          </div>
        </div>
      </div>
    );
  };
  const pageThree = () => {
    return (
      <div className={style.backPink}>
        <div className={style.topHeader}>
          <h2>Мы подберем идеальную пару для вас</h2>
          <p>
            Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для
            вас моделями
          </p>
        </div>
        <div className={style.line}></div>
        <div className={style.bodySect}>
          <h3>Какой размер вам подойдет?</h3>
          <div className={style.lists}>
            {sizeMas.map((use, index) => (
              <div key={index} className={style.cards}>
                <input
                  type="checkbox"
                  onChange={(e) => handleChange(e)}
                  value={use}
                  name="#"
                  id="#"
                />
                <p>{use}</p>
              </div>
            ))}
          </div>
          <div className={style.image}>
            <img src="../src/assets/Rectangle 45.png" alt="#" />
          </div>
          <div className={style.line}></div>
          <div className={style.footerFlex}>
            <h4>{numberPage} из 3</h4>
            <button onClick={nextPage}>Следующий шаг</button>
          </div>
        </div>
      </div>
    );
  };
  const pageThird = () => {
    return (
      <div className={style.backPink}>
        <div className={style.topHeader}>
          <h2>Ваша подборка готова!</h2>
          <p>
            Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для
            вас моделями
          </p>
        </div>
        <div className={style.line}></div>
        <div className={style.bodySectLast}>
          <h3>Получить предложение</h3>
          <p>Получить подбрку подходящих для вас моделей на почту</p>
          <div className={style.gridList}>
            <input
              placeholder="Имя"
              onChange={handleChangeName}
              value={name}
              type="text"
            />
            <input
              placeholder="Почта"
              onChange={handleChangeEmail}
              value={email}
              type="email"
              name="#"
              id="#"
            />
          </div>
          <div className={style.footerFlex}>
            <button onClick={refresh}>Вернуться</button>
            <button onClick={sendMessage}>Получить</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={style.container} id="Section4">
        <div className={style.otp}></div>
        {numberPage == 1
          ? pageOne()
          : numberPage == 2
          ? pageTwo()
          : numberPage == 3
          ? pageThree()
          : pageThird()}
      </div>
    </>
  );
};

export default Section4;
