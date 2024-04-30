import styles from "./MainWrapper.module.css";
import Card from "../Card/Card";

const MainWrapper = () => {
  return (
    <div className={styles.main}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default MainWrapper;