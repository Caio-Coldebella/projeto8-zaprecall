import React from "react";
import StartScreen from "./StartScreen";
import Mainscreen from "./Mainscreen";
function changescreen(screen,fstscreen,secscreen,setScreen){
    if(screen === fstscreen){
        setScreen(secscreen);
    }
}
export default function App(){
    const fstscreen = <StartScreen changescreen={()=>{changescreen(screen,fstscreen,secscreen,setScreen)}}/>;
    const secscreen = <Mainscreen/>;
    const [screen, setScreen] = React.useState(fstscreen);
    return(
        <>
            {screen}
        </>
    );
}