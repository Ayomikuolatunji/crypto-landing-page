import React from 'react';
import AllData from '../AllData';
import Question from './Quesstion';
import "./faq.css"

export default function Faq() {
    return (
       <div className="my-32">
        <div className="my-12">
             {
              <div className="faq mx-auto  text-center">
                  <h1 className="text-3xl text-yellow-500 font-extrabold my-3">{AllData.faq.title.toUpperCase()}</h1>
                  <p>{AllData.faq.text}</p>
              </div>
             }
        </div>
        {/* accordion question*/}
         <main className="w-11/12 mx-auto">
             {
                 AllData.faq.questions.map(question=>{
                     return(
                        <Question {...question} key={question.title}/>
                     )
                 })
             }
         </main>
       </div>
    )
};
