import Link from "next/link";

export default function Navbar () {
    return (
        <header className="border-b border-white/10 bg-[#0b1238]">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-3xl font-extrabold text-violet-400">
              Mundo Gamer
            </Link>
      
            <nav className="hidden md:flex gap-8 text-base font-medium text-white/80">
                <Link href="/" className="hover:text-violet-400 transition">
                  Inicio
                </Link>
                <Link href="/juegos" className="hover:text-violet-400 transition">
                  Juegos
                </Link>
                <Link href="/noticias" className="hover:text-violet-400 transition">
                  Noticias
                </Link>
                <Link href="/about" className="hover:text-violet-400 transition">
                  Acerca De
                </Link>
            </nav>
      
            <input
              type="text"
              placeholder="Buscar juego..."
              className="hidden md:block bg-[#11183f] border border-white/10 rounded-full px-4 py-2 text-sm outline-none placeholder:text-white/40"
            />
          </div>
        </header>
    )
}