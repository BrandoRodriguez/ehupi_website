import styles from "../styles/Business.module.css";
import Image from "next/image";
import { homepage_en as en, homepage_es as es } from "../constants";
import { useRouter } from "next/router";
import Title from "./Title";
export function BusinessItem({ image, description }) {
  return (
    <div className={`${styles.businessitem} align-items space-between`}>
      <div className={styles.content}>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.image}>
        <Image src={image} quality={100} alt="about" />
      </div>
    </div>
  );
}

export function Business() {
  const { locale } = useRouter();
  const t = locale === "en" ? en : es;
  return (
    <div className={`${styles.business} container`}>
      <Title
        number="2"
        title={t.about_us.title}
        subtitle_services={t.about_us.subtitle}
        description={t.about_us.description}
      />
      <div className={styles.container_business}>
        {t.about_us.content.map((item, index) => (
          <BusinessItem
            key={index}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
