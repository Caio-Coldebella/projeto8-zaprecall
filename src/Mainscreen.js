import React from "react";
import Card from "./Card";
import decks from "./decks";

export default function Mainscreen(){
    let deck = (decks());
    let arranswers = [];
    let error = false;
    const [bottombarclass, setBottombarclass] = React.useState("bottombar");
    const [answers, setAnswers] = React.useState([<p key={0}>0/8 concluídos</p>]);
    function addanswer(option){
        if(option==="zap"){
            arranswers.push(<ion-icon key={arranswers.length} name="checkmark-circle"></ion-icon>);
            if(arranswers.length === 8){
                setBottombarclass("bottombar extended");
                if(error){
                    setAnswers([<span key={11}><img src="./assets/sad.png" alt="sad"/> Putz...</span>,<div key={12}><p>Ainda faltam alguns...</p><p>Mas não desanime!</p></div>,<p key={0}>{arranswers.length}/8 concluídos</p>,<div key={10}>{arranswers}</div>]);
                }else{
                    setAnswers([<span key={11}><img src="./assets/party.png" alt="sad"/> Parabéns!</span>,<div key={12}><p>Você não esqueceu de</p><p>nenhum flashcard!</p></div>,<p key={0}>{arranswers.length}/8 concluídos</p>,<div key={10}>{arranswers}</div>]);
                }
            }
            else{
                setAnswers([<p key={0}>{arranswers.length}/8 concluídos</p>,<div key={10}>{arranswers}</div>]);
            }
        }else if(option === "naolembro"){
            arranswers.push(<ion-icon key={arranswers.length} name="close-circle"></ion-icon>);
            error = true;
            if(arranswers.length === 8){
                setBottombarclass("bottombar extended");
                setAnswers([<span key={11}><img src="./assets/sad.png" alt="sad"/> Putz...</span>,<div key={12}><p>Você não esqueceu de</p><p>nenhum flashcard!</p></div>,<p key={0}>{arranswers.length}/8 concluídos</p>,<div key={10}>{arranswers}</div>]);
            }else{
                setAnswers([<p key={0}>{arranswers.length}/8 concluídos</p>,<div key={10}>{arranswers}</div>]);
            }
        }else if(option === "quase"){
            arranswers.push(<ion-icon key={arranswers.length} name="help-circle"></ion-icon>);
            if(arranswers.length===8){
                setBottombarclass("bottombar extended");
                if(error){
                    setAnswers([<span key={11}><img src="./assets/sad.png" alt="sad"/> Putz...</span>,<div key={12}><p>Ainda faltam alguns...</p><p>Mas não desanime!</p></div>,<p key={0}>{arranswers.length}/8 concluídos</p>,<div key={10}>{arranswers}</div>]);
                }else{
                    setAnswers([<span key={11}><img src="./assets/party.png" alt="sad"/> Parabéns!</span>,<div key={12}><p>Você não esqueceu de</p><p>nenhum flashcard!</p></div>,<p key={0}>{arranswers.length}/8 concluídos</p>,<div key={10}>{arranswers}</div>]);
                }
            }else{
                setAnswers([<p key={0}>{arranswers.length}/8 concluídos</p>,<div key={10}>{arranswers}</div>]);
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
            <div className={bottombarclass}>
                {answers}
            </div>
        </>
    );
}