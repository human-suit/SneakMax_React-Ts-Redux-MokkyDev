import style from "./style.module.css";
import { useState } from "react";

const Section6 = () => {
  const [quest, setQueast] = useState("");
  const [quest2, setQueast2] = useState("");
  const handleClick = () => {
    // let elements = document.querySelectorAll(".leftright");
    // let element: HTMLElement | null = document.querySelector(".leftright");
    // for (let elem of elements) {
    //   console.log(elem.innerHTML); // "тест", "пройден"
    // }
    let element: HTMLElement | null = document.getElementById("leftright");
    let element2: HTMLElement | null = document.getElementById("rightleft");
    element!.classList.add(style.Rotateleftright);
    element2!.classList.add(style.Rotaterightleft);
    // element!.classList.add(style.close_btn);
    if (quest != "") {
      setQueast("");
      let element: HTMLElement | null = document.getElementById("leftright");
      let element2: HTMLElement | null = document.getElementById("rightleft");
      element!.classList.remove(style.Rotateleftright);
      element2!.classList.remove(style.Rotaterightleft);
    } else {
      let element: HTMLElement | null = document.getElementById("leftright");
      let element2: HTMLElement | null = document.getElementById("rightleft");
      element!.classList.add(style.Rotateleftright);
      element2!.classList.add(style.Rotaterightleft);
      setQueast(
        "А этот ответ1!: в комплексе функционируют 6 детских садов с плащадками, воспитателями и всякими другими людьми"
      );
    }
  };
  const handleClick2 = () => {
    if (quest2 != "") {
      setQueast2("");
      let element: HTMLElement | null = document.getElementById("leftright2");
      let element2: HTMLElement | null = document.getElementById("rightleft2");
      element!.classList.remove(style.Rotateleftright);
      element2!.classList.remove(style.Rotaterightleft);
    } else {
      let element: HTMLElement | null = document.getElementById("leftright2");
      let element2: HTMLElement | null = document.getElementById("rightleft2");
      element!.classList.add(style.Rotateleftright);
      element2!.classList.add(style.Rotaterightleft);
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
                  <h3>Вопрос 1</h3>{" "}
                  <button onClick={handleClick}>
                    <div className={style.cl_btn_2}>
                      <div id="but1">
                        <div id="leftright" className={style.leftright}></div>
                        <div id="rightleft" className={style.rightleft}></div>
                        {/* <span className={style.close_btn}>закрыть</span> */}
                      </div>
                    </div>
                  </button>
                </div>
                <div>
                  <p>{quest}</p>
                </div>
                <div className={style.line}></div>
              </div>
              <div>
                <div className={style.flex}>
                  <h3>Вопрос 2</h3>{" "}
                  <button onClick={handleClick2}>
                    <div className={style.cl_btn_2}>
                      <div id="but1">
                        <div id="leftright2" className={style.leftright}></div>
                        <div id="rightleft2" className={style.rightleft}></div>
                        {/* <span className={style.close_btn}>закрыть</span> */}
                      </div>
                    </div>
                  </button>
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
