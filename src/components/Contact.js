import { useLanguage } from "../contexts/LanguageProvider";
import data from "../text.json";
import {useField, Form, Formik } from 'formik';
import * as Yup from 'yup';


export default function Contact(){
    const { language } = useLanguage();
    let text = [];
    let errors = [];
    switch(language){
        case "english" :    text = [data.contacts_text.header.english, data.contacts_text.name_label.english, data.contacts_text.email_label.english, data.contacts_text.message_label.english ]; 
                            errors = [data.contacts_text.required_name.english, data.contacts_text.required_email.english, data.contacts_text.required_message.english, data.contacts_text.invalid_email.english];
                            break;
        case "italiano" :   text = [data.contacts_text.header.italiano, data.contacts_text.name_label.italiano, data.contacts_text.email_label.italiano, data.contacts_text.message_label.italiano]; 
                            errors = [data.contacts_text.required_name.italiano, data.contacts_text.required_email.italiano, data.contacts_text.required_message.italiano, data.contacts_text.invalid_email.italiano];
                            break;
        case "deutsch" :    text = [data.contacts_text.header.deutsch, data.contacts_text.name_label.deutsch, data.contacts_text.email_label.deutsch, data.contacts_text.message_label.deutsch];
                            errors = [data.contacts_text.required_name.deutsch, data.contacts_text.required_email.deutsch, data.contacts_text.required_message.deutsch, data.contacts_text.invalid_email.deutsch];
                            break;
    }

    const MyInput = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        return (
          <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="input" {...field} {...props} />
            {meta.touched && meta.error ? (
              <div className="error">{meta.error}</div>
            ) : null}
          </>
        );
    };
    const MyTextArea = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        return (
          <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <textarea className="input" {...field} {...props} />
            {meta.touched && meta.error ? (
              <div className="error">{meta.error}</div>
            ) : null}
          </>
        );
    };
      
    
    return(
        <div>
            <h1>{ text[0] }</h1>
            <Formik 
                initialValues = {{
                    name: '', 
                    email: '',
                    message: ''
                }}
                validationSchema = {
                    Yup.object({
                        name: Yup.string().required(errors[0]),
                        email: Yup.string().email(errors[3]).required(errors[1]),
                        message: Yup.string().required(errors[2])
                    })
                }
                onSubmit = { values => {}}
            >
                <Form>
                    <MyInput 
                        label={ text[1] }
                        name="name"
                        type="text"
                    />
                    <MyInput 
                        label={ text[2] }
                        name="email"
                        type="email"
                    />
                    <MyTextArea 
                        label={ text[3] }
                        name="message"
                        type="textarea"
                    />
                    <button type="submit">Submit</button>
                </Form>
             </Formik>
        </div>
    );
}