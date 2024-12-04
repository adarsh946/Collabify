"use client";

import { useState } from "react";
import { AuthenticationFlow } from "../types";
import { SignInCard } from "./signIn-card";
import { SignUpCard } from "./signUp-card";

export const AuthScreen = () => {
  const [state, setState] = useState<AuthenticationFlow>("signIn");

  return (
    <div className="h-full flex justify-center items-center bg-[#5C3B58]">
      <div className="md:h-auto md:w-[420px]">
        {state === "signIn" ? (
          <SignInCard setState={setState} />
        ) : (
          <SignUpCard setState={setState} />
        )}
      </div>
    </div>
  );
};
