"use client";
import EnviarPedido from "@/components/EnviarPedido";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [carrinho, setCarrinho] = useState<any>(null);

  useEffect(() => {
    const storage = localStorage.getItem("carrinho");

    if (storage) {
      setCarrinho(JSON.parse(storage));
    } else {
      setCarrinho({});
    }
  }, []);

  if (!carrinho) return <p>Carregando...</p>;

  return (
  <div className="flex flex-col min-h-screen bg-amber-100 ">

    <header className="flex justify-between items-center bg-amber-900 text-white px-8 py-6">
      <h1 className="text-2xl font-black">
        Pedidos
      </h1>

      <Link
        href="/"
        className="hover:underline font-semibold"
      >
        Voltar
      </Link>
    </header>

    <main className="flex flex-1 items-start justify-center p-6">

      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6">

        <div className="flex flex-col gap-4">
          <EnviarPedido />
        </div>

      </div>

    </main>

    <footer className="bg-amber-900 text-white text-center p-3 font-semibold">
      © 2025-{new Date().getFullYear()}
    </footer>

  </div>
);
}
