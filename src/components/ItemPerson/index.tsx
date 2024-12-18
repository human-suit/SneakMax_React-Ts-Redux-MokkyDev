import style from "./style.module.css";

const ItemPerson = ({ name, value, prof }: any) => {
  return (
    <>
      <div className={style.container}>
        <div className={style.block}>
          <div className={style.flex}>
            <img src={value} alt="#" />
            <h3>{name}</h3>
            <p>{prof}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemPerson;
