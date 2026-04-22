"use client";
import ProdutoCard from "@/components/ProdutoCard";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [possuiPedido, setPossuiPedido] = useState(false);

  useEffect(() => {
    debugger
    const storage = localStorage.getItem("carrinho");
    if (storage) {
      setPossuiPedido(true);
    } else {
      setPossuiPedido(false);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-amber-900 p-8 font-black text-4xl text-center font-sans text-white">
        <h1>Adoce</h1>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 bg-amber-100 p-10 flex-1 justify-items-center">
        <div className="col-span-full bg-green-100 border border-green-400 text-green-800 px-6 py-4 rounded-lg shadow-md text-center font-semibold max-w-3xl mx-auto">
      🎉 Na compra de 50 unidades pequenas de qualquer sabor, o valor sai por <span className="text-lg font-bold">R$ 0,90</span> cada!
       </div>
       
        <ProdutoCard
          id={1}
          imagem="/tortilete_leitee.png"
          nome="Leite Condesado"
          precoGrande={3}
          precoPequena={1}
        />
        <ProdutoCard
          id={2}
          imagem="/tortilete_chocolatee.png"
          nome="Chocolate"
          precoGrande={3}
          precoPequena={1}
        />
        <ProdutoCard
          id={3}
          imagem="/tortilete_goiaba.png"
          nome="Goiabada"
          precoGrande={3}
          precoPequena={1}
        />
        <ProdutoCard
          id={4}
          imagem="/torti_queijo.png"
          nome="Queijo"
          precoGrande={3}
          precoPequena={1}
        />
        <ProdutoCard
          id={5}
          imagem="/torti_cala.png"
          nome="Calabresa"
          precoGrande={3}
          precoPequena={1}
        />

        {possuiPedido ? (
          <Link href="/carrinho" className="fixed bottom-20 left-5 bg-black text-white p-3 rounded-full shadow-xl hover:scale-110 transition border-2 border-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 2a1 1 0 0 1 .993 .883l.007 .117v1.068l13.071 .935a1 1 0 0 1 .929 1.024l-.01 .114l-1 7a1 1 0 0 1 -.877 .853l-.113 .006h-12v2h10a3 3 0 1 1 -2.995 3.176l-.005 -.176l.005 -.176c.017 -.288 .074 -.564 .166 -.824h-5.342a3 3 0 1 1 -5.824 1.176l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-12.17h-1a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 .883 -.993l.117 -.007h2zm0 16a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m11 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2" />
          </svg>
          </Link>
        ) : (
          ""
        )}
      </main>

      <footer className="bg-amber-900  flex p-3 text-white justify-between">
        <p className="font-sans flex flex-row">
            © 2025-{new Date().getFullYear()}
        </p>

        <div className="fixed bottom-10 right-5 flex flex-col gap-3">
          <a href="https://www.instagram.com/a_doc_3/" target="_blank">
            <Image
              src="/logo_instagram.png"
              width={50}
              height={50}
              alt="logo insta"
              className="rounded-full shadow-lg hover:scale-110 transition"
            />
          </a>

          <a
            href=" https://wa.me/5585986985220?text=Olá%20tudo%20bem"
            target="_blank"
          >
            <Image
              src="/logo_whatsapp.png"
              width={50}
              height={50}
              alt="logo whats"
              className="rounded-full shadow-lg hover:scale-110 transition"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
