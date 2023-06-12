import { useLanguage } from "../contexts/LanguageProvider";
import text from "../text.json";

export default function Skills(){
    const { language } = useLanguage();
    let header;
    switch(language){
        case "english" : header = text.tools_text.english; break;
        case "italiano" : header = text.tools_text.italiano; break;
        case "deutsch" : header = text.tools_text.deutsch; break;
    }
    return(
        <div id="skills">
            <h1 style={{filter: "drop-shadow(3px 3px 3px gray)"}}>{ header[0] }<span style={{color: "#3AA2C2"}}>{ header[1] }</span></h1>
            <div id="skills-icons">
                <img src="tools/html.svg" alt="html 5 icon" role="img" title="HTML 5"/>
                <img src="tools/css3.svg" alt="css 3 icon" role="img" title="CSS 3"/>
                <img src="tools/javascript.svg" alt="javascript icon" role="img" title="Javascript"/>
                <img src="tools/visual-studio.svg" alt="Visual Studio Code icon" role="img" title="Visual Studio Code"/>
                <img src="tools/react.svg" alt="React icon" role="img" title="React"/>
                <img src="tools/figma.svg" alt="Figma icon" role="img" title="Figma"/>
                <img src="tools/github.svg" alt="GitHub icon" role="img" title="GitHub"/>
                <img src="tools/bootstrap.svg" alt="Bootstrap icon" role="img" title="Bootstrap"/>
                <img src="tools/firebase.svg" alt="Firebase icon" role="img" title="Firebase"/>  
                <img src="tools/formik.png" alt="Formik icon" role="img" title="Formik"/>   
            </div>       
        </div>
    );
}