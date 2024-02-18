import { useState } from "react"

export function TokenPost(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')

    function handleSubmit(e){
        e.preventDefault()

        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        }).then((response) => {
            console.log(response)
            return response.json()
        }).then((json) => {
            console.log(json)
            setToken(json.token)
            return json
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="username"
                value={username}
                onChange={({ target })=>setUsername(target.value)}
            />
            <input 
                type="password" 
                placeholder="password"
                value={password}
                onChange={({ target })=>setPassword(target.value)}
            />
            <button>enviar</button>
            {token}
        </form>
    )
}