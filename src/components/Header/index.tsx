import { Link } from "react-router-dom";
import style from "./style.module.css";
import { useEffect, useState } from "react";
import TopMenu from "../topMenu/TopMenu";
import useDeviseType from "../../hooks/useDeviceType";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { setZakaz } from "../../store/action-creators/customer";
import { useDispatch } from "react-redux";

import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

const Header = () => {
  gsap.registerPlugin(ScrollToPlugin);

  const { caseZakaz } = useTypeSelector((state) => state.customer);
  const dispatch: any = useDispatch();
  const [isModal, setModal] = useState(false);

  useEffect(() => {
    dispatch(setZakaz(caseZakaz));
  }, [caseZakaz]);

  const handleClick = () => {
    if (isModal) {
      setModal(false);
      document.body.style.overflow = "visible";
    } else {
      setModal(true);

      document.body.style.overflow = "hidden";
    }
  };
  const windowSize = useDeviseType();
  const scrollTo = (target: any) => {
    gsap.to(window, { duration: 1, scrollTo: target });
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
                <li className={style.menuBlock}>
                  <a href="#" id="menu" onClick={handleClick}>
                    Menu
                  </a>
                </li>
              ) : (
                <div className={style.flex}>
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
                    <a href="#" id="menu" onClick={handleClick}>
                      Корзина <img src="./src/assets/Vector (5).svg" alt="#" />
                      <div>{caseZakaz.length}</div>
                    </a>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
      <TopMenu isModal={isModal} onClick={() => setModal(false)} />
    </>
  );
};

export default Header;
