import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import LoginImg from "../../../Assest/Images/Tools.svg";
import Input from "../../../Centimeter/Input/Input";
import Button from "../../../Centimeter/Button/Button";
import styles from "./Login.module.css";

export default function Login() {
    const router = useRouter()
    const [formData, setFormData] = useState({});
    const [formError, setFormError] = useState({});

    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }
    function handleSubmit(event) {
        event.preventDefault();
        setFormError({});
        if (!formData.username || formData.username.trim().length === 0) {
            setFormError({ ...formError, usernameError: "Username is required" });
            return;
        }
        if (!formData.password || formData.password.trim().length === 0) {
            setFormError({ ...formError, passwordError: "Password is required" });
            return;
        }
        if (!Object.keys(formError).length) {
            router.push('/admin')
        }
    }
    return (
        <div className="h-screen flex justify-content-between align-items-center">
            <form className={`pt-0 flex-column flex m-auto justify-content-center ${styles.input_container} ${styles.box_shadow_light }`}>
                <Image src={LoginImg} alt="LoginImg" className='m-auto' height={150}/>
                <h2 className={`text-center ${styles.line_in_text}`}>LOGIN</h2>
                <div className="mb-3">
                    <Input title='Enter Your Username' name="username" onChange={handleChange} value={formData.username} />
                    {formError.usernameError && (<p className={styles.text_red}>{formError.usernameError}</p>)}
                </div>
                <div className="mb-3">
                    <Input title='Enter Your Password' name="password" type='password' onChange={handleChange} value={formData.password} />
                    {formError.passwordError && (<p className={styles.text_red}>{formError.passwordError}</p>)}
                </div>
                <div className="mb-3">
                    <span className="underline cursor-pointer" disabled >Forgot Password?</span>
                </div>
                <Button disabled={!formData.username || !formData.password} onClick={handleSubmit}>Login</Button>
            </form>
        </div>

    );

}    