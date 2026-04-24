import Link from 'next/link'
import React from 'react'
import { juegosDestacados } from '@/app/components/juegos';


export default async function DetalleJuego({ params }) {
    const { id } = await params
    const nombreLimpio = id.replace(/-/g, " ");

    const juegoEncontrado = juegosDestacados.find(
        (j) => j.titulo.toLowerCase() === nombreLimpio.toLowerCase()
    );

    if (!juegoEncontrado) {
        return <div className="text-white p-20">404</div>;
    };
    
    return (
        <div className="flex-1 p-12 bg-[#0b1238] min-h-screen text-white">
            <h1 className="text-6xl font-black uppercase tracking-tighter text-violet-400">
                {juegoEncontrado.titulo}
            </h1>
        
            <div className="mt-8 p-6 border border-white/10 rounded-2xl bg-white/5 max-w-2xl">
                <p className="text-xl text-gray-300"> 
                {juegoEncontrado.descripcion}
                </p>
                <span className="text-white font-bold">{juegoEncontrado.precio}</span> 
            </div>

            <button className="mt-10 px-8 py-4 bg-violet-600 hover:bg-violet-500 rounded-full font-bold transition-all">
                <Link href={"#"}>Comprar ahora</Link>
            </button>
        </div>
    );
}