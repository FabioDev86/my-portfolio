import { useLanguage } from "../contexts/LanguageProvider";
import data from "../text.json";

export default function About(){
    const { language } = useLanguage();
    let header = [];
    let body;
    switch(language){
        case "english" : header = data.about_text.header.english; body = data.about_text.body.english; break;
        case "italiano" : header = data.about_text.header.italiano; body = data.about_text.body.italiano; break;
        case "deutsch" : header = data.about_text.header.deutsch; body = data.about_text.body.deutsch; break;
    }
    return(
        <div id="about">
            <h1>{ header[0] }<span style={{color: "#3AA2C2"}}>{ header [1] }</span></h1>
            <p>{ body[0] }<span style={{color: "#3AA2C2"}}>{ body[1] }</span>{ body[2] }<span style={{color: "#3AA2C2"}}>{ body[3] }</span>{ body[4] } </p>
        </div>
    );
}