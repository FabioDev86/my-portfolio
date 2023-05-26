import { useLanguage } from "../contexts/LanguageProvider";
import data from "../text.json";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { red } from "@material-ui/core/colors";

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
    const formik = useFormik({
        initialValues: {
            name: '', 
            email: '',
            message: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required(errors[0]),
            email: Yup.string().email(errors[3]).required(errors[1]),
            message: Yup.string().required(errors[2])
        }),
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
                    {...formik.getFieldProps('name')}
                /> 
                {formik.touched.name && formik.errors.name ? (
                    <div>{formik.errors.name}</div>
                ) : null}
                <label htmlFor="email">{text[2]}</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null} 
                <label htmlFor="message">{text[3]}</label>
                <textarea
                    id="message"
                    name="message"
                    type="textarea"
                    {...formik.getFieldProps('message')}
                />
                {formik.touched.message && formik.errors.message ? (
                    <div>{formik.errors.message}</div>
                ) : null} 
                <button type="submit">Submit</button>
             </form>
        </div>
    );
}