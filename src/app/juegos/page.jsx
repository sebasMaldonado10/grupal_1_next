import Juegos from "../components/Juegos";
import Categorias from "../components/Categorias";
import Boton from "../components/Boton";

// Obtenemos los géneros
async function fetchGenres() {
  const API_KEY = process.env.RAWG_API_KEY;

  const res = await fetch(`https://api.rawg.io/api/genres?key=${API_KEY}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error al obtener los géneros");
  }

  const data = await res.json();

  return data.results;
}

// Obtenemos los juegos
async function fetchJuegos(categoriaSeleccionada) {
  const API_KEY = process.env.RAWG_API_KEY;

  let url = `https://api.rawg.io/api/games?key=${API_KEY}`;

  if (categoriaSeleccionada) {
    url += `&genres=${categoriaSeleccionada}`;
  }

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error al obtener los juegos");
  }

  const data = await res.json();

  return data.results;
}

// Usamos los datos de las 2 APIS
export default async function JuegosPage({ searchParams }) {
  const params = await searchParams;
  const categoriaSeleccionada = params?.categoria;

  const genres = await fetchGenres();
  const juegos = await fetchJuegos(categoriaSeleccionada);

  return (
    <main className="min-h-screen bg-[#070d2b] text-white px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-extrabold text-violet-400">
              Juegos
            </h1>

            <p className="mt-2 text-white/70">
              {categoriaSeleccionada
                ? `Mostrando categoría: ${categoriaSeleccionada}`
                : "Explorá títulos destacados por categoría."}
            </p>
          </div>

          <Boton href="/" variant="outline">
            Volver
          </Boton>
        </div>

        <Categorias genres={genres} />

        {categoriaSeleccionada && (
          <div className="mb-8">
            <Boton href="/juegos">Ver todos</Boton>
          </div>
        )}

        {juegos.length === 0 ? (
          <div className="bg-[#0d1436] border border-white/10 rounded-2xl p-6">
            <p className="text-white/75">
              No hay juegos cargados para esta categoría.
            </p>
          </div>
        ) : (
          <Juegos juegos={juegos} />
        )}
      </div>
    </main>
  );
}