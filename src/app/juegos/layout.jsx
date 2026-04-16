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
                <h4>Todos nuestros juegos:</h4>
            </div>

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
        </aside>
        {children}
    </div>
    )
}
