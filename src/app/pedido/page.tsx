import PedidoClient from "@/components/PedidoClient";
import { Suspense } from "react";

export default function  Home() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <PedidoClient />
    </Suspense>
  );
}