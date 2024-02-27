import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import Dog from '../Assets/dogs.svg?react'
import { useContext } from 'react'
import { UserContext } from '../UserContext'

export function Header(){
    const {data, userLogout} = useContext(UserContext)
    return(
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link className={styles.logo} to="/" aria-label="Dogs - Home">
                    <Dog/>
                </Link>
                {data ? 
                <Link className={styles.login} to="/login">{data.nome}
                    <button onClick={userLogout} >Sair</button>
                </Link>:
                <Link className={styles.login} to="/login">Login / Criar</Link>}   
                 
            </nav>    
        </header>   
    )
}