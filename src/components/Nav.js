import { useLanguage } from "../contexts/LanguageProvider";
import DropMenu from "./DropMenu";

export default function Nav(){
    const { language } = useLanguage();
    let links = [];
    console.log(language);
    switch(language){
        case "english" : links = ["Home","Projects","Blog","Contacts"]; break;
        case "italiano" : links = ["Pagina Iniziale","Progetti","Blog","Contatti"]; break;
        case "deutsch" : links = ["Startseite","Projekte","Bloggen","Kontakte"]; break;
    }
    console.log(links);
    return(
        <nav>
            <DropMenu />
            <h1>{links[0]}</h1>
            <h1>{links[1]}</h1>
            <h1>{links[2]}</h1>
            <h1>{links[3]}</h1>
        </nav>
    );
}