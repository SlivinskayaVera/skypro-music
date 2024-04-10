import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const withAuth = (WrappedComponent: () => React.JSX.Element) => {
  return (props: any) => {
    const Router = useRouter();

    const isAuth = localStorage.tokens;

    useEffect(() => {
      if (!isAuth) {
        Router.replace("/signin");
      }
    }, [isAuth, Router]);

    return isAuth ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;
