import React from "react";
import Card from "./Card";
import decks from "./decks";
let arranswers = [];
let missed = false;
export default function Mainscreen(){
    const deck = (decks());
    const [answers, setAnswers] = React.useState([<p>0/8 concluídos</p>]);
    if(arranswers.length === 8){
        if(missed){
            console.log("errou")
        }
        console.log("terminou")
    }
    function addanswer(option){
        let temp = [<p>{arranswers.length + 1}/8 concluídos</p>];
        if(option==="zap"){
            arranswers.push(<ion-icon name="checkmark-circle"></ion-icon>);
            temp.push(
                <div>{arranswers}</div>
            );
            setAnswers(temp);
        }else if(option === "naolembro"){
            arranswers.push(<ion-icon name="close-circle"></ion-icon>);
            temp.push(
                <div>{arranswers}</div>
            );
            missed = true;
            setAnswers(temp);
        }else if(option === "quase"){
            arranswers.push(<ion-icon name="help-circle"></ion-icon>);
            temp.push(
                <div>{arranswers}</div>
            );
            setAnswers(temp);
        }
    }
    return(
        <>
            <div className="mainscreen">
                <div className="toplogo">
                    <img src="./assets/logo-pequeno.png" alt="logo"/>
                    <h1>ZapRecall</h1>
                </div>
                {deck[0].map((item,index)=>{return <Card key={index} index={index} item={item} addanswer={addanswer}/>})}
            </div>
            <div className="bottombar">
                {answers}
            </div>
        </>
    );
}