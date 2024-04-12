import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const withAuth = (WrappedComponent: () => React.JSX.Element) => {
  return () => {
    const Router = useRouter();

    const isAuth = localStorage.tokens;

    useEffect(() => {
      if (!isAuth) {
        Router.replace("/signin");
      }
    }, [isAuth, Router]);

    return isAuth ? <WrappedComponent /> : null;
  };
};

export default withAuth;
