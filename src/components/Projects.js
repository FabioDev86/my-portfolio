import { useLanguage } from "../contexts/LanguageProvider";
import MyCarousel from "./MyCarousel";
import data from "../text.json";

export default function Projects(){
    const { language } = useLanguage();
    let text = [];
    switch(language){
        case "english" : text = [data.project_text.title.english, data.project_text.sub_title.english]; break;
        case "italiano" : text = [data.project_text.title.italiano, data.project_text.sub_title.italiano]; break;
        case "deutsch" : text = [data.project_text.title.deutsch, data.project_text.sub_title.deutsch]; break;
    }
    return(
        <div className="projects">
            <h1>{ text[0] }</h1>
            <h2>{ text[1] }</h2>
            <MyCarousel lang={ language }/>
        </div>
    );
} 