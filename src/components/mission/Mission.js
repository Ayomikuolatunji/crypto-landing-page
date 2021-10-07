import React from 'react';
import AllData from '../AllData';
import "./mission.css";

export default function Mission() {
    return (
        <main>
            <main className="mission my-32">
              <div className="mission-wrapper flex-col sm:flex-row flex sm:justify-between justify-center items-center">
                <div className="mission-img">
                  <img src={AllData.mission.missionImg} alt="" />
                </div>
                <div className="mission-content mt-10 sm:text-justify text-center px-3 sm:w-1/2 w-full">
                    <h1 className="font-extrabold my-5 text-3xl text-yellow-500">{AllData.mission.title.toUpperCase()}</h1>
                    <p>{AllData.mission.text}</p>
                </div>
                </div>
            </main>
        </main>
    );
};