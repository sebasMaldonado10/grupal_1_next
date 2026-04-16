import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#020b3a] text-white">
      {/* HERO */}
      <section className="px-8 md:px-16 py-16 border-b border-white/10">
        <p className="uppercase tracking-[0.35em] text-sm text-violet-400 mb-4">
          Sobre Mundo Gamer
        </p>

        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Una experiencia gamer
            <span className="block text-violet-400">
              moderna, visual y dinámica
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
            Mundo Gamer es una plataforma pensada para descubrir videojuegos,
            explorar categorías, leer noticias y conocer títulos populares en
            un entorno visual atractivo, inspirado en el estilo de las grandes
            plataformas gaming.
          </p>
        </div>
      </section>

      {/* INFO PRINCIPAL */}
      <section className="px-8 md:px-16 py-14">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-violet-300">
              ¿Qué es Mundo Gamer?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Es un espacio digital donde podés encontrar información sobre
              juegos, géneros, novedades y contenido destacado del mundo gamer.
            </p>
            <p className="text-gray-400 leading-relaxed">
              El objetivo es ofrecer una navegación simple, moderna y clara,
              con un diseño oscuro y elegante que resalte imágenes, títulos y
              secciones importantes.
            </p>
          </div>

          <div className="bg-gradient-to-br from-violet-600/20 to-blue-500/10 border border-violet-400/20 rounded-3xl p-8 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Nuestra idea
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Queremos reunir en una sola página la esencia del gaming actual:
              estética moderna, contenido visual fuerte y acceso rápido a las
              secciones más importantes.
            </p>
            <ul className="space-y-3 text-gray-200">
              <li>• Juegos destacados</li>
              <li>• Noticias del momento</li>
              <li>• Categorías variadas</li>
              <li>• Diseño inmersivo y oscuro</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BLOQUES TIPO STEAM */}
      <section className="px-8 md:px-16 pb-16">
        <div className="grid lg:grid-cols-2 gap-6">
          <article className="bg-[#07134d] border border-white/10 rounded-2xl p-6 hover:scale-[1.02] transition">
            <p className="text-sm uppercase tracking-[0.25em] text-violet-400 mb-3">
              Catálogo
            </p>
            <h3 className="text-2xl font-bold mb-3">Juegos para todos</h3>
            <p className="text-gray-300 leading-relaxed">
              Desde acción y aventura hasta deportes, terror y RPG, la idea es
              mostrar variedad para distintos gustos.
            </p>
          </article>

          <article className="bg-[#07134d] border border-white/10 rounded-2xl p-6 hover:scale-[1.02] transition">
            <p className="text-sm uppercase tracking-[0.25em] text-violet-400 mb-3">
              Noticias
            </p>
            <h3 className="text-2xl font-bold mb-3">Todo actualizado</h3>
            <p className="text-gray-300 leading-relaxed">
              Un espacio para ver lanzamientos, novedades, anuncios y contenido
              gamer relevante de forma simple.
            </p>
          </article>

          
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-8 md:px-16 pb-20">
        <div className="rounded-3xl border border-violet-400/20 bg-gradient-to-r from-[#0a1454] to-[#101c68] p-8 md:p-12">
          <p className="uppercase tracking-[0.35em] text-sm text-violet-400 mb-4">
            Unite al portal
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Explorá el universo gamer
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mb-8">
            Descubrí títulos, géneros y noticias en una página con personalidad
            propia, inspirada en el estilo visual de las plataformas gaming más
            conocidas.
          </p>

        <div className="flex flex-wrap gap-4">
            <Link
              href="/juegos"
              className="bg-violet-600 hover:bg-violet-500 transition px-6 py-3 rounded-xl font-semibold"
            >
              Ver juegos
            </Link>

            <Link
              href="/"
              className="border border-violet-500 text-violet-300 hover:bg-violet-500/10 transition px-6 py-3 rounded-xl font-semibold"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}