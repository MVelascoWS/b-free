import Image from "next/image";
import Link from "next/link";
import React,{useState, ChangeEvent, FormEvent} from "react";
import NavBar from "./components/NavBar";
import ProjectForm from "./components/ProjectForm";

type FormData = {
  projectName: string;
  projectDescription: string;
  monthlyContribution: string;
  donationPercentage: number;
  idNumber: string;
  phone: string;
  email: string;
  productImage: File | null;
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5  bg-custom-radial">
      <NavBar/>
      
    </main>
  );
}
