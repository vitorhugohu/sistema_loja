"use client";

import Image from "next/image";
import Link from "next/link";

type ProdutoCardProps = {
  nome: string;
  imagem: string;
  precoPequena: number;
  precoGrande: number;
  id: number;
};

export default function ProdutoCard({
  nome,
  imagem,
  precoPequena,
  precoGrande,
  id,
}: ProdutoCardProps) {
  return (
    <div className="bg-white p-4 rounded-md flex flex-col gap-4 border-none shadow-sm hover:shadow-md transition-shadow font-semibold">
      <Image
        src={imagem}
        alt={nome}
        width={200}
        height={200}
        className="rounded-full font-semibold"
      />

      <p className="font-sans text-sm">{nome}</p>
      <p className="font-sans text-sm">
        Pequena: R$ {precoPequena.toFixed(2)}
      </p>
      <p className="font-sans text-sm">
        Grande: R$ {precoGrande.toFixed(2)}
      </p>

      <Link
        href={`/pedido?id=${id}`}
        className="text-white rounded-full p-2 w-24 text-center bg-emerald-600 hover:bg-emerald-700"
      >
        Comprar
      </Link>
    </div>
  );
}