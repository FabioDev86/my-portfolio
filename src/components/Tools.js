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
            <img src="tools/visual-studio.svg" alt="Visual Studio Code"/>
            <img src="tools/react.svg" alt="React"/>
            <img src="tools/figma.svg" alt="Figma"/>
            <img src="tools/github.svg" alt="GitHub"/>
            <img src="tools/bootstrap.svg" alt="Bootstrap"/>            
        </div>
    );
}