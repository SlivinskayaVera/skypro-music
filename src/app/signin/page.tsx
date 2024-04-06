"use client";

import Link from "next/link";
import styles from "./SignInPage.module.css";
import WrapperModal from "@/components/WrapperModal/WrapperModal";
import { FormInput } from "@/components/FormInput/FormInput";
import { BtnEnter } from "@/components/BtnEnter/BtnEnter";
import { useState } from "react";
import { getTokens, signIn } from "../api/userApi";
import { RegistrationUserType } from "../../../types.types";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setAuthState, setLoginData } from "@/store/features/authSlice";

export type ErrorType = {
  detail: string;
  email: string[];
  password: string[];
};

export default function SignInPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [userData, setUserData] = useState<RegistrationUserType>({
    email: "",
    password: "",
    userName: "",
  });

  const [errorText, setError] = useState<ErrorType>({
    email: [],
    detail: "",
    password: [],
  });

  function handelLoginBtnClick() {
    setError({ detail: "", email: [], password: [] });
    signIn({ email: userData.email, password: userData.password })
      .then((resData) => {
        dispatch(setLoginData(resData));
      })
      .then(() =>
        getTokens({ email: userData.email, password: userData.password })
      )
      .then((res) => {
        dispatch(setAuthState(res));
        router.replace("/");
      })
      .catch((error) => {
        setError(JSON.parse(error.message));
      });
  }

  return (
    <>
      <WrapperModal>
        <p className={styles.textError}>
          {errorText.email ? errorText.email[0] : ""}
        </p>
        <p className={styles.textError}>
          {errorText.detail ? errorText.detail : ""}
        </p>

        <FormInput
          value={userData.email}
          onChange={(e) => {
            setUserData({ ...userData, email: e.target.value });
          }}
          type="text"
          name="login"
          placeholder="Почта"
        />
        <p className={styles.textError}>
          {errorText.password ? errorText.password[0] : ""}
        </p>

        <FormInput
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
          value={userData.password}
          type="password"
          name="password"
          placeholder="Пароль"
        />
        <BtnEnter onClick={handelLoginBtnClick} title="Войти" />
        <button className={styles.btnSignUp}>
          <Link href="/signup">Зарегистрироваться</Link>
        </button>
      </WrapperModal>
    </>
  );
}
