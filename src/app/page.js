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

//esto no se donde ponerlo para poder importarlo desde otras pags
export const juegosDestacados = [
  {
    id: "1",
    titulo: "Counter Strike 2",
    imagen: "/images/counter.jpg",
    categoria: "Shooter",
    precio: "$14.99 USD",
    descripcion: "Durante las dos últimas décadas, Counter‑Strike ha proporcionado una experiencia competitiva de primer nivel para los millones de jugadores de todo el mundo que contribuyeron a darle forma. Ahora el próximo capítulo en la historia de CS está a punto de comenzar. Hablamos de Counter‑Strike 2.",
  },
  {
    id: "2",
    titulo: "Rocket League",
    imagen: "/images/rocket.jpg",
    categoria: "Deportes",
    precio: "Gratuita",
    descripcion: "Rocket League combina el fútbol de estilo arcade con el caos a cuatro ruedas, unos controles fáciles y una competición fluida y basada en la física.",
  },
  {
    id: "3",
    titulo: "Minecraft",
    imagen: "/images/minecraft.jpg",
    categoria: "Aventura",
    precio: "$30.00 USD",
    descripcion: "Crea todo lo que puedas imaginar, descubre misterios espeluznantes y sobrevive a la noche en el juego de aventura tipo sandbox definitivo. En Minecraft, cada partida es diferente y te esperan aventuras inolvidables a la vuelta de la esquina. Explora y crea tu camino a un mundo infinito al que le puedes dar forma bloque a bloque.",
  },
  {
    id: "4",
    titulo: "Resident Evil 4",
    imagen: "/images/re4.jpg",
    categoria: "Terror",
    precio: "$29.00 USD",
    descripcion: "La supervivencia es solo el comienzo. A seis años del desastre biológico en Raccoon City, Leon S. Kennedy, uno de los sobrevivientes, rastreó a la hija secuestrada del presidente hasta una aldea europea aislada, donde algo terrible le ha ocurrido a los lugareños.",
  },
  {
    id: "5",
    titulo: "EA Sports FC 25",
    imagen: "/images/fc25.jpg",
    categoria: "Deportes",
    precio: "$42.00 USD",
    descripcion: "EA SPORTS FC™ 25 te ofrece más formas de ganar para el club. Forma equipo con amistades en tus modos favoritos con el nuevo Rush 5 vs. 5 y lidera a tu club hacia la victoria gracias a FC IQ, que te ofrece más control táctico que nunca.",
  },
  {
    id: "6",
    titulo: "Forza Horizon 5",
    imagen: "/images/forza.jpg",
    categoria: "Carreras",
    precio: "$32.00 USD",
    descripcion: "Explora los coloridos paisajes del mundo abierto de México con una acción de conducción ilimitada y divertida en los mejores autos del mundo.",
  },
  {
    id: "7",
    titulo: "GTA V",
    imagen: "/images/gta.jpg" ,
    categoria: "Mundo abierto",
    precio: "$29.99 USD",
    descripcion: "Disfruta de los exitosos Grand Theft Auto V y Grand Theft Auto Online actualizados para una nueva generación con impresionantes gráficos, carga más rápida, audio 3D y más, aparte de contenido exclusivo para los jugadores de GTA Online.",
  },
  {
    id: "8",
    titulo: "Call Of Dutty",
    imagen: "/images/cod.jpg" ,
    categoria: "Accion",
    precio: "Gratuita",
    descripcion: "Te damos la bienvenida a Call of Duty®: Warzone™, la arena de combate gratuita para todos. Experimenta los emocionantes modos y funciones en Endgame (por tiempo limitado), Battle Royale, Black Ops Royale y Resurgimiento.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#070d2b] text-white">
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