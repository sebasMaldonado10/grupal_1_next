import Link from "next/link";
import Image from 'next/image';


export default function Footer() {
    return (
        <footer className="grid grid-cols-1 md:grid-cols-3 px-20 py-20 border-t border-white/10 bg-[#0b1238]">  
          {/* Columna 1 */}
          <div>
            <h1 className="text-3xl font-extrabold text-violet-400">Mundo Gamer</h1>
            <p className="text-sm font-medium text-white/80">© 2026 Mundo Gamer | Todos los derechos reservados</p>
          </div>
          
          {/* Columna 2 */}
          <div className="flex gap-12 flex-row text-sm font-medium text-white/80 px-10">
            <div className="flex flex-col gap-4">
              <Link href="/" className="hover:text-violet-400 transition">Inicio</Link>
              <Link href="/" className="hover:text-violet-400 transition">Contacto</Link>
            </div>
            <div className="flex flex-col gap-4">            
              <Link href="/" className="hover:text-violet-400 transition">Preguntas frecuentes</Link>
              <Link href="/" className="hover:text-violet-400 transition">Términos y condiciones</Link>
              <Link href={"/about/soporte"} className="hover:text-violet-400 transitions">Soporte</Link>
            </div>
          </div>

          {/* Columna 3 */}
          <div className="flex flex-col items-center gap-3 text-sm font-medium text-white/80 w-full md:w-max mx-auto">
            <h5>NUESTRAS REDES</h5>
            <div className="flex gap-4">
              <Link href="https://instagram.com" className="flex items-center justify-center w-12 h-12 border border-white/20 rounded-xl hover:bg-violet-600/20 hover:text-violet-400 transition-all">
                <Image 
                  src="/images/logo_inst.png"
                  alt="Icono de Instagram"   
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="https://facebook.com" className="flex items-center justify-center w-12 h-12 border border-white/20 rounded-xl hover:bg-violet-600/20 hover:text-violet-400 transition-all">
                <Image 
                  src="/images/logo_fb.png"
                  alt="Icono de Facebook"   
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </div>
        </footer>
    )
}