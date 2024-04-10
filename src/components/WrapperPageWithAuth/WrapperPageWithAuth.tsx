import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const withAuth = (WrappedComponent: () => React.JSX.Element) => {
  return (props: any) => {
    const Router = useRouter();

    // Проверка аутентификации пользователя
    const isAuth = localStorage.tokens; // Пример проверки аутентификации

    useEffect(() => {
      if (!isAuth) {
        Router.replace("/signin"); // Перенаправление на страницу входа, если пользователь не аутентифицирован
      }
    }, [isAuth, Router]);

    return isAuth ? <WrappedComponent {...props}/> : null; // Рендер компонента, если пользователь аутентифицирован
  };
};

export default withAuth;
