'use client';
import React from "react";
import Boton from "../components/Boton";

export default function AboutPage() {
  return (
    <div className="w-full max-w-7xl mx-auto transition-colors">
      <section className="px-6 md:px-12 py-16 border-b border-current/10">
        
        <div className="flex items-center justify-between mb-5">
          <p className="uppercase tracking-[0.35em] text-sm text-violet-500 dark:text-violet-400 font-bold mb-4">
            Sobre Mundo Gamer
          </p>
          <Boton href="/juegos" variant="outline">
            Volver a juegos
          </Boton>
        </div>

        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Una experiencia gamer{" "}
            <span className="block text-violet-500 dark:text-violet-400">
              moderna, visual y dinámica
            </span>
          </h1>

          <p className="text-lg md:text-xl text-current opacity-80 leading-relaxed max-w-3xl">
            Mundo Gamer es una plataforma pensada para descubrir videojuegos,
            explorar categorías, leer noticias y conocer títulos populares en
            un entorno visual atractivo, inspirado en el estilo de las grandes
            plataformas gaming.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 py-14">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Columna 1 */}
          <div className="bg-white/5 dark:bg-[#11183f] border border-violet-500/10 rounded-3xl p-8 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-violet-500 dark:text-violet-300">
              ¿Qué es Mundo Gamer?
            </h2>
            <p className="text-current opacity-80 leading-relaxed mb-4">
              Es un espacio digital donde podés encontrar información sobre
              juegos, géneros, novedades y contenido destacado del mundo gamer.
            </p>
            <p className="text-current opacity-60 leading-relaxed">
              El objetivo es ofrecer una navegación simple, moderna y clara,
              con un diseño oscuro y elegante que resalte imágenes, títulos y
              secciones importantes.
            </p>
          </div>

          {/* Columna 2 */}
          <div className="bg-[#11183f]/60 dark:bg-[#11183f] border border-violet-500/20 rounded-3xl p-8 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-violet-500 dark:text-violet-300">
              Nuestra idea
            </h2>
            <p className="text-current opacity-80 leading-relaxed mb-4">
              Queremos reunir en una sola página la esencia del gaming actual:
              estética moderna, contenido visual fuerte y acceso rápido a las
              secciones más importantes.
            </p>
            <ul className="space-y-3 text-current opacity-90 font-medium">
              <li className="flex items-center gap-2 text-violet-500 dark:text-violet-400">⚡ <span className="text-current opacity-90">Juegos destacados</span></li>
              <li className="flex items-center gap-2 text-violet-500 dark:text-violet-400">⚡ <span className="text-current opacity-90">Noticias del momento</span></li>
              <li className="flex items-center gap-2 text-violet-500 dark:text-violet-400">⚡ <span className="text-current opacity-90">Categorías variadas</span></li>
              <li className="flex items-center gap-2 text-violet-500 dark:text-violet-400">⚡ <span className="text-current opacity-90">Diseño inmersivo y oscuro</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* BLOQUES TIPO STEAM */}
      <section className="px-6 md:px-12 pb-16">
        <div className="grid md:grid-cols-2 gap-6">
          
          <article className="bg-[#0f1535] dark:bg-[#11183f] border border-violet-500/10 rounded-2xl p-6 hover:border-violet-500/40 hover:scale-[1.01] transition duration-300">
            <p className="text-sm uppercase tracking-[0.25em] text-violet-500 dark:text-violet-400 font-bold mb-3">
              Catálogo
            </p>
            <h3 className="text-2xl font-bold mb-3">Juegos para todos</h3>
            <p className="text-current opacity-75 leading-relaxed">
              Desde acción y aventura hasta deportes, terror y RPG, la idea es
              mostrar variedad para distintos gustos.
            </p>
          </article>

          <article className="bg-[#0f1535] dark:bg-[#11183f] border border-violet-500/10 rounded-2xl p-6 hover:border-violet-500/40 hover:scale-[1.01] transition duration-300">
            <p className="text-sm uppercase tracking-[0.25em] text-violet-500 dark:text-violet-400 font-bold mb-3">
              Noticias
            </p>
            <h3 className="text-2xl font-bold mb-3">Todo actualizado</h3>
            <p className="text-current opacity-75 leading-relaxed">
              Un espacio para ver lanzamientos, novedades, anuncios y contenido
              gamer relevante de forma simple.
            </p>
          </article>

        </div>
      </section>

      <section className="px-6 md:px-12 pb-20">
        <div className="rounded-3xl border border-violet-500/20 bg-[#11183f] dark:bg-[#11183f] p-8 md:p-12 shadow-2xl">
          <p className="uppercase tracking-[0.35em] text-sm text-violet-500 dark:text-violet-400 font-bold mb-4">
            Unite al portal
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Explorá el universo gamer
          </h2>
          <p className="text-current opacity-75 text-lg max-w-2xl mb-8">
            Descubrí títulos, géneros y noticias en una página con personalidad
            propia, inspirada en el estilo visual de las plataformas gaming más
            conocidas.
          </p>

          <div className="flex flex-wrap gap-4">
            {/* Reemplazados por tus componentes Boton oficiales */}
            <Boton href="/juegos" variant="primary" className="px-6 py-3">
              Ver juegos
            </Boton>

            <Boton href="/" variant="outline" className="px-6 py-3">
              Volver al inicio
            </Boton>
          </div>
        </div>
      </section>
    </div>
  );
}