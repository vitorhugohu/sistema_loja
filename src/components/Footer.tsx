import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-amber-900  flex p-3 text-white justify-between font-semibold">
      <p className="flex flex-row">
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
          href=" https://wa.me/5585986985220?text=Olá%20tudo%20bem?"
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
    </div>
  );
}
