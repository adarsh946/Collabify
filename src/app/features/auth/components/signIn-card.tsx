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
import { useState } from "react";

interface SignInCardProps {
  setState: (state: AuthenticationFlow) => void;
}

export const SignInCard = ({ setState }: SignInCardProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Card className="h-full w-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Login to Continue</CardTitle>
        <CardDescription>
          Use your Email or Other Service to Continue
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 px-0 pb-0 ">
        <div className="space-y-5 px-0 pb-0 ">
          <form className="space-y-2.5">
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              disabled={false}
              placeholder="Email"
              required
            />
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              disabled={false}
              placeholder="Password"
              required
            />
            <Button type="submit" className="w-full " size="lg">
              Continue
            </Button>
          </form>
          <Separator />
          <Button
            disabled={false}
            variant="outline"
            className="w-full relative"
            onChange={() => {}}
            size="lg"
          >
            <FcGoogle className="absolute size-5 top-3 left-2.5" />
            Continue with Google
          </Button>
          <Button
            disabled={false}
            variant="outline"
            className="w-full relative"
            onChange={() => {}}
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
