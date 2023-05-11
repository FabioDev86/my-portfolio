import { useLanguage } from "../contexts/LanguageProvider";

export default function DropMenu(){
    const { language, changeLanguage } = useLanguage();
    let label;
    switch(language){
        case "english" : label = "Choose a language"; break;
        case "italiano" : label = "Scegli una lingua"; break;
        case "deutsch" : label = "Wählen Sie eine Sprache"; break;
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