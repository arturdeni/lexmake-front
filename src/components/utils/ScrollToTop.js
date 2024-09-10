import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza el scroll a la parte superior
  }, [pathname]); // Se ejecuta cada vez que cambia la ruta

  return null;
};

export default ScrollToTop;
