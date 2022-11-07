import Image from "next/image";
import styles from "../styles/Services.module.css";
import { homepage_en as en, homepage_es as es } from "../constants";
import { useRouter } from "next/router";
import Title from "./Title";

export function Services() {
  const { locale } = useRouter();
  const t = locale === "en" ? en : es;
  return (
    <div className={`${styles.services} container`}>
      <Title
        number="1"
        title={t.services.title}
        subtitle_services={t.services.subtitle}
        description={t.services.description}
      />

      <div className={`${styles.service_item}`}>
        {t.services.services.map((item, index) => (
          <span key={index} className={styles.card}>
            <Image
              src={item.ico}
              width={64}
              height={64}
              quality={30}
              alt={item.service}
            />
            <h2>{item.service}</h2>
          </span>
        ))}
      </div>
    </div>
  );
}
