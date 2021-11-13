
import BeerItem from '@/components/BeerItem'
import Layout from '@/components/Layout'
import qs from 'qs'
import {BEER_URL} from '@/config/index'
import styles from '@/styles/Search.module.scss'


export default function Search({beers}) {




    return (
            <Layout>
                <div className={styles.search_page}>
                    {beers.length ===0 && <h1>No beers matched</h1>}
                    {beers.map((beer)=>(
                        <BeerItem key={beer.id} beer={beer} />
                        ))}
                </div>
            </Layout> 
        )
    }

/* Fetching serversideprops to constantly update the data. Using query to match
 the search term that is passed through the router in BeerSearch component */

export async function getServerSideProps({query: {term}}){

    const query = qs.stringify({
        _where: {
          _or: [
            { description_contains: term }, 
            { name_contains: term }, 
            { type_contains: term }
          ],
        },
      });

    
    const res = await fetch(`${BEER_URL}/beers?${query}`)
    const beers = await res.json()

    return {

        props : 
            {beers}
        
    }
}