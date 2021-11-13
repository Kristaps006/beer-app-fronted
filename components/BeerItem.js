import Link from 'next/link'
import styles from '@/styles/BeerItems.module.scss'
import Image from 'next/image'


const BeerList =({beer}) =>{

  console.log(beer)

  
  
    return (
    
    
        <div className={styles.beer_item}>
            <Image src={'/beer.png'}  width={100}  height={100}/>
            <h2>{beer.name}</h2>
            <p className={styles.type}>{beer.type}</p>
           
            <Link href={`/beers/${beer.slug}`} >
               <button className={styles.primary_button}>See More</button>
            </Link>
        </div>
    
    )


}


export default BeerList