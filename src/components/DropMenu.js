import { useLanguage } from "../contexts/LanguageProvider";
import text from "../text.json";
import { useMediaQuery } from "react-responsive"


export default function DropMenu(){
    const isMobile = useMediaQuery({ maxWidth: 500 })
    const { language, changeLanguage } = useLanguage();
    let label;
    switch(language){
        case "english" : label = text.nav_text.dropbox.english; break;
        case "italiano" : label = text.nav_text.dropbox.italiano; break;
        case "deutsch" : label = text.nav_text.dropbox.deutsch; break;
    }
    return(
        <div id="drop-menu">
            <img src="language_icon.png" alt="language icon"/>
            {isMobile ? null : <label for="language-menu">{label}</label> }
            <select id="language-menu" 
                value={language}
                onChange={ e => {changeLanguage(e.target.value)}} >
                <option value="english">English</option>
                <option value="italiano">Italiano</option>
                <option value="deutsch">Deutsch</option>
            </select>
        </div>
         
    );
}