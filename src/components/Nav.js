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
                <h3>{links[0]}</h3>
                <h3>{links[1]}</h3>
                <h3>{links[2]}</h3>
                <h3>{links[3]}</h3>
            </div>
        </nav>
    );
}