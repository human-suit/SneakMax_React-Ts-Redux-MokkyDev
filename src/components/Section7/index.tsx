import style from "./style.module.css";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import useDeviseType from "../../hooks/useDeviceType";

const Section7 = () => {
  const windowSize = useDeviseType();

  return (
    <>
      <div className={style.blockX}></div>
      <div className={style.container} id="Section7">
        <div className={style.blockSect5}>
          <div className={style.leftBlock}>
            <h2>Контакты</h2>
            <p></p>
            <div className={style.grey}>
              <p>Главный офис</p>
              <h3>+7 800 789 89 89</h3>
              <h4>г. Санкт-Петербург. Консомольская 43 к1</h4>
            </div>
            <div className={style.grey}>
              <p>Отдел продаж</p>
              <h3>+7 800 789 89 89</h3>
              <h4>г. Санкт-Петербург. Консомольская 43 к1</h4>
            </div>
            <div className={style.flex}>
              <div className={style.green}>
                <img src="./src/assets/Shape.svg" alt="#" />
              </div>
              <div className={style.green}>
                <img src="./src/assets/Shape (1).svg" alt="#" />
              </div>
            </div>
          </div>
          <div className={style.rightBlock}>
            <YMaps>
              <Map
                height={windowSize < 801 ? 200 : 450}
                width={windowSize < 801 ? 300 : 600}
                defaultState={{ center: [59.937234, 30.308474], zoom: 9 }}
              >
                <Placemark defaultGeometry={[59.937234, 30.308474]} />
              </Map>
            </YMaps>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section7;
