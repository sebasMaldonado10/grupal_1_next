import JuegoCard from "./JuegoCard";

export default function Juegos({ juegos }) {
  return (
    <div className="flex flex-wrap gap-10 p-4 justify-center">
      {juegos?.map((juego) => (
        <JuegoCard key={juego.id} juego={juego} />
      ))}
    </div>
  );
}