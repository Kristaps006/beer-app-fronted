
import Layout from "@/components/Layout"
import {BEER_URL} from '@/config/index'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function SingleBeer({beer}) {


    const router = useRouter()
    
    const deletBeer = async (e)=>{
        const res= await fetch(`${BEER_URL}/beers/${beer.id}`,{

            method: 'DELETE',
        })
    
        const data = await res.json()
        if(data){
            router.push(`/`)
        }
    }
    
    console.log(beer)
    return (
        <div>
            <h1>{beer.name}</h1>
            <p>{beer.description}</p>
            <Link href="/">
                <button>Go Back</button>
            </Link>
            <button onClick={deletBeer}>Delete Beer</button>
           
        </div>
    )
}



export async function getServerSideProps({query: {slug}}){

    const res = await fetch(`${BEER_URL}/beers?slug=${slug}`)
    const beers = await res.json()

    

    return {

        props : {
            beer : beers[0]
        },
    }
}


