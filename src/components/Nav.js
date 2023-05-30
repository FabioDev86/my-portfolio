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
        <nav id="navbar">
            <DropMenu />
            <div className="links">
                <h3><a href="#header">{links[0]}</a></h3>
                <h3><a href="#projects">{links[1]}</a></h3>
                <h3><a href="#tools">{links[2]}</a></h3>
                <h3><a href="#about">{links[3]}</a></h3>
                <h3><a href="#contact">{links[4]}</a></h3>
            </div>
        </nav>
    );
}