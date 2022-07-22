import React from "react";
import Card from "./Card";
import decks from "./decks";
export default function Mainscreen(){
    const deck = (decks());
    return(
        <div className="mainscreen">
            <div className="toplogo">
                <img src="./assets/logo-pequeno.png" alt="logo"/>
                <h1>ZapRecall</h1>
            </div>
            {deck[0].map((item,index)=>{return <Card key={index} index={index} item={item}/>})}
        </div>
    );
}