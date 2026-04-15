import Link from "next/link";

const noticias = [
  {
    titulo: "Counter Strike 2 recibe nueva actualización",
    resumen: "Cambios en mapas, armas y mejoras de rendimiento.",
  },
  {
    titulo: "Rocket League anuncia nuevo evento especial",
    resumen: "Habrá recompensas exclusivas y nuevos cosméticos.",
  },
  {
    titulo: "Los juegos más esperados del año",
    resumen: "Un repaso por los lanzamientos gamer más importantes.",
  },
  {
    titulo: "Forza Horizon 5 suma nuevos autos",
    resumen: "El nuevo pack incluye vehículos clásicos y modernos.",
  },
];

export default function NoticiasPage() {
  return (
    <main className="min-h-screen bg-[#070d2b] text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-extrabold text-violet-400">Noticias</h1>
            <p className="mt-2 text-white/70">
              Últimas novedades del mundo gamer.
            </p>
          </div>

          <Link
            href="/"
            className="border border-violet-500 text-violet-300 px-4 py-2 rounded-xl hover:bg-violet-500 hover:text-white transition"
          >
            Volver
          </Link>
        </div>

        <div className="space-y-5">
          {noticias.map((noticia) => (
            <article
              key={noticia.titulo}
              className="bg-[#0d1436] border border-white/10 rounded-2xl p-6"
            >
              <h2 className="text-2xl font-bold mb-2">{noticia.titulo}</h2>
              <p className="text-white/75">{noticia.resumen}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}