import Link from 'next/link'
import {BEER_URL} from '@/config/index'


export default function Beer({ ninja }) {
    return (
        <div>
            <h1>{ninja.name}</h1>
            <Link href="/">
            <button>Back</button>
            </Link>
        </div>
    )
}


// export const getStaticProps = async (context) => {
 
//     const id = context.params.id
//     const response = fetch(`${BEER_URL}/api/beers/${id}`)
//     const data = await response.json()


//     return {

//         props:{beer:data}
//     }
//   }
  

// export const getStaticPath = async ()=>{

//     const response = await fetch(`${BEER_URL}/api/beers`)
//     const data = await response.json()

//     const paths = data.map(ninja=> {
//         return {
//             params: { id: ninja.id.toString()}
//         }
//     })

//     return{

//         paths,
//         fallback:false
//     }
// }


  

export const getStaticProps = async (context) => {
    const res = await fetch(`${BEER_URL}/api/beers/${context.params.id}`)
  
    const article = await res.json()
    
    return {
      props: {article}
    }
       
  }
  
  export const getStaticPaths = async () => {
    const res = await fetch(`${BEER_URL}/api/beers`)
    const data= await res.json()
    
    const paths = data.map(ninja => {
        return{
            params: { id: ninja.id.toString()}
        }
    })
  
    return {
      paths,
      fallback: false,
    }
  }

