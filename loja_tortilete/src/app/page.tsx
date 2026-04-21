import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      
      <header className="bg-amber-900 p-8 font-black text-4xl text-center font-sans text-white">

        <h1>Tortiletes da Rô</h1>

      </header>

      <main className="grid grid-cols-4 bg-amber-100 p-10 flex flex-1 place-items-center">
          <div className="bg-white p-5 rounded-md flex flex-col gap-2">
              <Image src="/torti_tradi.png" alt="tete" width={200} height={200} className="rounded-full"/>
              <p className=" font-sans text-sm">Leite Condensado</p>
              <p className=" font-sans text-sm">Pequena: R$ 2,00.</p>
              <p className=" font-sans text-sm">Grande: R$ 2,50.</p>
              <Link href="/pedido?id=1" className="bg-green-600 text-white rounded-full p-2 hover:bg-green-300 w-24 text-center">Comprar</Link>
          </div>

         <div className="bg-white p-5 rounded-md flex flex-col gap-2">
              <Image src="/tortilete_chocolate.jpg" alt="tete" width={200} height={200} className="rounded-full"/>
              <p className=" font-sans text-sm">Chocolate</p>
              <p className=" font-sans text-sm">Pequena: R$ 2,00.</p>
              <p className=" font-sans text-sm">Grande: R$ 2,50.</p>
              <Link href="/pedido?id=2" className="bg-green-600 text-white rounded-full p-2 hover:bg-green-300 w-24 text-center">Comprar</Link>
          </div>

          <div className="bg-white p-5 rounded-md flex flex-col gap-2">
              <Image src="/torti_queijo.png" alt="tete" width={200} height={200} className="rounded-full"/>
              <p className=" font-sans text-sm">Queijo</p>
              <p className=" font-sans text-sm">Pequena: R$ 2,00.</p>
              <p className=" font-sans text-sm">Grande: R$ 2,50.</p>
              <Link href="/pedido?id=3" className="bg-green-600 text-white rounded-full p-2 hover:bg-green-300 w-24 text-center">Comprar</Link>
          </div>

          <div className="bg-white p-5 rounded-md flex flex-col gap-2">
              <Image src="/torti_cala.png" alt="tete" width={200} height={200} className="rounded-full"/>
              <p className=" font-sans text-sm">Calabresa</p>
              <p className=" font-sans text-sm">Pequena: R$ 2,00.</p>
              <p className=" font-sans text-sm">Grande: R$ 2,50.</p>
              <Link href="/pedido?id=4" className="bg-green-600 text-white rounded-full p-2 hover:bg-green-300 w-24 text-center">Comprar</Link>
          </div>
      </main>
      
      <footer className="bg-amber-900  flex p-3 text-white justify-between">
        <p className="font-sans flex flex-row">&copy;CopyRight 2025-{new Date().getFullYear()}</p>

        <div className="flex flex-row gap-2">

          <a href="https://www.instagram.com/a_doc_3/" target="_blank">
        
              <Image src="/logo_insta.png" width={50} height={50} alt="logo insta" className="rounded-full"/>

          </a>

           <a href=" https://wa.me/5585986985220?text=Olá%20tudo%20bem" target="_blank">
       
              <Image src="/logo_what.png" width={50} height={50} alt="logo whats" className="rounded-full"/>

            </a>

        </div>

      </footer>
      
    </div>
  );
}