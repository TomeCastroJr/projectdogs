import { Link } from "react-router-dom";
import { Input } from "../Forms/Input";
import { Button } from "../Forms/Button";
import { UseForm } from "../../hooks/UseForm";
import { USER_POST } from "../../api";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import { Error } from "../Helper/Error";
import { UseFetch } from "../../hooks/UseFetch";

export function LoginCreate(){
    const username = UseForm()
    const email = UseForm('email')
    const password = UseForm()

    const {userLogin} = useContext(UserContext)
    const {error, loading, request} = UseFetch()

   async function handleSubmit(e){
        e.preventDefault()
        if(username.validate() && email.validate() && password.validate()){
            const {url, options} = USER_POST({
                username: username.value,
                email: email.value, 
                password: password.value})
            const {response, json} = await request(url, options)
            if(response.ok){
                await userLogin(username.value, password.value)
            }
        }
    }

    return(
        <section className="animeleft">
            <h1 className="title">Cadastre-se</h1>
            <form onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" name="username" {...username} />
                <Input label="Email" type="email" name="email" {...email} />
                <Input label="Senha" type="password" name="password" {...password} />
                {loading ? <Button disabled>Carregando...</Button>:
                <Button>Enviar</Button>}
                {error && <Error error={error}/>}
            </form>
        </section>
    )
}