import styles from "../styles/Action.module.css";
import Button from "./Button";
import { homepage_en as en, homepage_es as es } from "../constants";
import { useRouter } from "next/router";

const Action = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : es;
  return (
    <div className="container">
      <div className={`${styles.action} align-items space-between`}>
        <div>
          <h1 className={styles.title}>{t.Action.title}</h1>{" "}
          <p className={styles.description}>{t.Action.description}</p>
        </div>
        <Button link={t.Action.link} url={t.Action.url} />
      </div>
    </div>
  );
};

export default Action;
