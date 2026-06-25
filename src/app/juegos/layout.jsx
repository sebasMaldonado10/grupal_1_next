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
    <div className="flex w-full max-w-full min-w-0 flex-row">
      <aside className="w-72 py-8 px-6 border-r border-current/10 shrink-0 hidden md:block">
        <div>
          <h4 className="text-violet-500 dark:text-violet-400 font-bold">
            Todos nuestros juegos:
          </h4>
        </div>

        <div className="space-y-6 mt-8">
          {juegosSidebar?.map((juego) => (
            <div className="border-b pb-6 border-current/10" key={juego.id}>
              <ul className="mt-2">
                <li className="pl-4 cursor-pointer transition-all duration-200 hover:scale-105 hover:text-violet-500">
                  <Link href={`/juegos/${juego.id}`}>
                    {juego.name}
                  </Link>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </aside>

      <div className="flex-1 min-w-0 w-full overflow-hidden">
        {children}
      </div>
    </div>
  );
}