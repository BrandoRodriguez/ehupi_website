import styles from "../styles/Title.module.css";
const Title = ({ number, title, subtitle_services, description }) => {
  return (
    <>
      <div className="flex justify-content relative">
        <span className={styles.number}>{number}</span>
      </div>
      <h2 className={styles.title_services}>
        <span className={styles.color}>{title}</span>
      </h2>
      <h3 className={styles.subtitle_services}>{subtitle_services}</h3>
      <p className={styles.description}>{description}</p>
    </>
  );
};

export default Title;
