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
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-evenly bg-amber-900 text-white">
        <h1 className="p-8 font-black text-4xl">Pedidos</h1>
        <Link href="/" className="p-2">
          Voltar
        </Link>
      </header>

      <main className="flex flex-1 bg-amber-100 p-4">
        <div className="flex flex-col gap-2">
          <EnviarPedido />
        </div>
      </main>

      <footer className="bg-amber-900 p-3 text-white">
        © 2025-{new Date().getFullYear()}
      </footer>
    </div>
  );
}
