import { createContext } from "react";


 type ContextTypes = {  
        joke:string,
        nextJokeRender:boolean,
        newPerson:string,
        apiUrl:string,
        drawAnotherJoke:(e: React.SyntheticEvent)=>void,
        handleNewPerson:(e: React.ChangeEvent<HTMLInputElement>)=>void,
        jokesCounter:number,
        increaseJokesCounter:()=>void,
        decreaseJokesCounter:()=>void,
        changeJokesCounter:(e: React.ChangeEvent<HTMLInputElement>)=>void,
        createJokesFile:()=>void,
        renderCardImg:()=>string, 
 }; 

const RootContext = createContext<ContextTypes | null>(null);
export default RootContext;
