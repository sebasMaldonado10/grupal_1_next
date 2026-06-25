'use client';
import { useAppContext } from "@/context/AppContext";

export default function JuegoDetalleAcciones({ juego }) {
  const {
    carrito,
    favoritos,
    addCarrito,
    deleteCarrito,
    addFavorito,
    deleteFavorito,
    isMounted,
  } = useAppContext();

  const esFavorito = isMounted ? favoritos.some((fav) => fav.id === juego.id) : false;
  const enCarrito = isMounted ? carrito.some((item) => item.id === juego.id) : false;

  const manejarFavorito = () => {
    if (esFavorito) {
      deleteFavorito(juego.id);
    } else {
      addFavorito(juego);
    }
  };

  const manejarCarrito = () => {
    if (enCarrito) {
      deleteCarrito(juego.id);
    } else {
      addCarrito(juego);
    }
  };

  if (!isMounted) {
    return <div className="h-12 w-48 bg-white/5 animate-pulse rounded-xl" />;
  }

  return (
    <div className="flex flex-wrap gap-4 py-2">
      <div className="flex items-end justify-end p-3 mt-3">
        <button
          onClick={manejarCarrito}
          className="flex items-center justify-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-white/30 transition text-amber-400 dark:text-violet-300"
          title={enCarrito ? "Quitar del carrito" : "Agregar al carrito"}
        >
          {enCarrito ? (
            <svg
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cart-check-fill"
              viewBox="0 0 16 16"
            >
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708" />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cart"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
          )}
        </button>

        <button
          onClick={manejarFavorito}
          className="flex items-center justify-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-white/30 transition text-amber-400 dark:text-violet-300"
          title={esFavorito ? "Quitar de favoritos" : "Agregar a favoritos"}
        >
          {esFavorito ? (
            <svg
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-star"
              viewBox="0 0 16 16"
            >
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
            </svg>
          )}
        </button>
      </div>
		</div>
  );
}