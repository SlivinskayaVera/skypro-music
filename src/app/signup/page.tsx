"use client";

import WrapperModal from "@/components/WrapperModal/WrapperModal";
import { FormInput } from "@/components/FormInput/FormInput";
import { BtnEnter } from "@/components/BtnEnter/BtnEnter";
import { useState } from "react";
import { signUp } from "../api/userApi";
import { RegistrationUserType } from "../../../types.types";
import styles from "../signin/SignInPage.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

export type ErrorType = {
  username: string[];
  email: string[];
  password: string[];
};

export default function SignUpPage() {
  const [errorText, setError] = useState<ErrorType>({
    username: [],
    email: [],
    password: [],
  });

  const [userData, setUserData] = useState<RegistrationUserType>({
    email: "",
    password: "",
    userName: "",
  });

  const router = useRouter();
  function handleRegistrationBtnClick() {
    setError({ username: [], email: [], password: [] });
    signUp({
      email: userData.email,
      password: userData.password,
      userName: userData.userName,
    })
      .then(() => router.replace("/signin"))
      .catch((error) => {
        setError(JSON.parse(error.message));
      });
  }

  return (
    <WrapperModal>
      <p className={styles.textError}>
        {errorText.email ? errorText.email[0] : ""}
      </p>
      <FormInput
        type="text"
        name="login"
        placeholder="Почта"
        value={userData.email}
        onChange={(e) => {
          setUserData({ ...userData, email: e.target.value });
        }}
      />
      <p className={styles.textError}>
        {errorText.password ? errorText.password[0] : ""}
      </p>

      <FormInput
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
        value={userData.password}
        type="password"
        name="password"
        placeholder="Пароль"
      />
      <p className={styles.textError}>
        {errorText.username ? errorText.username : ""}
      </p>

      <FormInput
        onChange={(e) => setUserData({ ...userData, userName: e.target.value })}
        value={userData.userName}
        type="username"
        name="username"
        placeholder="Котик, как ты себя назовешь?"
      />
      <BtnEnter
        onClick={handleRegistrationBtnClick}
        title="Зарегистрироваться"
      />
      <button className={styles.btnSignUp}>
        <Link href="/signin">Вернуться</Link>
      </button>
    </WrapperModal>
  );
}
