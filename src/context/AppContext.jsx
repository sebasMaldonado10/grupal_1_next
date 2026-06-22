'use client';

import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children}) {
	const [tema, setTema] = useState('light');
  const [favoritos, setFavoritos] = useState([]);
	const [carrito, setCarrito] = useState([]);
	const [isMounted, setIsMounted] = useState(false);

	//Cargar datos del localStorage 
	useEffect(() => {
		//setIsMounted(true);

		const savedTema = localStorage.getItem("my_theme");
		const savedFavoritos = localStorage.getItem("my_favorites");
		const savedCarrito = localStorage.getItem("my_cart");

		let temaFinal = 'light';
    let favoritosFinal = [];
    let carritoFinal = [];

		if (savedTema) {
			try {
        temaFinal = JSON.parse(savedTema);
      } catch (e) {
        temaFinal = 'light';
      }
		} else {
			window.localStorage.setItem("my_theme", JSON.stringify('light'));
		}

		if (savedFavoritos) {
			try {
        favoritosFinal = JSON.parse(savedFavoritos);
      } catch (e) {
        favoritosFinal = [];
      }
		} else {
			window.localStorage.setItem("my_favorites", JSON.stringify([]));
		}

		if (savedCarrito) {
      try {
        carritoFinal = JSON.parse(savedCarrito);
      } catch (e) {
        carritoFinal = [];
      }
    } else {
      localStorage.setItem("my_cart", JSON.stringify([]));
    }

		setTema(temaFinal);
    setFavoritos(favoritosFinal);
    setCarrito(carritoFinal);
    setIsMounted(true);

	}, []);

	useEffect(() => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      if (tema === 'dark') {
        root.classList.add('dark');
        root.classList.remove('light');
      } else {
        root.classList.add('light');
        root.classList.remove('dark');
      }
    }
  }, [tema]); 

	//helpers

	//tema
	const cambiarTema = () => {
    setTema((prevTema) => {
      const nuevoTema = prevTema === 'light' ? 'dark' : 'light';
      if (typeof window !== "undefined") {
        localStorage.setItem("my_theme", JSON.stringify(nuevoTema));
      }
      return nuevoTema;
    });
  };

	// agregar a fav
	const addFavorito = (juego) => {
		setFavoritos((prevFavoritos) => {
			if (prevFavoritos.some(fav => fav.id === juego.id)) return prevFavoritos;

      const nuevosFavoritos = [...prevFavoritos, juego];

			if (typeof window !== "undefined") {
				window.localStorage.setItem("my_favorites", JSON.stringify(nuevosFavoritos));
			}
		return nuevosFavoritos;
		});
	}

	//borrar fav
	const deleteFavorito = (juego_id) => {
		setFavoritos((prevFavoritos) => {
			const filteredJuegos = prevFavoritos.filter( juego => juego.id !== juego_id);

			if (typeof window !== "undefined") {
				window.localStorage.setItem("my_favorites", JSON.stringify(filteredJuegos));
			}
			return filteredJuegos;
		})
	}

	//carrito
	// agregar
  const addCarrito = (juego) => {
    setCarrito((prevCarrito) => {
      if (prevCarrito.some(item => item.id === juego.id)) return prevCarrito;
      const nuevoCarrito = [...prevCarrito, juego];
      if (typeof window !== "undefined") {
        localStorage.setItem("my_cart", JSON.stringify(nuevoCarrito));
      }
      return nuevoCarrito;
    });
  };

	// borrar
  const deleteCarrito = (juego_id) => {
    setCarrito((prevCarrito) => {
      const nuevoCarrito = prevCarrito.filter(item => item.id !== juego_id);
      if (typeof window !== "undefined") {
        localStorage.setItem("my_cart", JSON.stringify(nuevoCarrito));
      }
      return nuevoCarrito;
    });
  };

	//vaciar
  const vaciarCarrito = () => {
    setCarrito([]);
    if (typeof window !== "undefined") {
      localStorage.setItem("my_cart", JSON.stringify([]));
    }
  };

	if (!isMounted) return null;

	return (
		<AppContext.Provider value={{tema, setTema, cambiarTema, favoritos, addFavorito, deleteFavorito, carrito, setCarrito, addCarrito, deleteCarrito, vaciarCarrito, isMounted}}>
			{children}
		</AppContext.Provider>
	)
}

export const useAppContext = () => useContext(AppContext)


