import { Link } from "react-router-dom";
import style from "./style.module.css";
import { useState } from "react";
import TopMenu from "../topMenu/TopMenu";
import useDeviseType from "../../hooks/useDeviceType";
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

const Footer = () => {
  gsap.registerPlugin(ScrollToPlugin);

  const [isModal, setModal] = useState(false);
  const handleClick = () => {
    setModal(true);
  };
  const windowSize = useDeviseType();

  const scrollTo = (target: any) => {
    gsap.to(window, { duration: 1, scrollTo: target });
  };
  const links = () => {
    return (
      <>
        <li>
          <a onClick={() => scrollTo("#Katalog")} href="#">
            Каталог
          </a>
        </li>
        <li>
          <a onClick={() => scrollTo("#Section3")} href="#">
            О нас
          </a>
        </li>
        <li>
          <a onClick={() => scrollTo("#Section4")} href="#">
            Подбор товара
          </a>
        </li>
        <li>
          <a onClick={() => scrollTo("#Section5")} href="#">
            Наша команда
          </a>
        </li>
        <li>
          <a onClick={() => scrollTo("#Section6")} href="#">
            Доставка и оплата
          </a>
        </li>
        <li>
          <a onClick={() => scrollTo("#Section7")} href="#">
            Контакты
          </a>
        </li>
        <li>
          <Link to={`/box`}>Корзина</Link>
        </li>
      </>
    );
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.flexBox}>
          <Link to={`/`}>
            <div className={style.logo}>
              <img src="./src/assets/logo(1).svg" alt="#" />
            </div>
          </Link>
          <div>
            <ul>
              {windowSize < 801 ? (
                <a href="#" id="menu" onClick={handleClick}>
                  Menu
                </a>
              ) : (
                links()
              )}
            </ul>
          </div>
        </div>
      </div>
      <TopMenu isModal={isModal} onClick={() => setModal(false)} />
    </>
  );
};

export default Footer;
