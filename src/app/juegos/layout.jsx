import Link from "next/link";

async function fetchJuegosSidebar() {
  const API_KEY = process.env.RAWG_API_KEY;

  const res = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=8`);
  const data = await res.json();

  return data.results;
}

export default async function JuegosLayout({ children }) {
  const juegosSidebar = await fetchJuegosSidebar();

  return (
    <div className="flex min-h-screen bg-[#0b1238] text-white">
      <aside className="w-72 py-8 px-6 border-r border-white/10">
        <div>
          <h4 className="text-violet-400 font-bold">
            Todos nuestros juegos:
          </h4>
        </div>

        <div className="space-y-6 mt-8">
          {juegosSidebar?.map((juego) => (
            <div className="border-b pb-6 border-white/10" key={juego.id}>
              <ul className="mt-2">
                <li className="pl-4 cursor-pointer transition-all duration-200 hover:scale-105">
                  <Link href={`/juegos/${juego.id}`}>
                    {juego.name}
                  </Link>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </aside>

      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}