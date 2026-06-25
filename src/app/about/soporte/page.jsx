'use client';
import React from "react";
import Boton from "@/app/components/Boton";

export default function SoportePage() {
  // Lista de opciones estandarizada
  const opcionesSoporte = [
    "Juegos, software, etc.",
    "Compras",
    "Mi cuenta",
    "Intercambio, regalos, mercado de la comunidad y puntos de Mundo Gamer",
    "Cliente",
    "Comunidad de Mundo Gamer",
    "Hardware de Mundo Gamer"
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-10 transition-colors">
      
      {/* Encabezado */}
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-violet-500 dark:text-violet-400">
          Soporte de Mundo Gamer
        </h1>
        <p className="mt-2 text-current opacity-75 text-lg">
          ¿En qué podemos ayudarte?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        
        {/* Columna Izquierda: Tarjeta de Inicio de Sesión */}
        <div className="md:col-span-1 p-6 rounded-2xl bg-[#11183f] dark:bg-[#11183f] border border-violet-500/20 shadow-lg">
          <p className="text-white/80 dark:text-white/90 leading-relaxed mb-6 text-sm">
            Iniciá sesión en tu cuenta para revisar tus compras, consultar el estado de
            tu perfil y recibir ayuda personalizada dentro de Mundo Gamer.
          </p>

          <div className="flex flex-col gap-3">
            {/* Usamos tus variantes globales del componente Boton */}
            <Boton href="/" variant="primary" className="w-full text-center">
              Iniciar sesión
            </Boton>
            
            <Boton href="/" variant="ghost" className="w-full text-center text-xs">
              Ayuda, no puedo iniciar sesión
            </Boton>
          </div>
        </div>

        {/* Columna Derecha: Opciones y Buscador */}
        <div className="md:col-span-2 space-y-3">
          {opcionesSoporte.map((opcion, index) => (
            <div 
              key={index} 
              // Reemplazamos bg-gray-800 por los fondos gamer transparentes y adaptables
              className="flex justify-between items-center p-4 border border-violet-500/10 rounded-xl bg-[#0f1535] dark:bg-[#11183f] shadow-sm hover:border-violet-500/40 hover:bg-[#161f4b] transition duration-200 cursor-pointer group"
            >
              <p className="text-white dark:text-violet-100 font-medium leading-relaxed pr-4">
                {opcion}
              </p>
              {/* Una flecha sutil con animación al hacer hover en la tarjeta */}
              <span className="text-violet-400 group-hover:translate-x-1 transition duration-200">
                ➔
              </span>
            </div>
          ))}

          {/* Campo de búsqueda opcional estilizado */}
          <div className="pt-4">
            <input
              type="text"
              placeholder="Otros problemas..."
              className="w-full md:max-w-md bg-[#0f1535] dark:bg-[#11183f] border border-violet-500/20 focus:border-violet-500 rounded-xl px-4 py-3 text-white placeholder:text-white/40 outline-none transition duration-200"
            />
          </div>
        </div>

      </div>
    </div>
  );
}