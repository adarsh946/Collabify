import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AuthenticationFlow } from "../types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

interface SignUpCardProps {
  setState: (state: AuthenticationFlow) => void;
}

export const SignUpCard = ({ setState }: SignUpCardProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Card className="h-full w-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Sign Up to Continue</CardTitle>
        <CardDescription>
          {" "}
          Use your Email or Other Service to Continue
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 px-0 pb-0">
        <div className="space-y-5 px-0 pb-0">
          <form className="space-y-2.5">
            <Input
              disabled={false}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              required
            />
            <Input
              disabled={false}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
            />
            <Input
              disabled={false}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              placeholder="Confirm Password"
              required
            />
            <Button className="w-full" type="submit">
              Continue
            </Button>
          </form>
          <Separator />

          <Button
            size="lg"
            className="w-full relative"
            onChange={() => {}}
            variant="outline"
            disabled={false}
          >
            <FcGoogle className="absolute top-3 left-2.5 size-5" />
            Continue with Google
          </Button>
          <Button
            size="lg"
            className="w-full relative"
            onChange={() => {}}
            variant="outline"
            disabled={false}
          >
            <FaGithub className="absolute top-3 left-2.5 size-5" />
            Continue with Github
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Already have account ?{" "}
          <span
            className="text-sky-700 cursor-pointer hover:underline"
            onClick={() => setState("signIn")}
          >
            SignIn
          </span>
        </p>
      </CardContent>
    </Card>
  );
};
