import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Cookie from "js-cookie";

const withAuth = (WrappedComponent: () => React.JSX.Element) => {
  const Component = (props: any) => {
    const Router = useRouter();
    const isAuth = Cookie.get("tokens");

    useEffect(() => {
      if (!isAuth) {
        Router.replace("/signin");
      }
    }, [isAuth, Router]);
    return isAuth ? <WrappedComponent {...props} /> : null;
  };
  return Component;
};

export default withAuth;
