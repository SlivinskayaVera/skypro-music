import Link from "next/link";
import styles from "./BtnEnter.module.css";

export function BtnEnter({ title }: { title: string }) {
  return (
    <button className={styles.button}>
      <Link href="/">{title}</Link>
    </button>
  );
}
