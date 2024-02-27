import { createContext, useCallback, useEffect, useState } from 'react'
import { TOKEN_POST, TOKEN_VALIDATE_TOKEN, USER_GET } from './api'
import { useNavigate } from 'react-router-dom'

export const UserContext = createContext()

export function UserStorage({ children }){
    const [data, setData] = useState(null)
    const [login, setLogin] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const userLogout = useCallback(async function (){
        window.localStorage.removeItem('token')
        setData(null)
        setError(null)
        setLoading(false)
        setLogin(false)
        navigate('/login')
    },[navigate])

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
                    userLogout()
                }finally{
                    setLoading(false)
                }
            }
        }
        autoLogin()
    },[userLogout])

    async function getUser(token){
        const {url, options} = USER_GET(token)
        const response = await fetch(url, options)
        const json = await response.json()
        setLogin(true)
        setData(json)
    }

    async function userLogin(username, password){
        try{
            setError(null)
            setLoading(true)
            const {url, options} = TOKEN_POST({username, password})
            const response = await fetch(url, options)
            if(!response.ok) throw new Error("Usuário inválido")
            const json = await response.json()
            window.localStorage.setItem('token', json.token)
            await getUser(json.token)
            navigate('/conta')
        }catch(err){
            setError(err.message)
            setLogin(false)
        }finally{
            setLoading(false)
        }
    }

    return(
        <UserContext.Provider value={{userLogin, data, userLogout, error, loading, login}}> 
            {children}
        </UserContext.Provider>
    )
}