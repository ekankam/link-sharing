"use client";
import Container from "@/components/Container";
import FormHeader from "@/components/FormHeader";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { getIcon } from "@/lib/getIcon";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LoginFormData, LoginFormSchema } from "@/lib/formSchema";
import Link from "next/link";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginFormSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      // Send data to the server
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(errors);
  return (
    <Container className="bg-cc-gray-100 md:bg-cc-white md:w-[476px] md:mx-auto md:p-10">
      <FormHeader
        header="Login"
        subheader="Add your details below to get back into the app"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 flex flex-col gap-6"
      >
        <div>
          <label
            htmlFor="email"
            className={cn("text-xs mb-1 text-cc-gray-400", {
              "text-cc-red": errors.email,
            })}
          >
            Email Address
          </label>
          <Input
            type="email"
            placeholder="e.g.alex@email.com"
            isError={errors.email ? true : false}
            errorMessage={errors.email?.message}
            icon={
              <Image
                src={getIcon("email").src}
                alt="Email Icon"
                width={16}
                height={16}
              />
            }
            {...register("email")}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className={cn("text-xs mb-1 text-cc-gray-400", {
              "text-cc-red": errors.password,
            })}
          >
            Password
          </label>
          <Input
            type="password"
            placeholder="Enter your password"
            isError={errors.password ? true : false}
            errorMessage={errors.password?.message}
            icon={
              <Image
                src={getIcon("password").src}
                alt="Email Icon"
                width={16}
                height={16}
              />
            }
            {...register("password")}
          />
        </div>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </Button>
        <p className="text-base text-cc-gray-300 leading-6 text-center">
          Don’t have an account?{" "}
          <Link href="/register" className="text-cc-purple-700 hover:underline">
            Create account
          </Link>
        </p>
      </form>
    </Container>
  );
};

export default LoginForm;
