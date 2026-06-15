export default function Juegos({ juegos }) {
  return (
    <div className="flex flex-wrap gap-10 p-4 justify-center">
      {juegos.map((juego) => (
        <article
          key={juego.id}
          className="w-[340px] rounded-xl border-4 border-double border-purple-500 text-violet-300 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 p-4 hover:bg-violet-800/50 hover:text-white transition"
        >
          <h3 className="text-lg italic mb-4 min-h-[56px]">
            {juego.name}
          </h3>

          <img
            src={juego.background_image}
            alt={juego.name}
            className="w-full h-44 object-cover rounded-lg mb-4"
          />

          <p className="text-base">Rating: {juego.rating}</p>
          <p className="text-base">Lanzamiento: {juego.released}</p>
        </article>
      ))}
    </div>
  );
}
