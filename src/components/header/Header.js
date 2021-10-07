import React from 'react';
import AllData from '../AllData';
import "./header.css";

export default function Header() {
    return (
        <>
          <header className="header flex lg:justify-between md:justify-between sm:py-10 sm:px-4 justify-center py-10 px-5 md:flex-row lg:flex-row flex-col sm:flex-col text-center">
              <div className="brand">
                  <img src={AllData.header.webName} alt="logo" className="logo" />
              </div>
              <ul className="navbar pt-4">
                  {
                    AllData.header.headerBtn.map(nav=>{
                        const {title}=nav
                        return(
                            <button key={title} className="header-btn md:px-2 md:py-2 rounded-xl mr-2 px-1 py-2 hover:bg-yellow-600 transition-all" title={title}>{title.toUpperCase()}</button>
                        )
                    })
                  }
              </ul>
          </header>
        </>
    )
}
