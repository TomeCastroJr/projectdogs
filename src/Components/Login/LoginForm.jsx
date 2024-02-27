import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Input } from "../Forms/Input";
import { Button } from "../Forms/Button";
import { UseForm } from "../../hooks/UseForm";
import { UserContext } from "../../UserContext";
import { Error } from "../Helper/Error";

export function LoginForm(){
    const username = UseForm()
    const password = UseForm()

    const {userLogin, error, loading} = useContext(UserContext)

   async function handleSubmit(e){
        e.preventDefault();

        if(username.validate() && password.validate()){
            userLogin(username.value, password.value)
            
        }
    }

    return(
        <section className="animeleft">
            <h1 className="title">Login</h1>
            <form onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" name="username" {...username} />
                <Input label="Senha" type="password" name="password" {...password}/>

                {loading ? <Button disabled>Carregando...</Button>:
                <Button>Enviar</Button>}
                
                {error && <Error error={error}/>}
            </form>
            <Link to="/login/criar" >Cadastro</Link>
        </section>
    )
}