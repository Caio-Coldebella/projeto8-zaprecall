export default function Mainscreen(){
    const decks = [
        [
            {question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript"},
            {question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces"},
            {question: "Componentes devem iniciar com __", answer: "letra maiúscula"},
            {question: "Podemos colocar __ dentro do JSX", answer: "expressões"},
            {question: "O ReactDOM nos ajuda __", answer: "interagindo com a DOM para colocar componentes React na mesma"},
            {question: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências"},
            {question: "Usamos props para __", answer: "passar diferentes informações para componentes"},
            {question: "Usamos estado (state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"},            
        ]
    ];
    let arrquestions = decks[0].map((item,index) =>{
        return <div className="boxquestion" key={index}>
            <p>Questao {index+1}</p>
            <ion-icon name="play-outline"></ion-icon>
        </div>});
    return(
        <div className="mainscreen">
            <div className="toplogo">
                <img src="./assets/logo-pequeno.png" alt="logo"/>
                <h1>ZapRecall</h1>
            </div>
            {arrquestions}
        </div>
    );
}