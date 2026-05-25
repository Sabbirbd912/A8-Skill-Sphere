"use client";

import { authClient } from "@/lib/auth.client";
import { Check } from "@gravity-ui/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

export default function SignInPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = Object.fromEntries(new FormData(e.currentTarget));
    const { email, password } = formData;

    try {
      const { data, error } = await authClient.signIn.email({
        email,
        password,
        callbackUrl: "/",
      });

      if (error) {
        console.error("Sign in error:", error.message);
        alert(error.message || "Something went wrong!");
        setLoading(false);
        return;
      }

      if (data) {
        router.push("/");
        router.refresh();
      }
    } catch (err) {
      setLoading(false);
    }
  };

  const handleGoogleSignIn=async ()=>{
     const data = await authClient.signIn.social({
    provider: "google",
  });
  }

  return (
    <Card className="border mx-auto w-125 py-10 mt-5">
      <h1 className="text-center text-2xl font-bold">Sign In</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit" isLoading={loading}>
            {!loading && <Check />}
            {loading ? "Signing In..." : "Submit"}
          </Button>
          <Button type="reset" variant="secondary" isDisabled={loading}>
            Reset
          </Button>
        </div>
      </Form>

      <p className=" pt-2 mx-auto">Or sign up with:</p>
      <Button onClick={handleGoogleSignIn} variant="outline" className="w-full mt-2">
        Google
      </Button>
    </Card>
  );
}
