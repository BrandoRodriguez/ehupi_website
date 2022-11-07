import Title from "./Title";
import styles from "../styles/Team.module.css";
import Image from "next/image";
import { twitter, linkedin } from "../assets";
import { homepage_en as en, homepage_es as es } from "../constants";
import { useRouter } from "next/router";

export const Teamitem = ({ name, skill, image, twitter_url, linkedin_url }) => {
  return (
    <div className={styles.teamitem}>
      <div className={`${styles.content} `}>
        <span className={styles.image}>
          <Image src={image} quality={100} alt="team" />
        </span>
        <h2 className={styles.name}>{name}</h2>
        <h3 className={styles.skill}>{skill}</h3>
        <div className={styles.icon}>
          <a href={twitter_url}>
            <Image src={twitter} alt="twitter" />
          </a>
          <a href={linkedin_url}>
            <Image src={linkedin} alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : es;
  return (
    <div className={`${styles.container_team} container`}>
      <Title
        number="3"
        title={t.team.title}
        subtitle_services={t.team.subtitle}
        description={t.team.description}
      />
      <div className={styles.team}>
        {t.team.content.map((item, index) => (
          <Teamitem
            key={index}
            name={item.name}
            skill={item.skill}
            image={item.image}
            linkedin_url={item.linkedin}
            twitter_url="#home"
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
