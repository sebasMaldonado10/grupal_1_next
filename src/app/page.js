import Link from "next/link";
import Image from "next/image";
import Juegos from "./components/Juegos";

// Consumimos la API
async function fetchJuegos() {

  const API_KEY = process.env.RAWG_API_KEY;    

  const res = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}`);
  const data = await res.json();
  console.log(data)  
  return data.results;
}

async function HomePage() {
  const juegos = await fetchJuegos();
  
  return (  
    
    <main className="min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2">
          <p className="text-violet-400 uppercase tracking-[0.25em] text-sm mb-3">Tu portal gamer</p>

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
              href="juegos"
              className="bg-violet-600 px-5 py-3 rounded-xl font-semibold hover:bg-violet-500 transition"
            >
              Ver juegos
            </Link>

            <Link
              href="noticias"
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
          {Array.from(
            new Set(juegos?.flatMap((juego) => juego.genres?.map((g) => g.name) || []))
          ).map((categoria) => (
            <Link
              key={categoria}
              href={`/juegos?categoria=${encodeURIComponent(categoria.toLowerCase())}`}
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
            href="/juegos"
            className="bg-violet-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-violet-500 transition"
          >
            Ver más
          </Link>
        </div>
        <div>
      
          <Juegos juegos={juegos} />
          
        </div>
      </section>
    </main>
  );
}

export default HomePage;