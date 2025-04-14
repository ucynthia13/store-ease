"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { LoaderCircle } from "lucide-react";
import OtpModal from "./OtpModal";
import { createAccount } from "@/lib/actions/user.actions";

type FormType = "login" | "signup";

const formSchema = z.object({
  fullname: z.string(),
  email: z.string(),
  username: z.string().min(2).max(50),
  password: z.string().min(5).max(12),
});

const AuthForm = ({ type }: { type: FormType }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [account, setAccount] = useState(0)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true)
    setErrorMessage("")
    try {
      const user = await createAccount({fullName: values.fullname, email: values.email} )
      setAccount(user.accountId)
    } catch  {
      setErrorMessage("Failed to sign in")
    } finally{
      setIsLoading(false)
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-1/2">
        <h1 className=" font-extrabold sm:text-sm md:text-2xl lg:text-4xl py-4 lg:py-8">
          {type === "signup" ? "Create Account" : "Welcome Back!"}
        </h1>
        {type === "signup" && (
          <>
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Names" {...field} className="text-sm" />
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
                    <Input
                      placeholder="Email"
                      {...field}
                      className="shad-input"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Username"
                  {...field}
                  className="shad-input"
                />
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
                  {...field}
                  className="shad-input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full shadow-md h-12">
          Submit
          {isLoading && (
            <LoaderCircle className="size-6 animate-spin text-card" />
          )}
        </Button>
        {type === "login" && (
          <div className="flex items-center justify-center text-sm gap-2 pt-4">
            <p className="opacity-70">First time at ShopIt?</p>
            <Link href="/signup" className="text-primary">
              Create Your Account
            </Link>
          </div>
        )}
        {type === "signup" && (
          <div className="flex items-center justify-center text-sm gap-2 pt-4">
            <p className="opacity-70">Already a ShopIt member?</p>
            <Link href="/login" className="text-primary">
              Login
            </Link>
          </div>
        )}
        <OtpModal />
      </form>
    </Form>
  );
};

export default AuthForm;
