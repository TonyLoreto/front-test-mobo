import { useEffect, useState } from "react";
import "../styles/hero.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>iPhone Seminuevo</h1>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="black-text">iPhone 13 Pro Max</h1>
        <p className="black-text">Rendimiento increíble a un precio accesible</p>
      </div>
      <div className="hero-image-container">
        <div className="image-wrapper">
          <img src="https://mobomx.vtexassets.com/arquivos/ids/211316-800-auto" alt="iPhone 13 Pro Max" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const [activeText, setActiveText] = useState(0);
  const texts = [
    "Pantalla Super Retina XDR de 6.7\"",
    "Chip A15 Bionic",
    "Cámara Pro con modo Noche",
    "Batería de larga duración"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 200; 
      const scrollTop = window.scrollY;
      const newIndex = Math.min(
        Math.floor((scrollTop / maxScroll) * texts.length),
        texts.length - 1
      );

      if (newIndex !== activeText) {
        setActiveText(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeText]);

  return (
    <section id="features" className="features">
      <h2 className="black-text">Especificaciones</h2>
      <div className="feature-text-container">
        <p className="feature-text black-text">{texts[activeText]}</p>
        <p className="payment-info">Hasta 12 meses sin intereses con PayPal a partir de $1,000</p>
        <p className="payment-info">Págalo hasta 12 quincenas sin tarjeta con Kueski</p>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <p className="black-text">&copy; 2025 iPhone Store - Todos los derechos reservados</p>
    </footer>
  );
};

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </>
  );
};

export default App;

