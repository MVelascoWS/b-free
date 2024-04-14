import Image from "next/image";
import React,{useState, ChangeEvent, FormEvent} from "react";

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
    <main className="flex min-h-screen flex-col items-center justify-between p-5  bg-indigo-900">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        
        <div className="fixed bottom-0 left-0 flex h-48 w-full justify-center lg:static lg:size-auto lg:bg-none text-center items-center">
            <Image
              src="/bfree.png"
              alt="B.free Logo"
              width={100}
              height={100}
              priority
            />          
            <h1 className="text-3xl">B.free</h1>            
        </div>

        
      </div>
      <div>
      <form  className="p-8">
      <div className="mb-4">
        <label htmlFor="projectName" className="block text-sm font-medium text-white">
          NOMBRE DE TU PROYECTO
        </label>
        <input
          type="text"
          name="projectName"
          id="projectName"          
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="projectDescription" className="block text-sm font-medium text-white">
          EXPLICA CLARAMENTE DE QUÉ SE TRATA
        </label>
        <textarea
          name="projectDescription"
          id="projectDescription"          
          rows = "4" 
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"
          required
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-white">
          CON CUÁNTO DINERO POR MES PUEDES PARTICIPAR
        </label>
        <select
          name="monthlyContribution"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="500">500 pesos por mes</option>
          <option value="1000">1000 pesos por mes</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="donationPercentage" className="block text-sm font-medium text-white">
          CUÁL ES EL PORCENTAJE DE TU GANANCIA QUE DONARÁS A B.FREE (mínimo 20% máximo lo que tú decidas)
        </label>
        <input
          type="number"
          name="donationPercentage"
          id="donationPercentage"
          min="20"
          max="100"          
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-white">
          DEJA TUS DATOS DE CONTACTO:
        </label>
        <input
          type="text"
          name="idNumber"
          placeholder="No. de INE"
          
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 mb-2 text-black"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 mb-2 text-black"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="productImage" className="block text-sm font-medium text-white">
          SUBE UNA FOTO DEL PRODUCTO QUE VENDERÁS
        </label>
        <input
          type="file"
          name="productImage"
          id="productImage"
          
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          required
        />
      </div>

      <button type="submit" className="w-full bg-button-color text-white rounded-md p-2">
        Enviar
      </button>
    </form>
      </div>
    </main>
  );
}
