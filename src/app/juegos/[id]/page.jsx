import Link from 'next/link'
import React from 'react'

const juegosDestacados = [
    {
        id: "1",
        titulo: "Counter Strike 2",
        imagen: "/images/counter.jpg",
        categoria: "Shooter",
        precio: "$14.99 USD",
        descripcion: "Durante las dos últimas décadas, Counter‑Strike ha proporcionado una experiencia competitiva de primer nivel para los millones de jugadores de todo el mundo que contribuyeron a darle forma. Ahora el próximo capítulo en la historia de CS está a punto de comenzar. Hablamos de Counter‑Strike 2.",
    },
    {
        id: "2",
        titulo: "Rocket League",
        imagen: "/images/rocket.jpg",
        categoria: "Deportes",
        precio: "Gratuita",
        descripcion: "Rocket League combina el fútbol de estilo arcade con el caos a cuatro ruedas, unos controles fáciles y una competición fluida y basada en la física.",
    },
    {
        id: "3",
        titulo: "Minecraft",
        imagen: "/images/minecraft.jpg",
        categoria: "Aventura",
        precio: "$30.00 USD",
        descripcion: "Crea todo lo que puedas imaginar, descubre misterios espeluznantes y sobrevive a la noche en el juego de aventura tipo sandbox definitivo. En Minecraft, cada partida es diferente y te esperan aventuras inolvidables a la vuelta de la esquina. Explora y crea tu camino a un mundo infinito al que le puedes dar forma bloque a bloque.",
    },
    {
        id: "4",
        titulo: "Resident Evil 4",
        imagen: "/images/re4.jpg",
        categoria: "Terror",
        precio: "$29.00 USD",
        descripcion: "La supervivencia es solo el comienzo. A seis años del desastre biológico en Raccoon City, Leon S. Kennedy, uno de los sobrevivientes, rastreó a la hija secuestrada del presidente hasta una aldea europea aislada, donde algo terrible le ha ocurrido a los lugareños.",
    },
    {
        id: "5",
        titulo: "EA Sports FC 25",
        imagen: "/images/fc25.jpg",
        categoria: "Deportes",
        precio: "$42.00 USD",
        descripcion: "EA SPORTS FC™ 25 te ofrece más formas de ganar para el club. Forma equipo con amistades en tus modos favoritos con el nuevo Rush 5 vs. 5 y lidera a tu club hacia la victoria gracias a FC IQ, que te ofrece más control táctico que nunca.",
    },
    {
        id: "6",
        titulo: "Forza Horizon 5",
        imagen: "/images/forza.jpg",
        categoria: "Carreras",
        precio: "$32.00 USD",
        descripcion: "Explora los coloridos paisajes del mundo abierto de México con una acción de conducción ilimitada y divertida en los mejores autos del mundo.",
    },
    {
        id: "7",
        titulo: "GTA V",
        imagen: "/images/gta.jpg" ,
        categoria: "Mundo abierto",
        precio: "$29.99 USD",
        descripcion: "Disfruta de los exitosos Grand Theft Auto V y Grand Theft Auto Online actualizados para una nueva generación con impresionantes gráficos, carga más rápida, audio 3D y más, aparte de contenido exclusivo para los jugadores de GTA Online.",
    },
    {
        id: "8",
        titulo: "Call Of Dutty",
        imagen: "/images/cod.jpg" ,
        categoria: "Accion",
        precio: "Gratuita",
        descripcion: "Te damos la bienvenida a Call of Duty®: Warzone™, la arena de combate gratuita para todos. Experimenta los emocionantes modos y funciones en Endgame (por tiempo limitado), Battle Royale, Black Ops Royale y Resurgimiento.",
    },
];

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

            <div className="space-y-6 mt-8">
                {juegosDestacados.map((juego, index) => (
                    <div className="border-b pb-6 border-white/10" key={index}>
                        <ul className="mt-2">
                            <li className="pl-4 cursor-pointer transition-all duration-200 hover:scale-105">
                                <Link href={`/juegos/${juego.titulo.toLowerCase().replace(/\s+/g,"-")}`}> 
                                    {juego.titulo} 
                                </Link>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>