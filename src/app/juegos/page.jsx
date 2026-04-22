import Link from "next/link";
import Image from "next/image";

const juegos = [
  { id: "1", titulo: "Counter Strike 2", categoria: "Shooter", imagen: "/images/counter.jpg" },
  { id: "2", titulo: "Rocket League", categoria: "Deportes", imagen: "/images/rocket.jpg" },
  { id: "3", titulo: "Minecraft", categoria: "Sandbox", imagen: "/images/minecraft.jpg" },
  { id: "4", titulo: "Resident Evil 4", categoria: "Terror", imagen: "/images/re4.jpg" },
  { id: "5", titulo: "EA Sports FC 25", categoria: "Deportes", imagen: "/images/fc25.jpg" },
  { id: "6", titulo: "Forza Horizon 5", categoria: "Carreras", imagen: "/images/forza.jpg" },
  { id: "7", titulo: "GTA V", categoria: "Mundo abierto", imagen: "/images/gta.jpg" },
  { id: "8", titulo: "Call of Duty", categoria: "Acción", imagen: "/images/cod.jpg" },
];

export default async function JuegosPage({ searchParams }) {
  const params = await searchParams;
  const categoriaSeleccionada = params?.categoria;

  const juegosFiltrados = categoriaSeleccionada
    ? juegos.filter((juego) => juego.categoria === categoriaSeleccionada)
    : juegos;

  return (
    <main className="min-h-screen bg-[#070d2b] text-white px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-extrabold text-violet-400">Juegos</h1>
            <p className="mt-2 text-white/70">
              {categoriaSeleccionada
                ? `Mostrando categoría: ${categoriaSeleccionada}`
                : "Explorá títulos destacados por categoría."}
            </p>
          </div>

          <Link
            href="/"
            className="border border-violet-500 text-violet-300 px-4 py-2 rounded-xl hover:bg-violet-500 hover:text-white transition"
          >
            Volver
          </Link>
        </div>

        {categoriaSeleccionada && (
          <div className="mb-6">
            <Link
              href="juegos"
              className="inline-block bg-violet-600 px-4 py-2 rounded-lg hover:bg-violet-500 transition"
            >
              Ver todos
            </Link>
          </div>
        )}

        {juegosFiltrados.length === 0 ? (
          <div className="bg-[#0d1436] border border-white/10 rounded-2xl p-6">
            <p className="text-white/75">
              No hay juegos cargados para esta categoría.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {juegosFiltrados.map((juego) => (
              <article
                key={juego.titulo}
                className="bg-[#0d1436] border border-white/10 rounded-2xl overflow-hidden"
              >
                <Image
                  src={juego.imagen}
                  width={500}
                  height={700}
                  alt={juego.titulo}
                  className="w-full h-[300px] object-cover"
                />

                <div className="p-4">
                  <p className="text-violet-400 text-sm mb-1">{juego.categoria}</p>
                  <h2 className="text-lg font-bold">{juego.titulo}</h2>
                  <span><Link href={"#"}>Ver mas</Link></span>
                </div>

              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}