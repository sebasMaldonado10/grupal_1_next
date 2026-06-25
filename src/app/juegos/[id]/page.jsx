import Boton from "@/app/components/Boton";
import JuegoDetalleAcciones from "@/app/components/DetalleJuegoAcciones";

async function fetchJuegosPorId(id) {
  const API_KEY = process.env.RAWG_API_KEY;
  const res = await fetch(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Error al obtener el detalle del juego");
  return await res.json();
}

export default async function JuegoDetalle({ params }) {
  const { id } = await params;
  const juego = await fetchJuegosPorId(id);

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-10 transition-colors">
      <div className="flex justify-between mb-6">
        <h1 className="text-4xl font-extrabold text-violet-500 dark:text-violet-400">
          {juego.name}
        </h1>
        <Boton href="/juegos" variant="outline">
          Volver a juegos
        </Boton>
      </div>

      {juego.background_image && (
        <img
          src={juego.background_image}
          alt={juego.name}
          className="w-full h-[400px] object-cover rounded-2xl mb-6 shadow-xl border border-violet-500/10"
        />
      )}

      <div className="relative bg-[#11183f] dark:bg-[#11183f] border border-violet-500/20 rounded-2xl p-6 space-y-5 shadow-lg">
        <div className="absolute top-4 right-4 flex gap-2">
          <JuegoDetalleAcciones juego={juego} />
        </div>

        <div className="flex flex-col gap-4 border-t border-b border-white/5 py-4 text-white">
          <p>
            <span className="text-violet-400 font-bold">Rating:</span>{" "}
            {juego.rating || "Sin rating"} 
          </p>
          <p>
            <span className="text-violet-400 font-bold">Lanzamiento:</span>{" "}
            {juego.released || "Sin fecha"}
          </p>
          <p className="sm:col-span-2">
            <span className="text-violet-400 font-bold">Géneros:</span>{" "}
            {juego.genres?.map((genre) => genre.name).join(", ") || "Sin géneros"}
          </p>
          <p className="sm:col-span-2">
            <span className="text-violet-400 font-bold">Plataformas:</span>{" "}
            {juego.platforms?.map((item) => item.platform.name).join(", ") || "Sin plataformas"}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-violet-500 dark:text-violet-400 mb-3">
            Descripción
          </h2>
          <p className="text-white/80 dark:text-white/90 leading-relaxed text-sm">
            {juego.description_raw || "Este juego no tiene descripción disponible."}
          </p>
        </div>
      </div>
    </div>
  );
}