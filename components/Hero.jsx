import styles from "../styles/Hero.module.css";
import Image from "next/image";
import { arrow } from "../assets";
import Stast from "./Stats";
import { homepage_en as en, homepage_es as es } from "../constants";
import { useRouter } from "next/router";

export default function Hero() {
  const { locale } = useRouter();
  const t = locale === "en" ? en : es;

  const title = t.hero.title;
  let e = title.split(" ");
  const subtitle = t.hero.subtitle;
  const description = t.hero.description;
  const link = t.hero.link;
  let l = link.split(" ");

  return (
    <div className={`${styles.container_hero} container`}>
      <div className={`${styles.hero}`}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            {e[0]} <span />
            {e[1]}
            <br />
            <span className={styles.color}>
              {e[2]} <span />
              {e[3]} <br /> {e[4]} <span />
              {e[5]}
            </span>
          </h1>
          <h2 className={styles.question}>{subtitle}</h2>
          <p className={styles.description}>{description}</p>
          <div className={styles.link}>
            <div className={styles.link_content}>
              <a href="#services" className={styles.link_a}>
                {l[0]}
                <Image src={arrow} width={22} height={21} alt="arrow" />
                <br />
                {l[1]}
              </a>
            </div>
          </div>
        </div>
        <div className={`${styles.pink_gradient}`}>
          {/* <Image src={hero} quality={100} width={567} height={620} priority /> */}
        </div>
      </div>
      <Stast />
    </div>
  );
}
