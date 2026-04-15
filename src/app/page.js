import Link from "next/link";
import Image from "next/image";

const categorias = [
  "Acción",
  "Shooter",
  "Carreras",
  "Deportes",
  "Terror",
  "aventura",
  "Mundo abierto",
];

const juegosDestacados = [
  {
    titulo: "Counter Strike 2",
    imagen: "/images/counter.jpg",
    categoria: "Shooter",
  },
  {
    titulo: "Rocket League",
    imagen: "/images/rocket.jpg",
    categoria: "Deportes",
  },
  {
    titulo: "Minecraft",
    imagen: "/images/minecraft.jpg",
    categoria: "aventura",
  },
  {
    titulo: "Resident Evil 4",
    imagen: "/images/re4.jpg",
    categoria: "Terror",
  },
  {
    titulo: "EA Sports FC 25",
    imagen: "/images/fc25.jpg",
    categoria: "Deportes",
  },
  {
    titulo: "Forza Horizon 5",
    imagen: "/images/forza.jpg",
    categoria: "Carreras",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#070d2b] text-white">
      <header className="border-b border-white/10 bg-[#0b1238]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold text-violet-400">
            Mundo Gamer
          </h1>

          <nav className="hidden md:flex gap-8 text-sm font-medium text-white/80">
            <Link href="/" className="hover:text-violet-400 transition">
              Inicio
            </Link>
            <Link href="/home/juegos" className="hover:text-violet-400 transition">
              Juegos
            </Link>
            <Link href="/home/noticias" className="hover:text-violet-400 transition">
              Noticias
            </Link>
            <a href="#categorias" className="hover:text-violet-400 transition">
              Categorías
            </a>
          </nav>

          <input
            type="text"
            placeholder="Buscar juego..."
            className="hidden md:block bg-[#11183f] border border-white/10 rounded-full px-4 py-2 text-sm outline-none placeholder:text-white/40"
          />
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2">
          <p className="text-violet-400 uppercase tracking-[0.25em] text-sm mb-3">
            Tu portal gamer
          </p>

          <h2 className="text-5xl font-extrabold mb-4 leading-tight">
            Descubrí los mejores
            <span className="block text-violet-400">juegos del momento</span>
          </h2>

          <p className="text-lg text-white/75 mb-6">
            Explorá juegos, noticias, categorías y contenido gamer en una sola
            página con estilo moderno y oscuro.
          </p>

          <div className="flex gap-4 mb-6">
            <Link
              href="/home/juegos"
              className="bg-violet-600 px-5 py-3 rounded-xl font-semibold hover:bg-violet-500 transition"
            >
              Ver juegos
            </Link>

            <Link
              href="/home/noticias"
              className="border border-violet-500 text-violet-300 px-5 py-3 rounded-xl font-semibold hover:bg-violet-500 hover:text-white transition"
            >
              Ver noticias
            </Link>
          </div>

          <p className="text-white/65">
            En Mundo Gamer encontrarás los mejores juegos para disfrutar,
            distintas categorías y una comunidad enorme para compartir.
            ¡Suerte, gamer!
          </p>
        </div>

        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          <Image
            src="/images/counter.jpg"
            width={400}
            height={250}
            alt="Counter Strike"
            className="rounded-2xl object-cover w-full h-[180px]"
          />
          <Image
            src="/images/rocket.jpg"
            width={400}
            height={250}
            alt="Rocket League"
            className="rounded-2xl object-cover w-full h-[180px]"
          />
          <Image
            src="/images/gamer.jpg"
            width={900}
            height={500}
            alt="Setup gamer"
            className="rounded-2xl object-cover w-full h-[260px] col-span-2"
          />
        </div>
      </section>

      <section id="categorias" className="max-w-7xl mx-auto px-6 pb-8">
        <h3 className="text-2xl font-bold mb-5">Categorías</h3>

        <div className="flex flex-wrap gap-3">
          {categorias.map((categoria) => (
            <Link
              key={categoria}
              href={`/home/juegos?categoria=${encodeURIComponent(categoria)}`}
              className="bg-[#11183f] border border-violet-500/20 text-violet-300 px-5 py-2 rounded-full text-sm font-medium hover:bg-violet-600 hover:text-white transition"
            >
              {categoria}
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-3xl font-bold">Juegos destacados</h3>

          <Link
            href="/home/juegos"
            className="bg-violet-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-violet-500 transition"
          >
            Ver más
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {juegosDestacados.map((juego) => (
            <article
              key={juego.titulo}
              className="bg-[#0d1436] border border-white/10 rounded-2xl overflow-hidden"
            >
              <Image
                src={juego.imagen}
                width={500}
                height={700}
                alt={juego.titulo}
                className="w-full h-[320px] object-cover"
              />

              <div className="p-4">
                <p className="text-violet-400 text-sm mb-1">{juego.categoria}</p>
                <h4 className="text-xl font-bold">{juego.titulo}</h4>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}