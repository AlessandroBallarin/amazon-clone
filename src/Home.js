import React from "react";
import "./Home.css";
import Product from "./Components/Product";

function Home() {
  return (
    <div className="home">
      {/* Carosello con immagini */}
      <img
        src="https://m.media-amazon.com/images/I/61wxFGC3SSL._SX3000_.jpg"
        alt=""
        className="home__image"
      />
      {/*
      {/* Prima riga di prodotti */}
      <div className="home__row">
        <Product
          id="0"
          title="ORNARTO Cover in Silicone Liquido Compatibile con iPhone 13 Pro Custodia 6,1”, Protezione in Gomma Gel per Tutto il Corpo Protettiva Antiurto Rinforzato con Fodera in Microfibra, 6,1-Vino Rosso"
          price={11.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/51tJ9NP0mmL._AC_SL1500_.jpg"
        ></Product>
        <Product
          id="1"
          title="Arlo Pro3, Sistema di Videosorveglianza WiFi con 2 Telecamere sezna fili da esterno 2K HDR, Visione Notturna a Colori, Audio 2 Vie, 160°, BIanco, con 90 giorni di prova gratuita di Arlo Secure"
          price={299.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/51LErmONVML._AC_SL1500_.jpg"
        ></Product>
      </div>

      {/* Seconda riga di prodotti */}
      <div className="home__row">
        <Product
          id="2"
          title="Aigostar Calore 30HHK - Panini Maker/Griglia, Pressa a sandwich, Griglia elettrica, 1800 Watt."
          price={53.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/71EddlVb6vL._AC_SL1500_.jpg"
        ></Product>
        <Product
          id="3"
          title="Samsung Galaxy Watch Active 2 (Bluetooth) 44Mm, Aluminum, Nero"
          price={199.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/71v2Zp3MMPL._AC_SL1500_.jpg"
        ></Product>
        <Product
          id="4"
          title="Echo Dot (3ª generazione) - Altoparlante intelligente con integrazione Alexa - Tessuto antracite"
          price={49.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/61u48FEs0rL._AC_SL1000_.jpg"
        ></Product>
      </div>

      {/* Prima riga di prodotti */}
      <div className="home__row">
        <Product
          id="5"
          title="Itek Monitor Gaming GGC, Curvo (1500R), 34, 3440x1440 (Ultra WQHD), 21:9, HDR400, VA, 144Hz, 1ms, FreeSync, G-Sync, HDMI, Display Port, Audio, Led rossi, Altezza regolabile"
          price={519.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/618xZ-Qd8tL._AC_SL1500_.jpg"
        ></Product>
      </div>
    </div>
  );
}

export default Home;
