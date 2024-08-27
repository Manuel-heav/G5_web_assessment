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
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

const SignIn = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    try {
      setLoading(true);
      const response = await axios.post(
        "https://a2sv-backend.onrender.com/api/auth/login",
        values
      );
      console.log(response);
      if (response.status === 200) {
        router.push("/blogs");
      } else {
        console.log(response);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message || "An unknown error occurred.");
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#264FAD]">
      <Link
        href="/auth/sign-up"
        className="absolute right-0 top-0 p-6 text-white font-semibold"
      >
        Sign Up
      </Link>
      <div className="flex justify-center items-center h-[100vh]">
        <div>
          <div className="bg-white p-12 rounded-2xl md:w-[450px] w-[320px]">
            <h1 className="font-bold text-2xl text-[#434343]">Sign In</h1>
            <p className="py-4">
              Hey, Enter your details to sign in to your account{" "}
            </p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
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
                  {loading ? "Signing In..." : "Sign In"}
                </Button>

                {error && <p className="text-red-500 text-center">{error}</p>}
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
