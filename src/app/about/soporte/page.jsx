import React from "react";
import Link from "next/link";

export default function SoportePage () {
    return (
        <main className="min-h-screen bg-[#070d2b] text-white px-6 py-10">
            <div className="max-w-5xl mx-auto">

                <div className="items-center justify-between mb-8">
                    <h1 className="text-4xl font-extrabold text-white">
                        Soporte de Mundo Gamer
                    </h1>
                    <p className="mt-5 text-violet-400">
                        ¿En que podemos ayudarte?
                    </p>
                </div>

                <div className="max-w-xl rounded-2xl bg-violet-950 p-6 shadow-lg">
                    <p className="text-gray-300 leading-relaxed mb-6">
                        Iniciá sesión en tu cuenta para revisar tus compras, consultar el estado de
                        tu perfil y recibir ayuda personalizada dentro de Mundo Gamer.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link
                        href="/"
                        className="border border-gray-500 bg-violet-600 hover:bg-violet-400 transition px-6 py-3 rounded-xl font-semibold"
                        >
                            Iniciar sesión
                        </Link>

                        <Link
                        href="/"
                        className="border border-gray-500 text-violet-300 hover:bg-violet-300/10 transition px-6 py-3 rounded-xl font-semibold"
                        >
                            Ayuda, no puedo iniciar sesión
                        </Link>
                    </div>
                </div>

                <div className="mt-5 space-y-4">
                    <div className="max-w-xl flex justify-between items-center rounded-xl bg-gray-800 p-6 shadow-lg hover:bg-gray-600">
                        <p className="text-gray-300 leading-relaxed">
                            Juegos, software, etc.
                        </p>
                        <span>
                            ➤
                        </span>
                    </div>
                    <div className="max-w-xl flex justify-between items-center rounded-xl bg-gray-800 p-6 shadow-lg hover:bg-gray-600">
                        <p className="text-gray-300 leading-relaxed">
                            Compras
                        </p>
                        <span>
                            ➤
                        </span>
                    </div>
                    <div className="max-w-xl flex justify-between items-center rounded-xl bg-gray-800 p-6 shadow-lg hover:bg-gray-600">
                        <p className="text-gray-300 leading-relaxed">
                            Mi cuenta
                        </p>
                        <span>
                            ➤
                        </span>
                    </div>
                    <div className="max-w-xl flex justify-between items-center rounded-xl bg-gray-800 p-6 shadow-lg hover:bg-gray-600">
                        <p className="text-gray-300 leading-relaxed">
                            Intercambio, regalos, mercado de la comunidad y puntos de Mundo Gamer
                        </p>
                        <span>
                            ➤
                        </span>
                    </div>
                    <div className="max-w-xl flex justify-between items-center rounded-xl bg-gray-800 p-6 shadow-lg hover:bg-gray-600">
                        <p className="text-gray-300 leading-relaxed">
                            Cliente
                        </p>
                        <span>
                            ➤
                        </span>
                    </div>
                    <div className="max-w-xl flex justify-between items-center rounded-xl bg-gray-800 p-6 shadow-lg hover:bg-gray-600">
                        <p className="text-gray-300 leading-relaxed">
                            Comunidad de Mundo Gamer
                        </p>
                        <span>
                            ➤
                        </span>
                    </div>
                    <div className="max-w-xl flex justify-between items-center rounded-xl bg-gray-800 p-6 shadow-lg hover:bg-gray-600">
                        <p className="text-gray-300 leading-relaxed">
                            Hardware de Mundo Gamer
                        </p>
                        <span>
                            ➤
                        </span>
                    </div>
                    <input
                        type="text"
                        placeholder="Otros..."
                        className="hidden md:block bg-[#11183f] border border-white/10 rounded-full px-4 py-2 text-lg outline-none placeholder:text-white/40"
                        />
                </div>
            </div>
        </main>
    )
}