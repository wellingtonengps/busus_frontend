import React, { useEffect } from "react";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

import { useAuth } from "../hooks/auth";

export function Routes() {
  const { setUser, user } = useAuth();

  useEffect(() => {}, []);

  return user ? <AppRoutes /> : <AuthRoutes />;
}
