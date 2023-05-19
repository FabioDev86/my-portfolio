import { useLanguage } from "../contexts/LanguageProvider";
import MyCarousel from "./MyCarousel";

export default function Projects(){
    const { language } = useLanguage();
    let text = [];
    switch(language){
        case "english" : text = ["My Projects", "Here are some examples of what I can do for you"]; break;
        case "italiano" : text = ["I miei progetti", "Ecco alcuni esempi di cosa posso fare per te"]; break;
        case "deutsch" : text = ["Meine Projekte", "Hier sind einige Beispiele dafür, was ich für Sie tun kann"]; break;
    }
    return(
        <div className="projects">
            <h1>{ text[0] }</h1>
            <h2>{ text[1] }</h2>
            <MyCarousel lang={ language }/>
        </div>
    );
} 