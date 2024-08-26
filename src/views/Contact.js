import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';
import {faHourglassHalf} from '@fortawesome/free-solid-svg-icons';
import { sendForm } from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Trans, withNamespaces } from 'react-i18next';

const Contact = ({t}) => {
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
            await sendForm(
                process.env.REACT_APP_MAIL_SERVICE,
                process.env.REACT_APP_MAIL_TEMPLATE,
                "#contact-col",
                process.env.REACT_APP_MAIL_USER
            );
            toast.success(t('contact.send_success'));
        } catch (error) {
            toast.error(t('contact.send_failed'))
        }
        setLoading(false);
        return;
    }

    return (
        <div className="column container fullscreen center-h center-v">
            <div className="background-header">Contact</div>
            <div className="text-align-left-sm h-100 ml-auto mr-auto" style={{width: "90%"}}>
                <form id="contact-col" className="column h-100 center-v ml-auto mr-auto gap" onSubmit={handleSubmit(sendMsg)}>
                    <h2 className="font-rhyme text-light">
                        <Trans i18nKey="contact.title">
                            question ? <strong>Just ask</strong>
                        </Trans>
                    </h2>
                    <h3 className="font-space text-normal mt-xs mb-sm">{t('contact.subtitle')} <Icon icon={faHourglassHalf}></Icon></h3>
                    <div className="gap" style={{
                        display: "flex",
                        flexFlow: "row wrap"
                    }}>
                        <div className="input-layout">
                            <input type="text" placeholder={t('contact.form.firstName.value')} name="first_name" {...register("first_name", {required: true})}></input>
                            {errors.first_name?.type === 'required' && <div className="input-error">{t('contact.form.firstName.error')}</div>}
                        </div>
                        <div className="input-layout">
                            <input type="text" placeholder={t('contact.form.lastName.value')} name="last_name" {...register("last_name", {required: true})}></input>
                            {errors.last_name?.type === 'required' && <div className="input-error">{t('contact.form.lastName.error')}</div>}
                        </div>
                    </div>
                    <div className="gap" style={{
                        display: "flex",
                        flexFlow: "row wrap"
                    }}>
                        <div className="input-layout">
                            <input type="mail" placeholder={t('contact.form.mail.value')} name="from_email" {...register("from_email", {required: true, validate: testMail})}></input>
                            {errors.from_email?.type === 'required' && <div className="input-error">{t('contact.form.mail.error')}</div>}
                            {errors.from_email?.type === 'validate' && <div className="input-error">{t('contact.form.mail.format_error')}</div>}
                        </div>
                        <div className="input-layout">
                            <input type="text" placeholder={t('contact.form.subject.value')} name="subject" {...register("subject", {required: true})}></input>
                            {errors.subject?.type === 'required' && <div className="input-error">{t('contact.form.subject.error')}</div>}
                        </div>
                    </div>
                    <div className="gap" style={{
                        display: "flex",
                        flexFlow: "row wrap"
                    }}>
                        <div className="input-layout">
                            <textarea placeholder={t('contact.form.content.value')} name="message" {...register("message", {required: true})}></textarea>
                            {errors.message?.type === 'required' && <div className="input-error">{t('contact.form.content.error')}</div>}
                        </div >
                    </div>
                    <button disabled={isLoading} className="button" type="submit">{t('contact.send')}</button>
                </form>
            </div>
        </div>
    )
}


const testMail = (input) => {
    const mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return mailRegex.test(String(input).toLowerCase());
}
export default withNamespaces()(Contact);
