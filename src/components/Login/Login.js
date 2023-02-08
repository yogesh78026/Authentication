import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import Inputform from '../InputForm/Inputform'
import styles from "./login.module.css"
export default function Login() {
    const [values, setValues] = useState({
        name: "",
        pass: ""
    })
    const navigate = useNavigate()
    const [errorMsg, setErrorMsg] = useState("")
    const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false)
    const handleSubmission = () => {
        if (!values.email || !values.pass) {
            setErrorMsg("Fill all Fields")
            return
        }
        signInWithEmailAndPassword(auth, values.email, values.pass).then((res) => {
            navigate("/todo")
        }).catch((err) => {
            setErrorMsg(err.message)
        })
    }
    return (
        <div className={styles.container}>
            <div className={styles.innerBox}>
                <h1 className={styles.heading}>Login</h1>

                <Inputform type='email' label="Email" placeholder="Enter your email"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, email: event.target.value }))
                    } />
                <Inputform type='password' label="Password" placeholder="Enter your password"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, pass: event.target.value }))
                    } />
                <div className={styles.footer}>
                    <b className={styles.error}>{errorMsg}</b>
                    <button onClick={handleSubmission} disabled={submitBtnDisabled}>Login</button>
                    <p>Don't have an account? {" "}
                        <span>
                            <Link to="/signup">Signup</Link>
                        </span>
                    </p>
                </div>
            </div>

        </div>
    )
}