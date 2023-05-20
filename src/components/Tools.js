import { useLanguage } from "../contexts/LanguageProvider";
import text from "../text.json";

export default function Tools(){
    const { language } = useLanguage();
    let header;
    switch(language){
        case "english" : header = text.tools_text.english; break;
        case "italiano" : header = text.tools_text.italiano; break;
        case "deutsch" : header = text.tools_text.deutsch; break;
    }
    return(
        <div className="tools">
            <h1>{ header }</h1>
            <span>Tool1</span><span>Tool2</span><span>Tool3</span>
        </div>
    );
}