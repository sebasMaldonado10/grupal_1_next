'use client';
import { useAppContext } from "@/context/AppContext";
import Link from "next/link";
import React from "react";

export default function FavoritoPage () {
	const { favoritos, deleteFavorito, isMounted } = useAppContext();

  if (!isMounted) return <p className="text-center p-10 text-white">Cargando favoritos...</p>;

return (
  <main className="min-h-screen bg-slate-100 text-slate-900 dark:bg-[#070d2b] dark:text-white transition-colors">
		<div className="max-w-4xl mx-auto p-6">
			<h1 className="text-3xl font-bold mb-6 text-violet-500">Mi lista de favoritos</h1>

			{favoritos.length === 0 ? (
				<div className="border p-6 rounded-xl text-center bg-white dark:bg-[#11183f]">
					<p className="mb-4 text-gray-500 dark:text-white/70">La lista está vacía.</p>
					<Link href="/juegos" className="bg-violet-600 text-white px-4 py-2 rounded-lg">
						Ir a buscar juegos
					</Link>
				</div>
			) : (
				<div className="space-y-4">
					{favoritos.map((juego) => (
						<div key={juego.id} className="flex justify-between items-center p-4 border rounded-xl bg-white dark:bg-[#11183f]">
							<span className="font-semibold">{juego.name}</span>
							<button 
								onClick={() => deleteFavorito(juego.id)}
								className="bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white px-3 py-1 rounded-lg transition"
							>
								<svg width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
									<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
									<path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
								</svg>
							</button>
						</div>
					))}
				</div>
			)}
		</div>
  </main>
  )
}