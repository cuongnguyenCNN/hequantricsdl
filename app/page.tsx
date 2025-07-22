// pages/index.tsx
"use client";
import Head from "next/head";
import { useState } from "react";
import Hero from "./components/hero";
import About from "./components/about";
import Learn from "./components/learn";
import Curriculum from "./components/curriculum";
import Instructor from "./components/instructor";
import Schedule from "./components/schedule";
import Guarantee from "./components/guarantee";
import RegisterForm from "./components/registerform";
import FAQ from "./components/faq";
import Footer from "./components/footer";

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Đăng ký thành công cho ${form.name}!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero></Hero>
      <About></About>
      <Learn></Learn>
      <Curriculum></Curriculum>
      <Instructor></Instructor>
      <Schedule></Schedule>
      <Guarantee></Guarantee>
      <RegisterForm></RegisterForm>
      <FAQ></FAQ>
      <Footer></Footer>
    </div>
  );
}
