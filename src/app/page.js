import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Mundo Gamer</h1>

          <p className="text-lg mb-6">
            Descubrí juegos, noticias y categorías.
          </p>

          <div className="flex gap-4 mb-6">
            <Link
              href={"/home/juegos"}
              className="bg-violet-600 px-4 py-2 rounded-lg hover:bg-violet-400"
            >
              Ver juegos
            </Link>

            <Link
              href={"/home/noticias"}
              className="bg-violet-600 px-4 py-2 rounded-lg hover:bg-violet-400"
            >
              Ver noticias
            </Link>
          </div>

          <p className="text-gray-300">
            En Mundo Gamer encontrarás los mejores juegos para disfrutar,
            diversas categorías y una comunidad muy grande para compartir.
            ¡Suerte, gamer!
          </p>
        </div>

        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          <Image
            src="/images/counter.jpg"
            width={400}
            height={400}
            alt="gamer 1"
            className="rounded-xl object-cover w-full h-[200px]"
          />
          <Image
            src="/images/rocket.jpg"
            width={300}
            height={200}
            alt="gamer 2"
            className="rounded-xl object-cover w-full h-[200px]"
          />
          <Image
            src="/images/gamer.jpg"
            width={620}
            height={200}
            alt="gamer 3"
            className="rounded-xl object-cover w-full h-[300px] col-span-2"
          />
        </div>
      </section>
    </main>
  );
}