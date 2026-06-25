'use client';
import { useAppContext } from "@/context/AppContext";
import Boton from "../components/Boton";
import React from "react";

export default function FavoritoPage () {
	const { favoritos, deleteFavorito, isMounted } = useAppContext();

	if (!isMounted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-xl font-medium animate-pulse text-violet-400">Cargando favoritos...</p>
      </div>
    );
  }

	return (
		<div className="max-w-4xl mx-auto p-6 py-10 transition-colors">
			<div className="flex items-center justify-between mb-5">
				<h1 className="text-3xl font-bold mb-6 text-violet-500">Mi lista de favoritos</h1>
				<Boton href="/juegos" variant="outline">
					Volver a juegos
				</Boton>
			</div>

			<span className="text-sm text-gray-500 dark:text-white/60">Tienes {favoritos.length} juego(s) seleccionado(s)</span>

			{favoritos.length === 0 ? (
				<div className="p-10 rounded-xl text-center bg-white/5 dark:bg-[#11183f] border border-white/10 shadow-lg">
					<p className="mb-6 text-white/70 text-lg">La lista está vacía.</p>
					<Boton href="/juegos" variant="primary" className="px-6 py-3">
            Ir a buscar juegos
          </Boton>
				</div>
			) : (
				<div className="space-y-4">
					{favoritos.map((juego) => (
						<div 
							key={juego.id} 
							className="flex justify-between items-center p-4 border border-violet-500/20 rounded-xl bg-[#11183f] dark:bg-[#11183f] shadow-lg hover:border-violet-500/50 hover:bg-[#161f4b] transition duration-200">
							<div className="flex items-center gap-4">
                {juego.background_image && (
                  <img 
                    src={juego.background_image} 
                    alt={juego.name} 
                    className="w-16 h-10 object-cover rounded shadow-md border border-white/10"
                  />
                )}
                <span className="font-semibold text-lg text-white dark:text-violet-200">{juego.name}</span>
              </div>
							
							<Boton onClick={() => deleteFavorito(juego.id)} variant="danger" className="text-sm p-2">
                <svg width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                </svg>
              </Boton>
						</div>
					))}
				</div>
			)}
		</div>
  )
}