import styles from "../styles/Stats.module.css";
import { homepage_en as en, homepage_es as es } from "../constants";
import { useRouter } from "next/router";

const Stats = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : es;
  return (
    <div className={`${styles.stats} align-items space-between`}>
      {t.stats.map((item, index) => (
        <div key={index} className={styles.content}>
          <h4 className={styles.value}>{item.value}</h4>
          <p className={styles.title}>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
