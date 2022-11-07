import styles from "../styles/Brands.module.css";
import Image from "next/image";
import { homepage_en as en, homepage_es as es } from "../constants";
import { useRouter } from "next/router";

const Brands = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : es;
  return (
    <div className="container">
      <h2 className={styles.title}>{t.brands.title}</h2>
      <div className={`${styles.brands} container`}>
        {t.brands.brands.map((item, index) => (
          <Image key={index} src={item} />
        ))}
      </div>
    </div>
  );
};

export default Brands;
