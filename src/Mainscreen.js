import React from "react";
import Card from "./Card";
import decks from "./decks";
export default function Mainscreen(){
    const deck = (decks());
    let arranswers = [];
    const [error, setError] = React.useState(false);
    const [finished,setFinished] = React.useState(false);
    const [answers, setAnswers] = React.useState([<p>0/8 concluídos</p>]);
    if(finished){
        if(error){
            console.log("errou")
        }
        console.log("terminou")
    }
    function addanswer(option){
        if(option==="zap"){
            arranswers.push(<ion-icon name="checkmark-circle"></ion-icon>);
            setAnswers([<p>{arranswers.length}/8 concluídos</p>,<div>{arranswers}</div>]);
            if(arranswers.length===8){
                setFinished(true);
            }
        }else if(option === "naolembro"){
            arranswers.push(<ion-icon name="close-circle"></ion-icon>);
            setAnswers([<p>{arranswers.length}/8 concluídos</p>,<div>{arranswers}</div>]);
            setError(true);
            if(arranswers.length===8){
                setFinished(true);
            }
        }else if(option === "quase"){
            arranswers.push(<ion-icon name="help-circle"></ion-icon>);
            setAnswers([<p>{arranswers.length}/8 concluídos</p>,<div>{arranswers}</div>]);
            if(arranswers.length===8){
                setFinished(true);
            }
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