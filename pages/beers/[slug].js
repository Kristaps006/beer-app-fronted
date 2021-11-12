
import Layout from "@/components/Layout"
import {BEER_URL} from '@/config/index'
import Link from 'next/link'


export default function SingleBeer({beer}) {
    return (
        <div>
            <h1>{beer.name}</h1>
            <p>{beer.description}</p>
            <Link href="/">
                <button>Go Back</button>
            </Link>
        </div>
    )
}



export async function getServerSideProps({query: {slug}}){

    const res = await fetch(`${BEER_URL}/api/beers/${slug}`)
    const beers = await res.json()

    console.log(beers)

    return {

        props : {
            beer : beers[0]
        },
    }
}

