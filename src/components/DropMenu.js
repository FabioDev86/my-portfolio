import { useLanguage } from "../contexts/LanguageProvider";
import text from "../text.json";

export default function DropMenu(){
    const { language, changeLanguage } = useLanguage();
    let label;
    switch(language){
        case "english" : label = text.nav_text.dropbox.english; break;
        case "italiano" : label = text.nav_text.dropbox.italiano; break;
        case "deutsch" : label = text.nav_text.dropbox.deutsch; break;
    }
    return(
        <div>
            <label for="language-menu">{label}</label>
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