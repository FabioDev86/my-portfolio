import { useLanguage } from "../contexts/LanguageProvider";
import data from "../text.json";
import { useFormik } from 'formik';

export default function Contact(){
    const { language } = useLanguage();
    let text = [];
    switch(language){
        case "english" : text = [data.contacts_text.header.english, data.contacts_text.name_label.english, data.contacts_text.email_label.english, data.contacts_text.message_label.english ]; break;
        case "italiano" : text = [data.contacts_text.header.italiano, data.contacts_text.name_label.italiano, data.contacts_text.email_label.italiano, data.contacts_text.message_label.italiano]; break;
        case "deutsch" : text = [data.contacts_text.header.deutsch, data.contacts_text.name_label.deutsch, data.contacts_text.email_label.deutsch, data.contacts_text.message_label.deutsch]; break;
    }

    const formik = useFormik({
        initialValues: {
            name: '', 
            email: '',
            message: ''
        },
        onSubmit: values => {},
      });

    return(
        <div>
            <h1>{ text[0] }</h1>
            <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">{text[1]}</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                /> 
                <label htmlFor="email">{text[2]}</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                /> 
                <label htmlFor="message">{text[3]}</label>
                <textarea
                    id="message"
                    name="message"
                    type="textarea"
                    onChange={formik.handleChange}
                    value={formik.values.message}
                /> 
                <button type="submit">Submit</button>
             </form>
        </div>
    );
}