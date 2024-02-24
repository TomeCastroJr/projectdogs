import { createContext, useEffect, useState } from 'react'
import { TOKEN_POST, TOKEN_VALIDATE_TOKEN, USER_GET } from './api'

export const UserContext = createContext()

export function UserStorage({ children }){
    const [data, setData] = useState(null)
    const [login, setLogin] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        async function autoLogin(){
            const token = window.localStorage.getItem('token')
            if(token){
                try{
                    setError(null)
                    setLoading(true)
                    const {url, options} = TOKEN_VALIDATE_TOKEN(token)
                    const response = await fetch(url, options)
                    if(!response.ok) throw new Error("Usuário inválido")
                    await getUser(token)

                }catch(err){
                    
                }finally{
                    setLoading(false)
                }
            }
        }
        autoLogin()
    },[])

    async function getUser(token){
        const {url, options} = USER_GET(token)
        const response = await fetch(url, options)
        const json = await response.json()
        setData(json)
    }

    async function userLogin(username, password){
        const {url, options} = TOKEN_POST({username, password})
        const response = await fetch(url, options)
        const json = await response.json()
        window.localStorage.setItem('token', json.token)
        await getUser(json.token)
    }

    return(
        <UserContext.Provider value={{userLogin, data}}> 
            {children}
        </UserContext.Provider>
    )
}