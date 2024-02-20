import Image from "next/image";
import Link from "next/link";
import styles from "./SignInPage.module.css"

export default function SignInPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container_enter}>
        <div className={styles.modal__block}>
          <form className={styles.modal__form_login} action="#">
            <Link href="/">
              <div className={styles.modal__logo}>
                <Image src="/logo_modal.png" alt="logo" width={140} height={21}/>
              </div>
            </Link>
            <input
              className={`${styles.modal__input} ${styles.login}`}
              type="text"
              name="login"
              placeholder="Почта"
            />
            <input
              className={`${styles.modal__input} ${styles.password}`}
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <button className={styles.modal__btn_enter}>
              <Link href="/">Войти</Link>
            </button>
            <button className={styles.modal__btn_signup}>
              <Link href="/signup">Зарегистрироваться</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
