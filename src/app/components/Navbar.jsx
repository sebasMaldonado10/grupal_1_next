'use client';
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import { useEffect } from "react";

export default function Navbar () {

  const { tema, cambiarTema, carrito } = useAppContext();

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
            <Link href="/favoritos" className="hover:text-violet-400 transition">
              Mis favoritos
            </Link>
            <Link href="/about" className="hover:text-violet-400 transition">
              Acerca De
            </Link>
        </nav>
  
        <div className="flex gap-3">
          <button 
          onClick={cambiarTema}
          className="cursor-pointer p-2 rounded-lg bg-white/5 hover:bg-white/10 transition text-amber-400 dark:text-violet-300"
          title={tema === 'light' ? "Cambiar a Modo Oscuro" : "Cambiar a Modo Claro"}>
            {tema === 'light' ? (
              <svg width="16" height="16" fill="currentColor" className="bi bi-brightness-high" viewBox="0 0 16 16">
                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
              </svg>
            ) : (
              <svg width="16" height="16" fill="currentColor" className="bi bi-moon" viewBox="0 0 16 16">
                <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
              </svg>
            )}
            
          </button>

          <Link href="/carrito" className="cursor-pointer p-2 rounded-lg bg-white/5 hover:bg-white/10 transition text-amber-400 dark:text-violet-300">
            <svg width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg>
          </Link>
        </div>
      </div>
    </header>
  )
}