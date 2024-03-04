// "use client";

import React, { createContext, useEffect, useState } from "react";
import { ChildrenType } from "../../../types.types";


const LoadingContext = createContext<boolean>(false);
function LoadingProvider({ children }: ChildrenType) {
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
