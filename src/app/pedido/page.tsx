"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const id = Number(searchParams.get("id"));

  const [tortLeitePeq, setTortLeitePeq] = useState(0);
  const [tortLeiteGran, setTortLeiteGran] = useState(0);

  const [tortChocolatePeq, setTortChocolatePeq] = useState(0);
  const [tortChocolateGran, setTortChocolateGran] = useState(0);

  const [tortGoiabadaPeq, setTortGoiabadaPeq] = useState(0);
  const [tortGoiabadaGran, setTortGoiabadaGran] = useState(0);

  const [tortQueijoPeq, setTortQueijoPeq] = useState(0);
  const [tortQueijoGran, setTortQueijoGran] = useState(0);

  const [tortCalabresaPeq, setTortCalabresaPeq] = useState(0);
  const [tortCalabresaGran, setTortCalabresaGran] = useState(0);

  let valorTorPeq = 1;
  const valorTorGran = 3;

  const adicionarItem = (key: string, quantidade: number) => {
    if (quantidade <= 0) return;

    const storage = localStorage.getItem("carrinho");
    let data = storage ? JSON.parse(storage) : {};

    data[key] = (data[key] || 0) + quantidade;

    localStorage.setItem("carrinho", JSON.stringify(data));
  };

  const salvarCarrinho = () => {
    if (id === 1) {
      adicionarItem("tortLeitePeq", tortLeitePeq);
      adicionarItem("tortLeiteGran", tortLeiteGran);
    } else if (id === 2) {
      adicionarItem("tortChocolatePeq", tortChocolatePeq);
      adicionarItem("tortChocolateGran", tortChocolateGran);
    } else if (id === 3) {
      adicionarItem("tortGoiabadaPeq", tortGoiabadaPeq);
      adicionarItem("tortGoiabadaGran", tortGoiabadaGran);
    } else if (id === 4) {
      adicionarItem("tortQueijoPeq", tortQueijoPeq);
      adicionarItem("tortQueijoGran", tortQueijoGran);
    } else {
      adicionarItem("tortCalabresaPeq", tortCalabresaPeq);
      adicionarItem("tortCalabresaGran", tortCalabresaGran);
    }
  };

  // cálculo do total
  const calculaTotal = () => {
    if (id === 1) {
      if (tortLeitePeq >= 50) {
        valorTorPeq = 0.9;
      }

      return tortLeitePeq * valorTorPeq + tortLeiteGran * valorTorGran;
    } else if (id === 2) {
      if (tortChocolatePeq >= 50) {
        valorTorPeq = 0.9;
      }

      return tortChocolatePeq * valorTorPeq + tortChocolateGran * valorTorGran;
    } else if (id === 3) {
      if (tortGoiabadaPeq >= 50) {
        valorTorPeq = 0.9;
      }

      return tortGoiabadaPeq * valorTorPeq + tortGoiabadaGran * valorTorGran;
    } else if (id === 4) {
      if (tortQueijoPeq >= 50) {
        valorTorPeq = 0.9;
      }

      return tortQueijoPeq * valorTorPeq + tortQueijoGran * valorTorGran;
    } else {
      if (tortCalabresaPeq >= 50) {
        valorTorPeq = 0.9;
      }

      return tortCalabresaPeq * valorTorPeq + tortCalabresaGran * valorTorGran;
    }
  };

  const ItemControl = ({
    nome,
    valor,
    setValor,
  }: {
    nome: string;
    valor: number;
    setValor: (v: number) => void;
  }) => (
    <p className="flex items-center gap-2 bg-white p-5 rounded-md">
      {nome}
      <button
        className="rounded-full bg-gray-400 w-6 h-6 flex items-center justify-center hover:cursor-pointer hover:bg-gray-200"
        onClick={() => valor > 0 && setValor(valor - 1)}
      >
        -
      </button>
      {valor}
      <button
        className="rounded-full bg-gray-400 w-6 h-6 flex items-center justify-center hover:cursor-pointer hover:bg-gray-200"
        onClick={() => setValor(valor + 1)}
      >
        +
      </button>
    </p>
  );

  return (
    <div className="flex flex-col min-h-screen bg-amber-100">
      {/* HEADER */}
      <header className="flex justify-between items-center bg-amber-900 text-white p-6">
        <h1 className="text-2xl font-bold">Realizar Pedido</h1>
        <Link href="/" className="hover:underline">
          Voltar
        </Link>
      </header>

      {/* MAIN */}
      <main className="flex flex-1 items-center justify-center p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {/* Pequeno */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-center">Pequeno</h2>

            <div className="space-y-3">
              {id === 1 && (
                <ItemControl
                  nome="Leite Condensado"
                  valor={tortLeitePeq}
                  setValor={setTortLeitePeq}
                />
              )}
              {id === 2 && (
                <ItemControl
                  nome="Chocolate"
                  valor={tortChocolatePeq}
                  setValor={setTortChocolatePeq}
                />
              )}
              {id === 3 && (
                <ItemControl
                  nome="Goiabada"
                  valor={tortGoiabadaPeq}
                  setValor={setTortGoiabadaPeq}
                />
              )}
              {id === 4 && (
                <ItemControl
                  nome="Queijo"
                  valor={tortQueijoPeq}
                  setValor={setTortQueijoPeq}
                />
              )}
              {id === 5 && (
                <ItemControl
                  nome="Calabresa"
                  valor={tortCalabresaPeq}
                  setValor={setTortCalabresaPeq}
                />
              )}
            </div>
          </div>

          {/* Grande */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-center">Grande</h2>

            <div className="space-y-3">
              {id === 1 && (
                <ItemControl
                  nome="Leite Condensado"
                  valor={tortLeiteGran}
                  setValor={setTortLeiteGran}
                />
              )}
              {id === 2 && (
                <ItemControl
                  nome="Chocolate"
                  valor={tortChocolateGran}
                  setValor={setTortChocolateGran}
                />
              )}
              {id === 3 && (
                <ItemControl
                  nome="Goiabada"
                  valor={tortGoiabadaGran}
                  setValor={setTortGoiabadaGran}
                />
              )}
              {id === 4 && (
                <ItemControl
                  nome="Queijo"
                  valor={tortQueijoGran}
                  setValor={setTortQueijoGran}
                />
              )}
              {id === 5 && (
                <ItemControl
                  nome="Calabresa"
                  valor={tortCalabresaGran}
                  setValor={setTortCalabresaGran}
                />
              )}
            </div>
          </div>

          <Link
            href="/"
            onClick={salvarCarrinho}
            className="mt-6 block text-center text-white py-3 rounded-lg bg-red-600 hover:bg-red-500 transition shadow-md font-semibold"
          >
            Adicionar: R$ {calculaTotal().toFixed(2)}
          </Link>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-amber-900 text-white p-3 text-center">
        © 2025-{new Date().getFullYear()}
      </footer>
    </div>
  );
}
