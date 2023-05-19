import { useLanguage } from "../contexts/LanguageProvider";
export default function Header(){
    const { language } = useLanguage();
    let text = [];
    switch(language){
        case "english" : text = ["Hi, I'm Fabio Bauleo, a front end developer specialized in React", "\"Maybe I don't know how to do it yet, but I will figure it out\"", "Profile image" ]; break;
        case "italiano" : text = ["Ciao, sono Fabio Bauleo, uno sviluppatore front end specializzato in React", "\"Forse non so ancora come farlo, ma troverò un modo\"", "Immagine di profilo"]; break;
        case "deutsch" : text = ["Hallo, ich bin Fabio Bauleo, ein Frontend-Entwickler mit Spezialisierung auf React", "\"Vielleicht weiß ich noch nicht, wie ich es machen soll, aber ich werde es herausfinden\"", "Profilbild"]; break;
    }
    return(
        <header>
            <h1>{text[0]}</h1>
            <img src="" alt={text[2]}/>
            <h2>{text[1]}</h2>
        </header>
    );
}