import { Link } from "react-router-dom";
import style from "./style.module.css";
import List from "../../components/List";
import Section3 from "../../components/Section3";
import Section4 from "../../components/Section4";
import Section5 from "../../components/Section5";
import Section6 from "../../components/Section6";
import Section7 from "../../components/Section7";
import Section8 from "../../components/Section8";

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.main}>
        <div className={style.top_pad}>
          <h1>Кроссовки известных брендов с доставкой по России и СНГ</h1>
          <p>
            Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebook. Converse и
            могие другие по низким ценам
          </p>
          <Link to={"/box"}>Перейти к покупкам</Link>
        </div>
      </div>
      <div className={style.text}>
        <img src="./src/assets/back-текст.svg" alt="#" />
      </div>
      <List />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
    </div>
  );
};

export default Home;
