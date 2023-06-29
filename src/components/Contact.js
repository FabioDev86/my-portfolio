import { useLanguage } from "../contexts/LanguageProvider";
import data from "../text.json";
import {useField, Form, Formik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';


export default function Contact(){
    const { language } = useLanguage();
    let text = [];
    let errors = [];
    let alert_msg;
    switch(language){
        case "english" :    text = [data.contacts_text.header.english, data.contacts_text.name_label.english, data.contacts_text.email_label.english, data.contacts_text.message_label.english ]; 
                            errors = [data.contacts_text.required_name.english, data.contacts_text.required_email.english, data.contacts_text.required_message.english, data.contacts_text.invalid_email.english];
                            alert_msg = data.contacts_text.alert_msg.english;
                            break;
        case "italiano" :   text = [data.contacts_text.header.italiano, data.contacts_text.name_label.italiano, data.contacts_text.email_label.italiano, data.contacts_text.message_label.italiano]; 
                            errors = [data.contacts_text.required_name.italiano, data.contacts_text.required_email.italiano, data.contacts_text.required_message.italiano, data.contacts_text.invalid_email.italiano];
                            alert_msg = data.contacts_text.alert_msg.italiano;
                            break;
        case "deutsch" :    text = [data.contacts_text.header.deutsch, data.contacts_text.name_label.deutsch, data.contacts_text.email_label.deutsch, data.contacts_text.message_label.deutsch];
                            errors = [data.contacts_text.required_name.deutsch, data.contacts_text.required_email.deutsch, data.contacts_text.required_message.deutsch, data.contacts_text.invalid_email.deutsch];
                            alert_msg = data.contacts_text.alert_msg.deutch;
                            break;
    }

    const MyInput = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        return (
            <div className="input-box">                
                <label htmlFor={props.id || props.name}>{label}</label>
                <input className="input" {...field} {...props} />                  
                <div className="error">{ meta.touched && meta.error ? meta.error : null }</div>
            </div>
        );
    };
    const MyTextArea = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        return (
          <div className="input-box">          
            <label htmlFor={props.id || props.name}>{label}</label>
            <textarea className="input" {...field} {...props} />
            <div className="error">{ meta.touched && meta.error ? meta.error : null }</div>
          </div>
        );
    };
    async function handleSubmit(values){
        let params = {
            to_name : "Fabio",
            from_name : values.name,
            reply_to : values.email,
            message : values.message
        };
        emailjs.send('service_wsxg3dy', 'template_59d3ypj', params, 'n629mPkgzuzLZfXwH')
            .then((result) => {
                console.log(result.text);
                alert(alert_msg);
            }, (error) => {
                console.log(error.text);
            }
        );
    }      
    
    return(
        <div id="contact">
            <h1>{ text[0][0] } <span style={{color: "#3AA2C2"}}>{ text[0][1]}</span> </h1>
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
                onSubmit = { values => {handleSubmit(values)}}
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
                    <button type="submit" id="submit">Submit</button>
                </Form>
                
             </Formik>
        </div>
    );
}