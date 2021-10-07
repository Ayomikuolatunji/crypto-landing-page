import React from 'react';
import AllData from '../AllData';
import {AiOutlineDown} from "react-icons/all";
import "./minted.css";

export default function Minted() {
    return (
        <div className="minted mt-20 rounded-xl mx-6">
            <div className="minted-wrapper rounded-xl">
                {
                    AllData.minted.map(mint=>{
                        return(
                            <div key={mint.title} className=" text-center flex justify-center flex-col items-center my-5 minted-item">
                                <h1 className="text-blue-50 font-extrabold text-2xl">{mint.title}</h1>
                                <p className="text-gray-300">{mint.text}</p>
                                <span><AiOutlineDown className="text-4xl text-yellow-600 font-bold"/></span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};
