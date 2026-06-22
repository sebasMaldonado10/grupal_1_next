'use client';
import { useAppContext } from "@/context/AppContext";
import Link from "next/link";
import React from "react";

export default function CarritoPage() {
  const { carrito, deleteCarrito, vaciarCarrito, isMounted } = useAppContext();

  // Mientras el contexto lee el localStorage en el cliente, mostramos carga
  if (!isMounted) {
    return (
      <main className="min-h-screen bg-slate-100 text-slate-900 dark:bg-[#070d2b] dark:text-white flex items-center justify-center">
        <p className="text-xl font-medium animate-pulse text-violet-500">Cargando tus juegos...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900 dark:bg-[#070d2b] dark:text-white transition-colors py-10">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-violet-500">Tu Carrito de Compras</h1>

        {carrito.length === 0 ? (
          <div className="border p-10 rounded-xl text-center bg-white dark:bg-[#11183f] border-violet-500/20 shadow-lg">
            <p className="mb-6 text-gray-500 dark:text-white/70 text-lg">El carrito está vacío actualmente.</p>
            <Link href="/" className="bg-violet-600 hover:bg-violet-500 text-white px-6 py-3 rounded-lg transition font-semibold inline-block">
              Ir a buscar juegos
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-500 dark:text-white/60">Tienes {carrito.length} juego(s) seleccionado(s)</span>
              <button 
                onClick={vaciarCarrito} 
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition cursor-pointer"
              >
                Vaciar Todo
              </button>
            </div>

            {carrito.map((juego) => (
              <div 
                key={juego.id} 
                className="flex justify-between items-center p-4 border border-violet-500/10 rounded-xl bg-white dark:bg-[#11183f] shadow-sm hover:border-violet-500/30 transition duration-200"
              >
                <div className="flex items-center gap-4">
                  {juego.background_image && (
                    <img 
                      src={juego.background_image} 
                      alt={juego.name} 
                      className="w-16 h-10 object-cover rounded"
                    />
                  )}
                  <span className="font-semibold text-lg">{juego.name}</span>
                </div>
                <button 
                  onClick={() => deleteCarrito(juego.id)}
                  className="bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer"
                >
                  Quitar
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}