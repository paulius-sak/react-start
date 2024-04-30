import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.main}>
      <img src="https://www.aboutmusictheory.com/wp-content/uploads/2012/04/composing-music-verse-pop-song.jpg" />
      <h4>Song Title Here.</h4>
      <p>Description...</p>
    </div>
  );
};

export default Card;