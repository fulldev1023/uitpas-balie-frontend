"use client";

import { FC, PropsWithChildren, useCallback, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { addInterceptor, removeHeader, setHeaders } from "../dataAccess";
import { AuthContext } from "./AuthContext";
import { useFetchToken } from "./legacy/useFetchToken";
import { useSilexLogout } from "@/shared/lib/auth/legacy/useSilexLogout";

// const LS_KEY = "@uitpas-balie/token";

export const AuthProvider: FC<PropsWithChildren<{ loginPath: string }>> = ({
  children,
  loginPath,
}) => {
  const { push } = useRouter();
  const asPath = usePathname();
  const [authTokenLoaded, setAuthTokenLoaded] = useState(false);
  const { fetchToken, removeToken } = useFetchToken();
  const logoutFromSilex = useSilexLogout();

  const isCurrentPathPrivate = !asPath.startsWith(loginPath);

  const login = useCallback((token: string) => {
    // Init Axios
    setHeaders({ Authorization: `Bearer ${token}` });
    // Store token, so we're still logged in after refresh
    // localStorage.setItem(LS_KEY, token);
    // Let the app know we're ready to render
    setAuthTokenLoaded(true);
  }, []);

  const logout = useCallback(() => {
    logoutFromSilex().finally(() => {
      // Reset Axios
      removeHeader("Authorization");
      // Remove from local storage
      // localStorage.removeItem(LS_KEY);
      // Auth token is not available
      setAuthTokenLoaded(false);
      removeToken();
    });
  }, []);

  const initAuth = useCallback(
    (token: string, redirectTo?: string) => {
      login(token);
      // Redirect to a specific path if necessary
      if (redirectTo) {
        push(redirectTo);
      }
    },
    [login, push]
  );

  useEffect(() => {
    // Add axios interceptor: Logout on 401
    addInterceptor((status: number) => {
      if (status === 401) {
        logout();
        push(`${loginPath}?redirectTo=${asPath}`);
      }
    });
  }, [asPath, push, logout]);

  useEffect(() => {
    // This is an initialization hook, if the token is already loaded, we can exit
    if (authTokenLoaded) return;

    const redirectToLogin = () => push(`${loginPath}?redirectTo=${asPath}`);

    if (isCurrentPathPrivate) {
      // UNCOMMENT WHEN YOU HAVE A TOKEN 👇
      // login(
      //   "YOUR_TOKEN"
      // );

      // COMMENT WHEN YOU HAVE A TOKEN 👇
      fetchToken()
        .then(({ data }) => {
          console.log(data?.data.token);
          if (data?.data.token) login(data?.data.token);
          else redirectToLogin();
        })
        .catch(() => {
          redirectToLogin();
        });
    }
  }, [authTokenLoaded, isCurrentPathPrivate, fetchToken, login, asPath, push]);

  if (!authTokenLoaded && isCurrentPathPrivate) return null;

  return (
    <AuthContext.Provider
      value={{
        setAuthToken: initAuth,
        logout,
        isAuthenticated: authTokenLoaded,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
