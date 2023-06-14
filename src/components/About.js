import { useLanguage } from "../contexts/LanguageProvider";
import data from "../text.json";

export default function About(){
    const { language } = useLanguage();
    let text = [];
    switch(language){
        case "english" : text = data.about_text.header.english; break;
        case "italiano" : text = data.about_text.header.italiano; break;
        case "deutsch" : text = data.about_text.header.deutsch; break;
    }
    return(
        <div id="about">
            <h1>{ text[0] }<span style={{color: "#3AA2C2"}}>{ text [1] }</span></h1>
            <p></p>
        </div>
    );
}