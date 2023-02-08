import React, { useState } from 'react'
import Inputform from '../InputForm/Inputform'
import styles from './Signup.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../firebase'
export default function Signup() {

    const [values, setValues] = useState({
        name: "",
        email: "",
        pass: "",
    })
    const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false)
    const navigate = useNavigate()
    const [errorMsg, setErrorMsg] = useState("")
    const handleSubmission = () => {
        if (!values.name || !values.email || !values.pass) {
            setErrorMsg("Fill All Fields")
            return;
        }
        setErrorMsg("")
        setSubmitBtnDisabled(true)
        createUserWithEmailAndPassword(auth, values.email, values.pass).then((res) => {
            const user = res.user;
            console.log(user)
            updateProfile(user, {
                displayName: values.name
            })
            navigate("/login")
        }).catch((err) => {
            setSubmitBtnDisabled(false)
            setErrorMsg(err.message)
        })

    }
    return (
        <div className={styles.container}>
            <div className={styles.innerBox}>
                <h1 className={styles.heading}>SignUp</h1>
                <Inputform type='text' label="Name" placeholder="Enter your name"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, name: event.target.value }))
                    } />
                <Inputform type='email' label="Email" placeholder="Enter your email"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, email: event.target.value }))
                    } />
                <Inputform type='password' label="password" placeholder="Enter your password"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, pass: event.target.value }))
                    } />
                <div className={styles.footer}>
                    <b className={styles.error}>{errorMsg}</b>
                    <button onClick={handleSubmission} disabled={submitBtnDisabled}>SignUp</button>
                    <p>Already have an account? {" "}
                        <span>
                            <Link to="/login">Login</Link>
                        </span>
                    </p>
                </div>
            </div>

        </div>
    )
}