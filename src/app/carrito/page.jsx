'use client';
import { useAppContext } from "@/context/AppContext";
import React from "react";
import Boton from "../components/Boton";

export default function CarritoPage() {
  const { carrito, deleteCarrito, vaciarCarrito, isMounted } = useAppContext();

  // Mientras el contexto lee el localStorage en el cliente, mostramos carga
  if (!isMounted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-xl font-medium animate-pulse text-violet-400">Cargando tus juegos...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 py-10 transition-colors">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-3xl font-bold mb-6 text-violet-600">Tu Carrito de Compras</h1>
        <Boton href="/juegos" variant="outline">
          Volver a juegos
        </Boton>
      </div>

      {carrito.length === 0 ? (
        <div className="p-10 rounded-xl text-center bg-white/5 dark:bg-[#11183f] border border-white/10 shadow-lg">
          <p className="mb-6 text-white/70 text-lg">El carrito está vacío actualmente.</p>
          <Boton href="/juegos" variant="outline" className="px-6 py-3">
            Buscar juegos
          </Boton>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500 dark:text-white/60">Tienes {carrito.length} juego(s) seleccionado(s)</span>
            <Boton onClick={vaciarCarrito} variant="danger" className="text-sm">
              Vaciar carrito
            </Boton>
          </div>

          {carrito.map((juego) => (
            <div 
              key={juego.id} 
              className="flex justify-between items-center p-4 border border-violet-500/20 rounded-xl bg-[#11183f] dark:bg-[#11183f] shadow-lg hover:border-violet-500/50 hover:bg-[#161f4b] transition duration-200"
            >
              <div className="flex items-center gap-4">
                {juego.background_image && (
                  <img 
                    src={juego.background_image} 
                    alt={juego.name} 
                    className="w-16 h-10 object-cover rounded"
                  />
                )}
                <span className="font-semibold text-lg text-violet-400">{juego.name}</span>
              </div>
              <Boton onClick={() => deleteCarrito(juego.id)} variant="danger" className="text-sm">
                <svg width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                </svg>
              </Boton>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}