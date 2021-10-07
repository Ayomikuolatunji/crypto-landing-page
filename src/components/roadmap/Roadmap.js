import React from 'react';
import AllData from '../AllData';
import "./roadmap.css";

export default function Roadmap() {
    return (
        <>
            {
              <div className="roadmap mx-auto mt-14 text-center">
                  <h1 className="text-3xl text-yellow-500 my-8 font-extrabold">{AllData.roadmap.title}</h1>
                  <p>{AllData.roadmap.text}</p>
              </div>
            }
        </>
    )
}
