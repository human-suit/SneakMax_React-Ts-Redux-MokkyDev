import style from "./style.module.css";
import ItemPerson from "../ItemPerson";
import { useEffect, useState } from "react";
import { TeamType } from "../../types/types";

const Section5 = () => {
  const [beanData, serBeanData] = useState<TeamType | null>(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const req = await fetch(`https://1742eb39e7f44ae8.mokky.dev/team`);
        const data = await req.json();
        console.log(data);
        serBeanData(data);
      } catch (error) {
        console.log("Error->", error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className={style.blockX}></div>
      <div className={style.container} id="Section5">
        <div className={style.blockSect5}>
          <div className={style.crug}></div>
          <div className={style.leftBlock}>
            <h2>Наша команда</h2>
            <div className={style.flexCom}>
              {beanData != null
                ? beanData!.map((use) => (
                    <div key={use.id} className={style.card}>
                      <ItemPerson
                        name={use.name}
                        value={use.imgUrl}
                        prof={use.role}
                      />
                    </div>
                  ))
                : "loading..."}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
