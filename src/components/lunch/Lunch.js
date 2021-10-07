import React from 'react';
import AllData from '../AllData';
import "./lunch.css";

export default function Lunch() {
    return (
             <main className="lunch my-12">
              <div className="lunch-wrapper flex-col">
                <div className="lunch-img">
                  <img src={AllData.lunch.LunchImg} alt="AllData.Mint.Mintext.title" />
                </div>
                <div className="lunch-content mt-10 text-center px-3">
                    <h1>{AllData.lunch.Lunchtext.title.toUpperCase()}</h1>
                    <p>{AllData.lunch.Lunchtext.text}</p>
                </div>
             </div>
            </main>
    )
}
