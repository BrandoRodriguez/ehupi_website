import styles from "../styles/Footer.module.css";
import { logo } from "../assets";
import Image from "next/image";
import { facebook, instagram, twitter, linkedin } from "../assets";
import { footerLink_en as en, footerLink_es as es } from "../constants";
import { useRouter } from "next/router";

const Footer = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : es;
  return (
    <footer className="container">
      <div className={styles.wrapper}>
        <div className={styles.top_footer}>
          <div>
            <Image
              src={logo}
              alt="ehupi"
              width={116}
              height={30}
              quality={100}
            />
            <p className={styles.description}>
              Tech Lab for Startups & Companies.
            </p>
            <p className={styles.description}>
              Cnel. José J. Sanchez e/ Abdon Palacios y R.I 3 Corrales Zona km4
              - Ciudad del Este - Paraguay - Mercosur
            </p>
            <p className={styles.description}>
              Whatsapp
              <a href="https://api.whatsapp.com/send/?phone=595985856072&text&type=phone_number">
                +59 5985856072
              </a>
            </p>
          </div>
          <div>
            <h2>{t.company.title}</h2>
            <ul>
              {t.company.link.map((item, index) => (
                <li key={index}>
                  <a href={item.url}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>{t.technologies.title}</h2>
            <ul>
              {t.technologies.link.map((item, index) => (
                <li key={index}>{item.title}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>{t.Legal.title}</h2>
            <ul>
              {t.Legal.link.map((item, index) => (
                <li key={index}>{item.title}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.bottom_footer}>
          <div>
            <p>Copyright &copy; 2022 ehupi. All Rights Reserved.</p>
          </div>

          <div className={styles.social_container}>
            <a href="http://www.instagram.com/ehupicom">
              <Image src={instagram} alt="footerImg" width={20} height={20} />
            </a>
            <a href="http://www.facebook.com/ehupicom">
              <Image src={facebook} alt="footerImg" width={20} height={20} />
            </a>
            <a href="http://www.twitter.com/ehupicom">
              <Image src={twitter} alt="footerImg" width={20} height={20} />
            </a>
            <a href="http://www.linkedin.com/company/ehupi">
              <Image src={linkedin} alt="footerImg" width={20} height={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
