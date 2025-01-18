import styles from "./error.module.css";
export default function ErrorComponent() {
  return (
    <>
      <div className={styles.error}>
        <h1>An Error Has Occurred...</h1>
      </div>
    </>
  );
}
