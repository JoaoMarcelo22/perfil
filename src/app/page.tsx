import styles from "./page.module.css";
import Imagem from "../assets/home.jpeg"
import Image from 'next/image'

const Home =()=> {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <p>
          Hello
        </p>
        <Image
          width={250}
          src={Imagem}
          alt="olha eu aqui"
        />
      </div>
    </main>
  );
}
export default Home;
