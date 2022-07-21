export default function StartScreen(props){
    return(
        <div className="startscreen">
            <img src="./assets/logo.png" alt="Logo Zap Recall"/>
            <h1>ZapRecall</h1>
            <button onClick={props.changescreen}>Iniciar Recall!</button>
        </div>
    );
}