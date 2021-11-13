

import {useState} from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/BeerSearch.module.scss'



export default function BeerSearch() {

    const router = useRouter()

    const [ searchValue, setSearchValue] = useState('')
    
    const searchHandler = (e)=>{
        e.preventDefault()
        router.push(`/beers/search?term=${searchValue}`)

    }

    return (
        <div className={styles.searchFrom}>
            <form  onSubmit={searchHandler}>
            <input type="text" value={searchValue} onChange={(e)=> setSearchValue(e.target.value)} placeholder={'Search for your favorite beer'} />
            </form>
            
        </div>
    )
}
