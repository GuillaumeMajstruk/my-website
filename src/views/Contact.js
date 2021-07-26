import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';
import {faHourglassHalf} from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
    const { register, handleSubmit, formState, reset} = useForm();
    const {errors, isSubmitSuccessful} = formState;

    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                first_name: '',
                last_name: '',
                from_email: '',
                subject: '',
                message: ''
            });
        }
    }, [formState, isSubmitSuccessful, reset]);

    const sendMsg = async () => {
        try {
            setLoading(true);
            await emailjs.sendForm(
                process.env.REACT_APP_MAIL_SERVICE,
                process.env.REACT_APP_MAIL_TEMPLATE,
                "#contact-col",
                process.env.REACT_APP_MAIL_USER
            );
            toast.success("Your message were succesfully sent.");
        } catch (error) {
            toast.error("An error occured sending your message...")
        }
        setLoading(false);
        return;
    }

    return (
        <div className="column container fullscreen center-h center-v">
            <div className="background-header">Contact</div>
            <div className="center-h h-100 ml-auto mr-auto" style={{width: "90%"}}>
                <form id="contact-col" className="column h-100 center-v ml-auto mr-auto gap" onSubmit={handleSubmit(sendMsg)}>
                    <h2 className="font-rhyme">ASK ME ABOUT EVERYTHING YOU WANT</h2>
                    <h3 className="font-space text-normal mt-xs mb-sm">I'll be responding you ASAP <Icon icon={faHourglassHalf}></Icon></h3>
                    <div className="gap" style={{
                        display: "flex",
                        flexFlow: "row wrap"
                    }}>
                        <div className="input-layout">
                            <input type="text" placeholder="FIRST NAME..." name="first_name" {...register("first_name", {required: true})}></input>
                            {errors.first_name?.type === 'required' && <div className="input-error">First name is required</div>}
                        </div>
                        <div className="input-layout">
                            <input type="text" placeholder="LAST NAME..." name="last_name" {...register("last_name", {required: true})}></input>
                            {errors.last_name?.type === 'required' && <div className="input-error">Last name is required</div>}
                        </div>
                    </div>
                    <div className="gap" style={{
                        display: "flex",
                        flexFlow: "row wrap"
                    }}>
                        <div className="input-layout">
                            <input type="mail" placeholder="MAIL..." name="from_email" {...register("from_email", {required: true, validate: testMail})}></input>
                            {errors.from_email?.type === 'required' &&  <div className="input-error">Mail is required</div>}
                            {errors.from_email?.type === 'validate' &&  <div className="input-error">email format is incorrect</div>}
                        </div>
                        <div className="input-layout">
                            <input type="text" placeholder="SUBJECT..." name="subject" {...register("subject", {required: true})}></input>
                            {errors.subject?.type === 'required' && <div className="input-error">Subject is required</div>}
                        </div>
                    </div>
                    <div className="gap" style={{
                        display: "flex",
                        flexFlow: "row wrap"
                    }}>
                        <div className="input-layout">
                            <textarea placeholder="YOUR MESSAGE..." name="message" {...register("message", {required: true})}></textarea>
                            {errors.message?.type === 'required' && <div className="input-error">Message is required</div>}
                        </div >
                    </div>
                    <button disabled={isLoading} className="button" type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}


const testMail = (input) => {
    const mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return mailRegex.test(String(input).toLowerCase());
}
export default Contact;