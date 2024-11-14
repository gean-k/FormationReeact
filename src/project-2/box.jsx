import React from "react";
import TemplateBox from "./templateBox";
import GrosseBox from "./TemplateGrosseBox";

function MAINBOX(params) {
  return (
    <div className="bg-slate-100">
      <div className="flex justify-center items-center h-screen">
        <div className="h-[790px] w-[850px] bg-white flex justify-center items-center">
          <div className="h-[550px] w-[800px] flex flex-col gap-5 ">
            {/*L'entete*/}
            <div className=" flex flex-col justify-center items-center gap-4">
              <h1 className="font-bold text-[30px] m-auto">
                We Empower You To Dive Into Finding The Right Job Here
              </h1>

              <h4 className="m-auto">
                Discover a wide range of career opportunities tailored to your
                interests and skills
              </h4>
            </div>

            {/*All et tout le reste*/}
            <div className="flex flex-row items-center gap-2">
              <div className="border border-gray-400 text-xs text-white rounded-lg w-fit h-fit p-1 bg-pink-400">
                All
              </div>
              <div className="border border-gray-400 text-xs text-black rounded-lg w-fit h-fit p-1">
                Developper
              </div>
              <div className="border border-gray-400 text-xs text-black rounded-lg w-fit h-fit p-1">
                UI/UX Designer
              </div>
              <div className="border border-gray-400 text-xs text-black rounded-lg w-fit h-fit p-1">
                Project Manager
              </div>
              <div className="border border-gray-400 text-xs text-black rounded-lg w-fit h-fit p-1">
                Accounting
              </div>
              <div className="border border-gray-400 text-xs text-black rounded-lg w-fit h-fit p-1">
                Copy writting
              </div>
              <div className="border border-gray-400 text-xs text-black rounded-lg w-fit h-fit p-1">
                Digital Marketing
              </div>
            </div>

            {/*Les box*/}
            <div className="flex flex-wrap gap-5">
              <GrosseBox />
              <TemplateBox />
              <TemplateBox />
              <TemplateBox />
              <TemplateBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MAINBOX;
