import styles from "./Header.module.css"

const Header = () => {
  return (
    <header>
        <div className={styles.top}>
          <div className={styles.topLeft}>Alejandra Cruz</div>
          <div className={styles.topMiddle}>
            <ul>
              <li>About</li>
              <li>Gallery</li>
              <li>Music</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className={styles.topRight}>
            <a href="/">fb</a>
            <a href="/">insta</a>
            <a href="/">soundcloud</a>
          </div>
        </div>
        <div className={styles.middle}>
          <div className={styles.middleLeft}>
            <img src="https://images.squarespace-cdn.com/content/v1/5cd1a3f41e2d220001ef6179/1561905828635-3CRN97H1RK1TZVDFNU6G/image-asset.jpeg" alt="A.C." />
          </div>
          <div className={styles.middleRight}>
            <h1>Alejandra Cruz is singer and songwriter from Barcelona, Spain</h1>
            <p>Her new album is available now.</p>
            <button className={styles.button}>Listen now</button>
          </div>
        </div>
      </header>
  )
}

export default Header