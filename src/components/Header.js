import { useLanguage } from "../contexts/LanguageProvider";
export default function Header(){
    const { language } = useLanguage();
    let headers = [];
    switch(language){
        case "english" : headers = ["Hi, I'm Fabio Bauleo, a front end developer specialized in React", "Maybe I don't know how to do it yet, but I will figure it out"]; break;
        case "italiano" : headers = ["Ciao, sono Fabio Bauleo, uno sviluppatore front end specializzato in React", "Forse non so ancora come farlo, ma troverò un modo"]; break;
        case "deutsch" : headers = ["Hallo, ich bin Fabio Bauleo, ein Frontend-Entwickler mit Spezialisierung auf React", "Vielleicht weiß ich noch nicht, wie ich es machen soll, aber ich werde es herausfinden"]; break;
    }
    return(
        <header>
            <h1>{headers[0]}</h1>
            <img src="" alt="Profile image"/>
            <h1>{headers[1]}</h1>
        </header>
    );
}