import React from 'react';
import AllData from '../AllData';
import "./home.css";

export default function Home() {
    return (
       <main className="mx-7 mt-20">
         <div className="mx-auto rounded-2xl bg-red-900 flex justify-center  home font-sans">
            <p className="text-md">
              {AllData.home.hometxt}
            </p>
        </div>
       </main>
    )
}
