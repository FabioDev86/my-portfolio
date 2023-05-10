import { createContext, useContext, useState} from "react";

const LanguageContext = createContext("english");

export const LanguageProvider = ({children}) => {    
  
    const [language, setLanguage] = useState("english");
   
    return (
        <LanguageContext.Provider 
            value = {{
                language,
                changeLanguage: (selection) => setLanguage(selection)                
            }}
        >
            {children}
        </LanguageContext.Provider>
    );

}

export const useLanguage = () => useContext(LanguageContext);