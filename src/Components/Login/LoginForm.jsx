import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Input } from "../Forms/Input";
import { Button } from "../Forms/Button";
import { UseForm } from "../../hooks/UseForm";
import { UserContext } from "../../UserContext";

export function LoginForm(){
    const username = UseForm()
    const password = UseForm()

    const {userLogin, data} = useContext(UserContext)

   async function handleSubmit(e){
        e.preventDefault();

        if(username.validate() && password.validate()){
            userLogin(username.value, password.value)
            console.log(data)
        }
    }

    return(
        <section>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" name="username" {...username} />
                <Input label="Senha" type="password" name="password" {...password}/>

                <Button>Enviar</Button>
            </form>
            <Link to="/login/criar" >Cadastro</Link>
        </section>
    )
}