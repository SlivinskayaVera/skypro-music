// "use client";

import React, { createContext, useEffect, useState } from "react";

type PropsType = { children: JSX.Element };

const LoadingContext = createContext<boolean>(false);
function LoadingProvider({ children }: PropsType) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const timerLoading = setTimeout(() => {
      setIsLoading(true);
    }, 2000);
    return () => {
      clearTimeout(timerLoading);
    };
  }, []);

  return (
    <LoadingContext.Provider value={true}>
      {children}
    </LoadingContext.Provider>
  );
}

export { LoadingContext, LoadingProvider };
