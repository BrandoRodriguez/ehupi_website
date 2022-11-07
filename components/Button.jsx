import styles from "../styles/Button.module.css";
const Button = ({ link = "Get", url }) => {
  return (
    <div className={styles.button}>
      <a href={url}>{link}</a>
    </div>
  );
};

export default Button;
