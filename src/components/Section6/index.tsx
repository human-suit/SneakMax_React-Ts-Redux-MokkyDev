import style from "./style.module.css";
import { useState } from "react";

const Section6 = () => {
  const [quest, setQueast] = useState("");
  const [quest2, setQueast2] = useState("");
  const handleClick = () => {
    if (quest != "") {
      setQueast("");
    } else {
      setQueast(
        "А этот ответ1!: в комплексе функционируют 6 детских садов с плащадками, воспитателями и всякими другими людьми"
      );
    }
  };
  const handleClick2 = () => {
    if (quest2 != "") {
      setQueast2("");
    } else {
      setQueast2(
        "А этот ответ2!: в комплексе функционируют 6 детских садов с плащадками, воспитателями и всякими другими людьми"
      );
    }
  };
  return (
    <>
      <div className={style.blockX}></div>
      <div className={style.container} id="Section6">
        <div className={style.blockSect5}>
          <div className={style.leftBlock}>
            <h2>Часто задаваемые вопросы</h2>
            <div className={style.gridQues}>
              <div className={style.line}></div>
              <div>
                <div className={style.flex}>
                  <h3>Вопрос 1</h3> <button onClick={handleClick}>X</button>
                </div>
                <div>
                  <p>{quest}</p>
                </div>
                <div className={style.line}></div>
              </div>
              <div>
                <div className={style.flex}>
                  <h3>Вопрос 2</h3> <button onClick={handleClick2}>X</button>
                </div>
                <div>
                  <p>{quest2}</p>
                </div>
                <div className={style.line}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section6;
