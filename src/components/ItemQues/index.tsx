import style from "./style.module.css";

const ItemQues = ({ name, value }: any) => {
  return (
    <>
      <div className={style.container}>
        <div className={style.block}>
          <div className={style.prop}></div>
          <div className={style.flex}>
            <input
              type="checkbox"
              className={style.customCheckbox}
              value={value}
              name="#"
              id="#"
            />
            <h3>{name}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemQues;
