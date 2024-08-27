"use client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { registerUser } from "@/lib/redux/slices/authSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hook";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Full Name must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Please enter a valid email" }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

const SignUp = () => {
  const dispatch = useAppDispatch();
  const { loading, error, success } = useAppSelector((state) => state.auth);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    dispatch(registerUser(values));
    success && router.push("/auth/sign-in");
  };
  const router = useRouter();

  useEffect(() => {
    if (success) {
      router.push("/auth/sign-in");
    }
  }, [success, router]);

  return (
    <div className="bg-[#264FAD]">
      <Link
        href="/auth/sign-in"
        className="absolute right-0 top-0 p-6 text-white font-semibold"
      >
        Sign In
      </Link>
      <div className="flex justify-center items-center h-[100vh]">
        <div>
          <div className="bg-white p-12 rounded-2xl md:w-[450px] w-[320px]">
            <h1 className="font-bold text-2xl text-[#434343]">Sign Up</h1>
            <p className="py-4">Hey, Enter your details to sign up</p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Full Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Email Address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Password"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  disabled={loading}
                  className="w-full bg-primaryBlue"
                  type="submit"
                >
                  {loading ? "Signing Up..." : "Sign Up"}
                </Button>
                {error && (
                  <p className="text-red-500">
                    {(typeof error === "string"
                      ? error
                      : (error as Error)?.message) || "An error occurred"}
                  </p>
                )}
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
