import { logo } from "../assets";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { navLinks_en as en, navLinks_es as es } from "../constants";
import { useRouter } from "next/router";
import { useState } from "react";

const Navbar = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : es;
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <header className="relative flex justify-content">
      <nav
        className={`${styles.navbar} container flex align-items space-between`}
      >
        <Image src={logo} alt="ehupi" width={116} height={30} quality={100} />
        <ul className={`${styles.nav} ${menu ? styles.isActive : ""}`}>
          {t.link.map((item, index) => (
            <li key={index}>
              <a href={item.url} className={styles.title}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <span className={styles.link}>
          <a href={t.button.url}>{t.button.name}</a>
        </span>
        <div className={styles.humbarger} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
