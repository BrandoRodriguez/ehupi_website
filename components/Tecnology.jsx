import Image from "next/image";
import styles from "../styles/Tecnology.module.css";
import { homepage_en as en, homepage_es as es } from "../constants";
import { useRouter } from "next/router";

export function TecnologyItem({ image }) {
  return (
    <div className="flex align-items justify-content">
      <Image src={image} quality={30} alt="tecnology" />
    </div>
  );
}

export function Tecnology() {
  const { locale } = useRouter();
  const t = locale === "en" ? en : es;
  return (
    <div className="container">
      <h2 className={styles.title}>{t.technologies.title}</h2>
      <div className={`${styles.tecnology} container`}>
        {t.technologies.content.map((item, index) => (
          <TecnologyItem key={index} image={item.ico} />
        ))}
      </div>
    </div>
  );
}
