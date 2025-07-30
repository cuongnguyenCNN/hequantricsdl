// pages/index.tsx
"use client";
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
import Projects from "./components/project";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero></Hero>
      <About></About>
      <Learn></Learn>
      <Curriculum></Curriculum>
      {/* <Instructor></Instructor> */}
      <Schedule></Schedule>
      {/* <Guarantee></Guarantee> */}
      <RegisterForm></RegisterForm>
      <FAQ></FAQ>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}
