import React, {useState} from "react"

export const Register = (props) => {

    const[email, setEmail] = useState('');
    const[pass, setPass] = useState('');
    const[name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name </label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="example" id="name" name="name"/><br/>
                <label htmlFor="email">Email </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email@mail.com" id="email" name="email"/><br/>
                <label htmlFor="password">Password </label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/><br/>
                <button type="submit">Log in</button>
            </form>
            <button onClick={() => props.onFormSwitch('login')}>Already have an account? Log in!</button>
        </>
    )
}