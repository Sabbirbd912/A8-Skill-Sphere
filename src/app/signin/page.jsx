"use client";

import { authClient } from "@/lib/auth.client";
import { Check } from "@gravity-ui/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
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
        toast.error(error.message || "Invalid email or password");
        setLoading(false);
        return;
      }
      if (data) {
        toast.success("Login successful!");
        router.push("/");
        router.refresh();
      }
    } catch (err) {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <Card className="border mx-auto w-125 py-10 mt-18">
      <h2 className="bg-linear-to-tr from-black via-blue-800 to-blue-500 bg-clip-text text-transparent text-center text-2xl font-bold">
        Sign In
      </h2>

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

        <div className="flex gap-2 w-full">
          <Button className="flex-1" type="submit" isLoading={loading}>
            {!loading && <Check />}
            {loading ? "Signing In..." : "Submit"}
          </Button>
          <Button className="flex-1" type="reset" variant="secondary" isDisabled={loading}>
            Reset
          </Button>
        </div>
      </Form>
      <div className="flex flex-col items-center justify-center">
        <p className="text-sm">Or</p>
        <Button
          onClick={handleGoogleSignIn}
          variant="outline"
          className="w-sm mt-2"
        >
          Sign Up with <FcGoogle />
          Google
        </Button>
      </div>
    </Card>
  );
}
