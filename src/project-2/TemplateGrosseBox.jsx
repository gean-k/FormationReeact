import React from "react";
import { Star } from "lucide-react"; // Importez les icônes que vous voulez utiliser

function GrosseBox() {
  return (
    <div className="w-[500px] h-56 bg-white border border-gray-300 rounded-lg shadow-lg p-4">
      <div className="flex flex-col gap-4 h-full">
        {/* En-tête de la carte */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-black text-sm">UI/UX Designer</h1>
            <div className="flex items-center gap-2 text-[10px] text-gray-500">
              <h2 className="text-gray-600 text-[10px]">Snapchat</h2>
              <span>•</span>
              <h2>Jakarta</h2>
              <h2 className="text-green-500 text-[9px] p-1 font-semibold bg-green-100">
                Trusted
              </h2>
            </div>
          </div>
          <Star color="black" className="w-3 h-3" /> {/* Icône */}
        </div>

        <div>
          {/* Détails de rémunération */}
          <div className="flex items-baseline gap-1">
            <h1 className="font-bold text-sm text-black">$1100</h1>
            <h2 className="text-xs text-gray-500">/month</h2>
          </div>

          {/* Description */}
          <p className="text-gray-400 font-semibold text-[9px] leading-relaxed">
            We offer career opportunities in the UI/UX field , focusing on
            creating user-centered, intuitive, and viqually appearing digital
            experiences on Instagram apps.
          </p>
        </div>

        {/* Boutons et Temps */}
        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            <button className="text-gray-400 text-[7px] border border-black w-14 h-5 rounded hover:text-white hover:bg-black ease-in-out">
              Full Time
            </button>

            <button className="text-gray-400 text-[7px] border border-black w-14 h-5 rounded  hover:text-white hover:bg-black ease-in-out">
              Remote
            </button>

            <button className="text-gray-400 text-[7px] border border-black w-fit p-1 h-5 rounded  hover:text-white hover:bg-black ease-in-out">
              Work Time: 6 hours
            </button>
          </div>
          <div className="flex flex-row gap-1">
            <Star color="black" className="w-3 h-3" /> {/* Icône */}
            <Star color="black" className="w-3 h-3" /> {/* Icône */}
            <Star color="black" className="w-3 h-3" /> {/* Icône */}
            <Star color="black" className="w-3 h-3" /> {/* Icône */}
          </div>
        </div>

        <div>
          <button className="text-white bg-black w-full h-6 rounded-md  text-[7px] font-bold">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default GrosseBox;
