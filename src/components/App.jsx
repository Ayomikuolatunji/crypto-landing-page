import React from 'react';
import Header from './header/Header';
import Home from './home/Home';
import Mint from "./Mint/Mint";
import Lunch from './lunch/Lunch';
import Phases from "./phases/Phase";
import Roadmap from './roadmap/Roadmap';
import Mission from "./mission/Mission";
import Team from "./team/Team";
import Minted from "./minted/Minted"
import Faq from './faq/Faq';
import Footer from './footer/Footer';
import "./App.css"



export default function App() {
    return (
        <>
            <Header/>
            <Home/>
            <Mint/>
            <Lunch/>
            <Phases/>
            <Roadmap/>
            <Minted/>
            <Mission/>
            <Team/>
            <Faq/>
            <Footer/>
        </>
    )
};
