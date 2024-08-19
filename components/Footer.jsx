import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>AV0CAD0 CREATIVES.</h1>
        <h1 className={styles.linkTitle}>
          <Link href="/contact" className={styles.link} passHref>
            <span className={styles.linkText}>WORK WITH US</span>
            <Image 
              src="/img/link.png" 
              width="40" 
              height="40" 
              alt="" 
            />
          </Link>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          12 ADAM STREET NY <br /> USA
        </div>
        <div className={styles.cardItem}>
          CONTACT@FJ.DEV <br /> 123 4332 12345
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          FOLLOW US:
          <br /> _FB _IN _BE _X
        </div>
        <div className={styles.cardItem}>
          @ 2024 FJ INTERACTIVE,
          <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
