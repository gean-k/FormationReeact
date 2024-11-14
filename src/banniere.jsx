import React from "react";
import imagea from "./logo.jpg";
import imageFemme from "./femme.webp";
import { AlignJustify } from "lucide-react"; // Importez les icônes que vous voulez utiliser

function Banniere() {
  return (
    <div className="w-full ">
      <div className="w-[80%] m-auto flex flex-row justify-between items-center h-14">
        <img src={imagea} className="w-30 h-20" alt="Logo" />

        <div className="flex gap-12">
          <button className="font-bold text- text-black">Support</button>
          <button className=" hover:bg-slate-700 p-2 w-20 h-8 bg-slate-800 text-white text-sm rounded-full">
            S'inscrire
          </button>
          <AlignJustify className="" color="black" /> {/* Icône de caméra */}
        </div>
      </div>

      <div className="relative bg-blue bg-opacity-100">
        <div className="relative h-[600]">
          <img src={imageFemme} alt="" className="w-full ]" />
          <div className="w-full h-full bg-black absolute top-0 opacity-30"></div>
        </div>
        <div className="w-[80%] m-auto">
          <div className="flex flex-row top-6 absolute">
            <div className="w-1/2  flex flex-col gap-16 ">
              <h1 className="text-6xl text-white font-bold leading-tight">
                Allez n’importe où en France, à n’importe quelle heure
              </h1>

              <h4 className="text-white text-xl">
                Bolt est l'application de mobilité tout-en-un. En quelques
                minutes, vous êtes pris en charge par un chauffeur offrant un
                service de transport de premier ordre et profitez d'un trajet
                confortable jusqu'à votre destination. Sinon, évitez n
                complètement les embouteillages grâce à l'une de nos
                trottinettes leaders sur le marché.
              </h4>
              <button className="w-40 px-1 h-10 bg-green-600 hover:bg-green-700 text-white rounded-full">
                Telecharger l'appli
              </button>
            </div>

            <div className="w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banniere;
