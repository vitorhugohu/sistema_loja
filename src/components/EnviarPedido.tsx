
"use client";
import { useEffect, useState } from "react";

export default function EnviarPedido() {
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    const storage = localStorage.getItem("carrinho");
    if (!storage) return;

    const data = JSON.parse(storage);

    let msg = "*Pedido - Adoce*\n\n";
    let total = 0;

    let precoPeq = 1;
    const precoGran = 3;

    // LEITE 
    if (data.tortLeitePeq || data.tortLeiteGran) {
      msg += "Leite Condensado\n";

      if (data.tortLeitePeq) {
        msg += `- Pequena: ${data.tortLeitePeq}\n`;

        if(data.tortLeitePeq >= 50) {
          precoPeq = 0.9
        }

        total += data.tortLeitePeq * precoPeq;
      }

      if (data.tortLeiteGran) {
        msg += `- Grande: ${data.tortLeiteGran}\n`;
        total += data.tortLeiteGran * precoGran;
      }

      msg += "\n";
    }

    // CHOCOLATE
    if (data.tortChocolatePeq || data.tortChocolateGran) {
      msg += "Chocolate\n";

      if (data.tortChocolatePeq) {
        msg += `- Pequena: ${data.tortChocolatePeq}\n`;

        if(data.tortChocolatePeq >= 50) {
          precoPeq = 0.9
        }

        total += data.tortChocolatePeq * precoPeq;
      }

      if (data.tortChocolateGran) {
        msg += `- Grande: ${data.tortChocolateGran}\n`;
        total += data.tortChocolateGran * precoGran;
      }

      msg += "\n";
    }

    // GOIABADA
    if (data.tortGoiabadaPeq || data.tortGoiabadaGran) {
      msg += "Goiabada\n";

      if (data.tortGoiabadaPeq) {
        msg += `- Pequena: ${data.tortGoiabadaPeq}\n`;

        if(data.tortGoiabadaPeq >= 50) {
          precoPeq = 0.9
        }

        total += data.tortGoiabadaPeq * precoPeq;
      }

      if (data.tortGoiabadaGran) {
        msg += `- Grande: ${data.tortGoiabadaGran}\n`;
        total += data.tortGoiabadaGran * precoGran;
      }

      msg += "\n";
    }

    // QUEIJO
    if (data.tortQueijoPeq || data.tortQueijoGran) {
      msg += "Queijo\n";

      if (data.tortQueijoPeq) {
        msg += `- Pequena: ${data.tortQueijoPeq}\n`;

        if(data.tortQueijoPeq >= 50) {
          precoPeq = 0.9
        }

        total += data.tortQueijoPeq * precoPeq;
      }

      if (data.tortQueijoGran) {
        msg += `- Grande: ${data.tortQueijoGran}\n`;
        total += data.tortQueijoGran * precoGran;
      }

      msg += "\n";
    }

    // CALABRESA
    if (data.tortCalabresaPeq || data.tortCalabresaGran) {
      msg += "Calabresa\n";

      if (data.tortCalabresaPeq) {
        msg += `- Pequena: ${data.tortCalabresaPeq}\n`;

        if(data.tortCalabresaPeq >= 50) {
          precoPeq = 0.9
        }

        total += data.tortCalabresaPeq * precoPeq;
      }

      if (data.tortCalabresaGran) {
        msg += `- Grande: ${data.tortCalabresaGran}\n`;
        total += data.tortCalabresaGran * precoGran;
      }

      msg += "\n";
    }

    msg += ` *Total: R$ ${total.toFixed(2)}*\n\n`;
    msg += " Pedido realizado pelo site";

    setMensagem(msg);
  }, []);

  return (
    <div className="p-4 font-semibold">
      <h1>Resumo do Pedido</h1>

      <pre className="bg-white p-3 rounded font-semibold">{mensagem}</pre>

      <a
        href={`https://wa.me/5585986985220?text=${encodeURIComponent(mensagem)}`}
        target="_blank"
        className="bg-green-600 text-white p-3 rounded mt-3 inline-block font-semibold"
      >
        Enviar no WhatsApp
      </a>
    </div>
  );
}