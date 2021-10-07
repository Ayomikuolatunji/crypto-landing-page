import React from "react";
import AllData from "../AllData";
import "./footer.css"

export default function Footer(){
    return(
        <footer className="flex justify-center item-center flex-col text-center  w-full max-w-full">
             <div className="footer-text">
                 <h1 className="text-gray-500">I am not a demond</h1>
                 <h2>I am a storm</h2>
             </div>
             <ul className="navbar pt-4">
                  {
                    AllData.footerBtn.map((nav,index)=>{
                        const {title}=nav
                        return(
                            <button key={index} className="header-btn md:px-2 md:py-2 rounded-xl mr-2 px-1 py-2 hover:bg-yellow-600 transition-all first">{title}</button>
                        )
                    })
                  }
              </ul>
        </footer>
    )
}

