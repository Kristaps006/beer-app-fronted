// import styles from '@styles/Header.module.css'
import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/beers">
                            <a>Beers</a>
                        </Link> 
                    </li>
                </ul>
            </nav>
        </header>
       
    )
}
