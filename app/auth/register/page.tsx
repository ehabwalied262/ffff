'use client'

import SignupForm from "@/components/signup-form";
import React, { useState } from "react";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {

  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  const handleFormSubmit = (values: any) => {
    if (isLogin) {
      console.log("Login form submitted with values:", values);
    } else {
      console.log("Signup form submitted with values:", values);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-end pr-5 pt-5 bg-background">
  <div className="max-w-md w-full flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-xl" style={{ padding: "2rem", textAlign: "center" }}>
      <Image
        src="/splash.png"
        width={320}
        height={320}
        alt="Splash"
        priority
      />
      <h1 className="text-2xl font-bold mb-6 mt-6 text-primary">
        TWINFLIX
      </h1>
      <SignupForm isLogin={isLogin} onSubmit={handleFormSubmit} />
      <p className="text-center text-gray-600 cursor-pointer" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? <a onClick={() => router.push('/auth/register')}>Don't have an account yet? <u>Register</u></a> : <a onClick={() => router.push('/auth/login')}>Already a user? <u>Login</u></a>}
      </p>
    </div>
  </div>
</div>
  );
};

export default RegisterPage;