
import Layout from "@/components/Layout"
import {BEER_URL} from '@/config/index'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '@/styles/SingleBeer.module.scss'
import {AiFillStepBackward } from "react-icons/ai";
import Image from 'next/image'




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
        <Layout >
        <div className={styles.single__beer}>
        <h1>{beer.name}</h1>
        <Image src={'/beer.png'}  width={300}  height={400}/>
            <h2>{beer.type}</h2>
            <p>{beer.description}</p>
            <div className={styles.btn_box}>
                <Link href="/">
                    <button className={styles.btn_back}> <AiFillStepBackward/> See All Beers</button>
                </Link>
                <button className={styles.btn_delete} onClick={deletBeer}>Delete Beer</button>
            </div>
        </div>
        </Layout>
    )
}


// we get

export async function getServerSideProps({query: {slug}}){
    
    const res = await fetch(`${BEER_URL}/beers?slug=${slug}`)
    const beers = await res.json()

    return {

        props : {
            beer : beers[0]
        },
    }
}


