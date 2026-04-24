import Link from "next/link"
import { juegosDestacados } from "../components/juegos";

export default function JuegosLayout ({ children }) {

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