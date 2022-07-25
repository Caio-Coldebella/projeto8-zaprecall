import logo from "../assets/logo.png";
import "./startscreen.css"
export default function StartScreen(props){
    return(
        <div className="startscreen">
            <img src={logo} alt="Logo Zap Recall"/>
            <h1>ZapRecall</h1>
            <button onClick={props.changescreen}>Iniciar Recall!</button>
        </div>
    );
}