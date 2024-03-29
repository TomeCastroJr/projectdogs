import { useState } from "react"

export function UserPost(){
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(event){
        event.preventDefault()
        console.log({
            username,
            password,
            email
        })

        fetch('https://dogsapi.origamid.dev/json/api/user', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password
            }),
        }).then((response) =>{
            console.log(response)
            return response.json()
        }).then((json)=>{
            console.log(json)
            return json
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Username"
                value={username} 
                onChange={({target}) => setUserName(target.value)} 
            />
            <input 
                type="email" 
                placeholder="email"
                value={email} 
                onChange={({target}) => setEmail(target.value)} 
            />
            <input 
                type="password" 
                placeholder="password"
                value={password} 
                onChange={({target}) => setPassword(target.value)} 
            />
            <button>Enviar</button>
        </form>
    )
}