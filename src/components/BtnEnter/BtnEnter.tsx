import Link from "next/link";
import styles from "./BtnEnter.module.css";

export function BtnEnter({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick} className={styles.button}>
      {title}
    </button>
  );
}
