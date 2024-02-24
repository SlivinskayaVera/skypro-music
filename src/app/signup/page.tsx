import Link from "next/link";
import styles from "./SignUpPage.module.css";
import classNames from "classnames";
import WrapperModal from "@components/Common/WrapperModal/WrapperModal";

export default function SignUpPage() {
  return (
    <WrapperModal>
      <input
        className={classNames(styles.modalInput, styles.login)}
        type="text"
        name="login"
        placeholder="Почта"
      />
      <input
        className={styles.modalInput}
        type="password"
        name="password"
        placeholder="Пароль"
      />
      <input
        className={styles.modalInput}
        type="password"
        name="password"
        placeholder="Повторите пароль"
      />
      <button className={styles.modalBtnSignupEnt}>
        <Link href="/">Зарегистрироваться</Link>
      </button>
    </WrapperModal>
  );
}
