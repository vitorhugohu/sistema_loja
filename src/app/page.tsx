"use client";
import App from "@/components/App";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-amber-900 p-8 font-black text-4xl text-center font-sans text-white">
        <h1>Adoce</h1>
      </header>

      <main>
        <App />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
