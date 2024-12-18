import style from "./style.module.css";

const Section3 = () => {
  return (
    <>
      <div className={style.container} id="Section3">
        <div className={style.block}>
          <div className={style.crug1}>
            <div className={style.crugRed}></div>
          </div>
          <div className={style.crug}></div>
          <div className={style.leftBlock}>
            <h2>Пара слов о нас</h2>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A esse
              temporibus, maiores rem quaerat ipsum dolorem eum rerum quidem
              sint officiis. Quibusdam corporis deleniti illo vero facilis
              rerum. Ipsum, quod. Velit distinctio voluptatum nulla tenetur
              nesciunt est,{" "}
            </h3>
            <div className={style.rightWord}>
              <div className={style.palka}></div>
              <p>SneakMax</p>
            </div>
          </div>
          <div className={style.rightBlock}>
            <div className={style.blockP}></div>
            <img
              src="../src/assets/pexels-budgeron-bach-5158825 2.jpg"
              alt=""
            />
          </div>
          <div className={style.blockX}></div>
        </div>
      </div>
    </>
  );
};

export default Section3;
