import Link from "next/link"

export default function JuegosLayout ({ children }) {
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
    <div className="flex min-h-screen bg-[#0b1238]">
        <aside className="w-72 py-8 px-6 border-r border-white/10">
            <div>
                <h1 className="text-4xl font-bold">Juegos</h1>
                <p>Todas nuestros juegos:</p>
            </div>

            <div className="space-y-6 mt-8">
                {juegosDestacados.map((juego, index) => (
                    <div className="border-b pb-6 border-zinc-700" key={index}>
                        <h3 className="text-xl font-semibold">{juego.titulo}</h3>
                        
                    </div>
                ))}
            </div>
        </aside>
        {children}
    </div>
    )
}
