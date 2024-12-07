import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { AuthenticationFlow } from "../types";
import React, { useState } from "react";
import { useAuthActions } from "@convex-dev/auth/react";
import { TriangleAlert } from "lucide-react";

interface SignInCardProps {
  setState: (state: AuthenticationFlow) => void;
}

export const SignInCard = ({ setState }: SignInCardProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const { signIn } = useAuthActions();

  const isPassowrdSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    signIn("password", { email, password, flow: "sgnIn" })
      .catch(() => {
        setError("Invalid Email or Password!");
      })
      .finally(() => {
        setPending(false);
      });
  };

  const handleProviderAuth = (value: "google" | "github") => {
    setPending(true);
    signIn(value).finally(() => {
      setPending(true);
    });
  };

  return (
    <Card className="h-full w-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Login to Continue</CardTitle>
        <CardDescription>
          Use your Email or Other Service to Continue
        </CardDescription>
      </CardHeader>
      {!!error && (
        <div className="bg-destructive/15 p-2 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
          <TriangleAlert className="size-4" />
          <p>{error}</p>
        </div>
      )}
      <CardContent className="space-y-5 px-0 pb-0 ">
        <div className="space-y-5 px-0 pb-0 ">
          <form onSubmit={isPassowrdSignIn} className="space-y-2.5">
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              disabled={pending}
              placeholder="Email"
              required
            />
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              disabled={pending}
              placeholder="Password"
              required
            />
            <Button type="submit" className="w-full " size="lg">
              Continue
            </Button>
          </form>
          <Separator />
          <Button
            disabled={pending}
            variant="outline"
            className="w-full relative"
            onClick={() => handleProviderAuth("google")}
            size="lg"
          >
            <FcGoogle className="absolute size-5 top-3 left-2.5" />
            Continue with Google
          </Button>
          <Button
            disabled={pending}
            variant="outline"
            className="w-full relative"
            onClick={() => handleProviderAuth("github")}
            size="lg"
          >
            <FaGithub className="absolute size-5 top-3 left-2.5" />
            Continue with Github
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Don't have an accout?{" "}
          <span
            onClick={() => setState("signUp")}
            className="hover:underline text-sky-700 cursor-pointer"
          >
            SignUp
          </span>
        </p>
      </CardContent>
    </Card>
  );
};
