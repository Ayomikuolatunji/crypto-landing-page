import React, { Component } from 'react';
import {AiOutlineMinus,AiOutlinePlus} from "react-icons/all"

class Question extends Component {
    constructor(props){
        super(props)
        this.state={
            showAccordion:false
        }
    }
   Toggle=()=>{
    this.setState(prevState => ({
        showAccordion: !prevState.showAccordion
      }));
   }
    render() {
        const {title,text}=this.props;
        return (
            <div className="bg-yellow-700 m-3 shadow-lg rounded-xl sm:text-justify text-center">
                <div className="flex justify-between border-bottom py-2 " onClick={()=>this.Toggle()}>
                    <h4 className="text-dark text-center p-3">{title}</h4>
                    <button className="text-2xl mr-2">{this.state.showAccordion? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
                </div>
               {this.state.showAccordion && <p className="bg-yellow-900 p-4 text-xl font-normal rounded-b-xl">{text}</p>}
            </div>
        );
    }
}

export default Question;