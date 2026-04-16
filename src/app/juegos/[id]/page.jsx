import Link from 'next/link'
import React from 'react'

export default async function page({ params }) {

    const { id } = await params

    // funcion buscar juegos (localhost:3000/juegos/{id}) => me trae un objeto juego {id: 1, title: "CS2", ...}
    const juegosDestacados = [
    {
        id: 1,
        titulo: "Counter Strike 2",
        imagen: "/images/counter.jpg",
        categoria: "Shooter",
    },
    {
        id: 2,
        titulo: "Rocket League",
        imagen: "/images/rocket.jpg",
        categoria: "Deportes",
    },
    {
        id: 3,
        titulo: "Minecraft",
        imagen: "/images/minecraft.jpg",
        categoria: "aventura",
    },
    {
        id: 4,
        titulo: "Resident Evil 4",
        imagen: "/images/re4.jpg",
        categoria: "Terror",
    },
    {
        id: 5,
        titulo: "EA Sports FC 25",
        imagen: "/images/fc25.jpg",
        categoria: "Deportes",
    },
    {
        id: 6,
        titulo: "Forza Horizon 5",
        imagen: "/images/forza.jpg",
        categoria: "Carreras",
    },
    ];

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
            <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                {juegosDestacados.titulo}
                </h1>
            </div>
            <div>
                <p className='text-justify'>
                    {juegosDestacados.categoria}
                </p>         
            </div>
        </main>
    </div>
    )
}
