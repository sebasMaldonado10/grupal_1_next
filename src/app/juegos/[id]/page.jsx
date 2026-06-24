import Boton from "@/app/components/Boton";

async function fetchJuegosPorId(id) {
  const API_KEY = process.env.RAWG_API_KEY;

  const res = await fetch(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error al obtener el detalle del juego");
  }

  const data = await res.json();

  return data;
}

export default async function JuegoDetalle({ params }) {
  const { id } = await params;
  const juego = await fetchJuegosPorId(id);

  return (
    <main className="min-h-screen bg-[#070d2b] text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <Boton href="/juegos" variant="outline">
            ← Volver a juegos
          </Boton>
        </div>

        <h1 className="text-4xl font-extrabold text-violet-400 mb-6">
          {juego.name}
        </h1>

        {juego.background_image && (
          <img
            src={juego.background_image}
            alt={juego.name}
            className="w-full h-[400px] object-cover rounded-2xl mb-6"
          />
        )}

        <div className="bg-[#11183f] border border-violet-500/20 rounded-2xl p-6 space-y-4">
          <p>
            <span className="text-violet-300 font-semibold">Rating:</span>{" "}
            {juego.rating || "Sin rating"}
          </p>

          <p>
            <span className="text-violet-300 font-semibold">Lanzamiento:</span>{" "}
            {juego.released || "Sin fecha"}
          </p>

          <p>
            <span className="text-violet-300 font-semibold">Géneros:</span>{" "}
            {juego.genres?.map((genre) => genre.name).join(", ") ||
              "Sin géneros"}
          </p>

          <p>
            <span className="text-violet-300 font-semibold">Plataformas:</span>{" "}
            {juego.platforms
              ?.map((item) => item.platform.name)
              .join(", ") || "Sin plataformas"}
          </p>

          <div>
            <h2 className="text-2xl font-bold text-violet-400 mb-2">
              Descripción
            </h2>

            <p className="text-white/75 leading-relaxed">
              {juego.description_raw ||
                "Este juego no tiene descripción disponible."}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}