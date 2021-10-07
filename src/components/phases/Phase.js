import React from 'react';
import AllData from '../AllData';
import "./phase.css"

export default function Phase() {
    return (
        <div className="flex justify-center items-center mt-10 flex-col phase my-10">
            {
              AllData.phases.map(step=>{
                  const {phaseImg,phase,title,text}=step;
                  return(
                    <div className="flex sm:justify-between direction my-10 flex-wrap flex-col sm:flex-row justify-center items-center shadow-lg" key={title}>
                      <div className="phase-img">
                        <img src={phaseImg} alt="img" />
                      </div>
                      <div className="phase-content mt-8 text-center px-3 sm:w-1/2 w-full bg-red-800 sm:p-5 rounded-2xl p-3">
                          <h3 className="text-gray-100 text-2xl font-bold ">{phase}
                          </h3>
                          <h1>{title}</h1>
                          <p className="text-gray-400">{text}</p>
                      </div>
                    </div>
                  )
              })
            }
        </div>
    );
};
