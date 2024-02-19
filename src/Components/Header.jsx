import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import Dog from '../Assets/dogs.svg?react'

export function Header(){
    return(
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link className={styles.logo} to="/" aria-label="Dogs - Home">
                    <Dog/>
                </Link>
                <Link className={styles.login} to="/login">Login / Criar</Link>    
            </nav>    
        </header>   
    )
}