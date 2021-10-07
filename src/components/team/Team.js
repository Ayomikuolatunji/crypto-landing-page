import React from 'react';
import AllData from '../AllData';
import "./team.css";

export default function Team() {
    const {teamImg,title,title1,text}=AllData.team;
    return (
        <div className="team my-12">
            <div className="team-wrapper flex-col sm:flex-row-reverse flex sm:justify-between justify-center items-center">
                <div className="team-img">
                <img src={teamImg} alt="img" />
                </div>
                <div className="team-content mt-10 px-3 sm:w-1/2 w-full sm:text-justify text-center">
                    <h3 className="text-gray-100 text-3xl font-bold">{title}
                    </h3>
                    <h1 className="font-extrabold my-5 text-3xl text-yellow-500">{title1}</h1>
                    <p>{text}</p>
                </div>
            </div>
       </div>
    );
};
