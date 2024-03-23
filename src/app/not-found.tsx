import Link from "next/link";
import styles from "./not-found.module.css";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.modalBlock}>
          <h1 className={styles.header}>404</h1>
          <p className={styles.description}>Страница не найдена</p>
          <div className={styles.containerText}>
            <p className={styles.text}>
              Возможно, она была удалена <br /> или перенесена на другой адрес
            </p>
            <Image
              src="/img/icon/crying.svg"
              className={styles.playerBtnPrevSvg}
              alt=""
              width={52}
              height={52}
              priority={true}
            />
          </div>
          <button className={styles.buttonGoBack}>
            <Link href="/">Вернуться на главную</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
