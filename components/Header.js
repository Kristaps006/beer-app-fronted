// import styles from '@styles/Header.module.css'
import Link from 'next/link'
import styles from '@/styles/Header.module.scss'
import Image from 'next/image'
import BeerSearch from '@/components/BeerSearch'
export default function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/beers/add">
                            <a>Add Beer</a>
                        </Link> 
                    </li>
                </ul>
                <BeerSearch />
                <Image src={'/logo.png'}  width={100}  height={100}/>
            </nav>
        </header>
       
    )
}
