import React, {useState} from "react"

export const Login = (props) => {

    const[email, setEmail] = useState('');
    const[pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email@mail.com" id="email" name="email"/><br/>
                <label htmlFor="password">Password </label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/><br/>
                <button type="submit">Log in</button>
            </form>
            <button onClick={ () => props.onFormSwitch('register')}>Don&apos;t have an account? Register!</button>
        </>
    )
}