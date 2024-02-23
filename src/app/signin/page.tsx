import Link from "next/link";
import styles from "./SignInPage.module.css";
import classNames from "classnames";
import WrapperModal from "@/components/Common/WrapperForModalSign/WrapperModal";

export default function SignInPage() {
  return (
    <WrapperModal>
      <input
        className={classNames(styles.modalInput, styles.login)}
        type="text"
        name="login"
        placeholder="Почта"
      />
      <input
        className={classNames(styles.modalInput, styles.password)}
        type="password"
        name="password"
        placeholder="Пароль"
      />
      <button className={styles.modalBtnEnter}>
        <Link href="/">Войти</Link>
      </button>
      <button className={styles.modalBtnSignup}>
        <Link href="/signup">Зарегистрироваться</Link>
      </button>
    </WrapperModal>
  );
}
