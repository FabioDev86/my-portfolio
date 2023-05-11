import { useLanguage } from "../contexts/LanguageProvider";
import DropMenu from "./DropMenu";

export default function Nav(){
    const { language } = useLanguage();
    let links = [];
    switch(language){
        case "english" : links = ["Home","Projects","Blog","Contacts"]; break;
        case "italiano" : links = ["Pagina Iniziale","Progetti","Blog","Contatti"]; break;
        case "deutsch" : links = ["Startseite","Projekte","Bloggen","Kontakte"]; break;
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