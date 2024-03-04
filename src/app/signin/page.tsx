import Link from "next/link";
import styles from "./SignInPage.module.css";
import WrapperModal from "@/components/WrapperModal/WrapperModal";
import { FormInput } from "@/components/FormInput/FormInput";
import { BtnEnter } from "@/components/BtnEnter/BtnEnter";

export default function SignInPage() {
  return (
    <WrapperModal>
      <FormInput
        type="text"
        name="login"
        placeholder="Почта"
      />
      <FormInput
        type="password"
        name="password"
        placeholder="Пароль"
      />
      <BtnEnter title="Войти"/>
      <button className={styles.modalBtnSignup}>
        <Link href="/signup">Зарегистрироваться</Link>
      </button>
    </WrapperModal>
  );
}
