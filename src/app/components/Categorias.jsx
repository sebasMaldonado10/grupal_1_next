import Link from "next/link";

export default function Categorias({ genres }) {
  return (
    <section className="mb-10 w-full max-w-full overflow-hidden">
      <h2 className="text-2xl font-bold mb-4">Categorías</h2>

      <div className="flex flex-nowrap overflow-x-auto gap-3 pb-3 min-w-0 snap-x scrollbar-custom scroll-smooth">
        {genres?.map((genre) => (
          <Link
            key={genre.id}
            href={`/juegos?categoria=${genre.slug}`}
            className="whitespace-nowrap bg-[#11183f] border border-violet-500/30 text-violet-300 px-5 py-2 rounded-full hover:bg-violet-600 hover:text-white transition duration-300 snap-start"
          >
            {genre.name}
          </Link>
        ))}
      </div>
    </section>
  );
}