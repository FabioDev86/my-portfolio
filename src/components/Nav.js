import { useLanguage } from "../contexts/LanguageProvider";
import DropMenu from "./DropMenu";
import text from "../text.json";

export default function Nav(){
    const { language } = useLanguage();
    let links = [];
    switch(language){
        case "english" : links = text.nav_text.links.english; break;
        case "italiano" : links = text.nav_text.links.italiano; break;
        case "deutsch" : links = text.nav_text.links.deutsch; break;
    }
    return(
        <nav>
            <DropMenu />
            <div className="links">
                <h1>{links[0]}</h1>
                <h1>{links[1]}</h1>
                <h1>{links[2]}</h1>
                <h1>{links[3]}</h1>
            </div>
        </nav>
    );
}