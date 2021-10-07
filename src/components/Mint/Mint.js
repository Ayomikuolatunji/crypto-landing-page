import React from 'react';
import AllData from '../AllData';
import "./mint.css"

export default function Mint() {
    return (
        <main className="mint mt-32 mx-auto">
            <div className="mint-wrapper flex-col sm:flex-row-reverse flex sm:justify-between justify-center items-center">
                <div className="min-img">
                  <img src={AllData.mint.minImg} alt="AllData.Mint.Mintext.title" />
                </div>
                <div className="mint-content mt-10 text-startmd px-3 sm:w-1/2 w-full sm:text-left text-center">
                    <h1 className="text-yellow-500 font-extrabold my-7 text-2xl">{AllData.mint.Mintext.title}</h1>
                    <p className="text-md">{AllData.mint.Mintext.text}</p>
                    <button className="px-14 py-3 font-bold bg-yellow-600 text-light my-10 rounded-3xl hover:bg-yellow-800">{AllData.mint.Mintext.btn}</button>
                </div>
            </div>
        </main>
    );
};
