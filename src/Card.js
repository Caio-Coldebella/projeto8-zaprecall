import React from "react";
export default function Card(props){
    const stateclosed = <div className="boxquestion" key={props.index}>
        <p>Questao {props.index+1}</p>
        <ion-icon name="play-outline" onClick={()=>{clickedcard("switchtoquestion")}}></ion-icon>
    </div>;

    const stateopened = <div className="boxquestion open">
        <p>{props.item.question}</p>
    </div>;
    
    const [cardstate, setCardstate] = React.useState(stateclosed);
    
    function clickedcard(instruction){
        if(instruction==="switchtoquestion"){
            setCardstate(stateopened);
        }
    }
    
    return(
        <>
        {cardstate}
        </>
    );
}