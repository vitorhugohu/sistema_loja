"use client";
import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";



export default function Home() {
    const searchParams = useSearchParams();
    const id = Number(searchParams.get("id"));

    const [tortLeitePeq, setTortLeitePeq] = useState(0);
    const [tortChocolatePeq, setTortChocolatePeq] = useState(0);
    const [tortCalabresaPeq, setTortCalabresaPeq] = useState(0);
    const [tortQueijoPeq, setTortQueijoPeq] = useState(0);
    const [totalPeq, setTotalPeq] = useState(0);

    const [tortLeiteGran, setTortLeiteGran] = useState(0);
    const [tortChocolateGran, setTortChocolateGran] = useState(0);
    const [tortCalabresaGran, setTortCalabresaGran] = useState(0);
    const [tortQueijoGran, setTortQueijoGran] = useState(0);

    const valorTorPeq = 2;
    const valorTorGrand = 2.5;

    const calculaTotal = () => {
        const resultGrande = (tortCalabresaGran * valorTorGrand) + (tortChocolateGran * valorTorGrand) + (tortLeiteGran * valorTorGrand) + (tortQueijoGran * valorTorGrand);
        const result = (tortCalabresaPeq * valorTorPeq) + (tortChocolatePeq * valorTorPeq) + (tortLeitePeq * valorTorPeq) + (tortQueijoPeq * valorTorPeq);

        return result + resultGrande;
    }

    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-amber-900 p-8 font-black text-4xl text-center font-sans text-white">
                <h1>Realizar Pedido</h1>
            </header>

            <main className="flex flex-1 bg-amber-100">
                <div>
                    <h2 className="text-2xl">Tamanho Pequeno</h2>
                    
                    <div className="flex flex-col justify-between gap-2 p-2">
                        {id === 1 ? (
                            <p className="flex items-center gap-2 bg-white p-5 rounded-md">Tortilete de Leite Condensado <button className="rounded-full bg-gray-400 w-6 h-6 flex items-center justify-center hover:bg-gray-300 hover:cursor-pointer" onClick={function() {
                                if(tortLeitePeq > 0) {
                                    setTortLeitePeq(tortLeitePeq - 1)
                            }
                        }}>-</button> {tortLeitePeq} <button className="rounded-full bg-gray-400 w-6 h-6 flex items-center justify-center hover:bg-gray-300 hover:cursor-pointer" onClick={() => setTortLeitePeq(tortLeitePeq + 1)}>+</button></p>

                        ) : id === 2 ? (
                            <p className="flex items-center gap-2 bg-white p-5 rounded-md">Tortilete de Chocolate <button className="rounded-full bg-gray-400 w-6 h-6 flex items-center justify-center hover:bg-gray-300 hover:cursor-pointer" onClick={function() {
                            if(tortChocolatePeq > 0) {
                                setTortChocolatePeq(tortChocolatePeq - 1)
                            }
                        }}>-</button> {tortChocolatePeq} <button className="rounded-full bg-gray-400 w-6 h-6 flex items-center justify-center hover:bg-gray-300 hover:cursor-pointer" onClick={() => setTortChocolatePeq(tortChocolatePeq + 1)}>+</button></p>) 
                        : id ===3 ? (
                            <p className="flex items-center gap-2 bg-white p-5 rounded-md">Tortilete de Queijo <button className="rounded-full bg-gray-400 w-6 h-6 flex items-center justify-center hover:bg-gray-300 hover:cursor-pointer" onClick={function() {
                            if(tortQueijoPeq > 0) {
                                setTortQueijoPeq(tortQueijoPeq - 1)
                            }
                        } }>-</button> {tortQueijoPeq} <button className="rounded-full bg-gray-400 w-6 h-6 flex items-center justify-center hover:bg-gray-300 hover:cursor-pointer" onClick={() => setTortQueijoPeq(tortQueijoPeq + 1)}>+</button></p>
                        ) : (<p className="flex items-center gap-2 bg-white p-5 rounded-md">Tortilete de Calabresa <button className="rounded-full bg-gray-400 w-6 h-6 flex items-center justify-center hover:bg-gray-300 hover:cursor-pointer" onClick={function() {
                            if(tortCalabresaPeq > 0) {
                                setTortCalabresaPeq(tortCalabresaPeq - 1)
                            }
                        }}>-</button> {tortCalabresaPeq} <button className="rounded-full bg-gray-400 w-6 h-6 flex items-center justify-center hover:bg-gray-300 hover:cursor-pointer" onClick={() => setTortCalabresaPeq(tortCalabresaPeq + 1)}>+</button></p>)}

                        <p className="flex items-center gap-2 bg-white p-3  w-48 rounded-md">Total: R$ {totalPeq} <button className="bg-blue-900 p-2 rounded-md text-white hover:cursor-pointer hover:bg-blue-500" onClick={() => setTotalPeq(calculaTotal())}>Calcular</button></p>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl">Tamanho Grande</h2>
                    <div className="flex flex-col justify-between gap-2 p-2">
                    {id === 1 ? (
                        <p className="flex items-center gap-2 bg-white p-5 rounded-md">Tortilete de Leite Condensado <button className="rounded-full bg-gray-400 w-6 h-6 flex items-center justify-center hover:bg-gray-300 hover:cursor-pointer" onClick={function() {
                        if(tortLeiteGran > 0) {
                            setTortLeiteGran(tortLeiteGran - 1)
                        }
                        }}>-</button> {tortLeiteGran} <button className="rounded-full bg-gray-400 w-6 h-6 flex items-center justify-center hover:bg-gray-300 hover:cursor-pointer" onClick={() => setTortLeiteGran(tortLeiteGran + 1)}>+</button></p>
                    ) : id === 2 ? (
                        <p className="flex items-center gap-2 bg-white p-5 rounded-md">Tortilete de Chocolate <button className="rounded-full bg-gray-400 w-6 h-6 flex items-center justify-center hover:bg-gray-300 hover:cursor-pointer" onClick={function() {
                        if(tortChocolateGran > 0) {
                            setTortChocolateGran(tortChocolateGran - 1)
                        }
                        }}>-</button> {tortChocolateGran} <button className="rounded-full bg-gray-400 w-6 h-6 flex items-center justify-center hover:bg-gray-300 hover:cursor-pointer" onClick={() => setTortChocolateGran(tortChocolateGran + 1)}>+</button></p>
                    ) : id === 3 ? (
                        <p className="flex items-center gap-2 bg-white p-5 rounded-md">Tortilete de Queijo <button className="rounded-full bg-gray-400 w-6 h-6 flex items-center justify-center hover:bg-gray-300 hover:cursor-pointer" onClick={function() {
                        if(tortQueijoGran > 0) {
                            setTortQueijoGran(tortQueijoGran - 1)
                        }
                        } }>-</button> {tortQueijoGran} <button className="rounded-full bg-gray-400 w-6 h-6 flex items-center justify-center hover:bg-gray-300 hover:cursor-pointer" onClick={() => setTortQueijoGran(tortQueijoGran + 1)}>+</button></p>
                    ) : (
                        <p className="flex items-center gap-2 bg-white p-5 rounded-md">Tortilete de Calabresa <button className="rounded-full bg-gray-400 w-6 h-6 flex items-center justify-center hover:bg-gray-300 hover:cursor-pointer" onClick={function() {
                        if(tortCalabresaGran > 0) {
                            setTortCalabresaGran(tortCalabresaGran - 1)
                        }
                        }}>-</button> {tortCalabresaGran} <button className="rounded-full bg-gray-400 w-6 h-6 flex items-center justify-center hover:bg-gray-300 hover:cursor-pointer" onClick={() => setTortCalabresaGran(tortCalabresaGran + 1)}>+</button></p>
                    )}
                     
                </div>
                </div>
            </main>

            <footer className="bg-amber-900  flex p-3 text-white justify-between">
                <p className="font-sans flex flex-row">&copy;CopyRight 2025-{new Date().getFullYear()}</p>
            </footer>
        </div>
    );
}