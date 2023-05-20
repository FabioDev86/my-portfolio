import { useLanguage } from "../contexts/LanguageProvider";
import data from "../text.json";

export default function Header(){
    const { language } = useLanguage();
    let text = [];
    switch(language){
        case "english" : text = [data.header_text.presentation.english, data.header_text.motto.english, data.header_text.profile_alt.english ]; break;
        case "italiano" : text = [data.header_text.presentation.italiano, data.header_text.motto.italiano, data.header_text.profile_alt.italiano]; break;
        case "deutsch" : text = [data.header_text.presentation.deutsch, data.header_text.motto.deutsch, data.header_text.profile_alt.deutsch]; break;
    }
    return(
        <header>
            <h1>{text[0]}</h1>
            <img src="" alt={text[2]}/>
            <h2>{text[1]}</h2>
        </header>
    );
}